import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import weatherRouter from '~/route/weather.route.js'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static(path.join(__dirname, 'public')))

app.use(weatherRouter)

export default app
