import { createClient } from 'redis'

const redisClient = createClient({
  url: process.env.REDIS_URL,
})
redisClient.on('error', (error) => console.error('Redis', error))

export async function connectRedisClient() {
  await redisClient.connect()
}

export async function getRedisCache(key: string) {
  return await redisClient.get(key)
}

export async function setRedisCache(key: string, value: string) {
  return await redisClient.set(key, value)
}

export async function setRedisExpiredCache(key: string, ttlSeconds: number, value: string) {
  return await redisClient.setEx(key, ttlSeconds, value)
}

export default redisClient
