import app from '~/server.js'
import { connectRedisClient } from '~/utils/redis.client.js'

const PORT = process.env.PORT || 3000

async function main() {
  await connectRedisClient()

  app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
  })
}

main().catch(console.error)
