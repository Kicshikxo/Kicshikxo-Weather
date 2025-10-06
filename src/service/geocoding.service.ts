import axios from 'axios'

export interface GeocodingResult {
  id: number
  name: string
  latitude: number
  longitude: number
  elevation: number
  timezone: string
  feature_code: string
  country_code: string
  country: string
  country_id: number
  population: number
  postcodes?: string[]
  admin1?: string
  admin2?: string
  admin3?: string
  admin4?: string
  admin1_id?: number
  admin2_id?: number
  admin3_id?: number
  admin4_id?: number
}

export interface GeocodingResponse {
  results: GeocodingResult[]
  generationtime_ms: number
}

export async function getCityGeocoding(city: string): Promise<GeocodingResult> {
  const { data } = await axios.get<GeocodingResponse>(
    'https://geocoding-api.open-meteo.com/v1/search',
    {
      params: {
        name: city,
        count: 1,
      },
    },
  )

  if (!data.results?.length) {
    throw new Error('City not found')
  }

  return data.results[0]
}
