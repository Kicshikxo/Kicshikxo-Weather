import { fetchWeatherApi } from 'openmeteo'
import { getCityGeocoding } from '~/service/geocoding.service'
import { getRedisCache, setRedisExpiredCache } from '~/utils/redis.client'

const WEATHER_CACHE_TTL_SECONDS = 15 * 60

export interface WeatherData {
  city: string
  latitude: number
  longitude: number
  hourly: {
    time: Date[]
    temperature_2m: number[]
  }
}

export async function getCityWeather(city: string): Promise<WeatherData> {
  const weatherCacheKey = `weather:${city.toLowerCase()}`

  const cachedWeather = await getRedisCache(weatherCacheKey)
  if (cachedWeather) return JSON.parse(cachedWeather) as WeatherData

  const cityGeocoding = await getCityGeocoding(city)
  const { latitude, longitude } = cityGeocoding

  const [response] = await fetchWeatherApi('https://api.open-meteo.com/v1/forecast', {
    latitude,
    longitude,
    hourly: 'temperature_2m',
    start_hour: new Date().toISOString().slice(0, 16),
    end_hour: new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString().slice(0, 16),
  })

  if (!response) {
    throw new Error('NO WEATHER DATA')
  }

  const utcOffsetSeconds = response.utcOffsetSeconds()
  const hourly = response.hourly()!

  const weatherHourly = {
    time: [...Array((Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval())].map(
      (_, index) =>
        new Date((Number(hourly.time()) + index * hourly.interval() + utcOffsetSeconds) * 1000),
    ),
    temperature_2m: Array.from(hourly.variables(0)!.valuesArray() ?? []),
  }

  const weatherData: WeatherData = {
    city,
    latitude,
    longitude,
    hourly: weatherHourly,
  }

  await setRedisExpiredCache(
    weatherCacheKey,
    WEATHER_CACHE_TTL_SECONDS,
    JSON.stringify(weatherData),
  )

  return weatherData
}
