import express from 'express'
import path from 'path'
import weatherRouter from '~/route/weather.route.js'

const app = express()

app.use(express.static(path.join(path.dirname(import.meta.url), 'public')))

app.use(weatherRouter)

export default app
