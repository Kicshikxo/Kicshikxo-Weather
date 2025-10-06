import { Request, Response } from 'express'
import { getCityWeather } from '~/service/weather.service.js'

export async function weatherController(request: Request, response: Response) {
  const city = request.query.city as string
  if (!city) return response.status(400).json({ error: 'MISSING CITY QUERY PARAM' })

  try {
    const weatherData = await getCityWeather(city)
    response.json(weatherData)
  } catch (error: any) {
    if (error.message === 'City not found') {
      response.status(404).json({ error: 'CITY NOT FOUND' })
    } else {
      console.error(error)
      response.status(500).json({ error: 'INTERNAL SERVER ERROR' })
    }
  }
}
