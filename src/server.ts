import express from 'express'
import path from 'path'
import weatherRouter from '~/route/weather.route'

const app = express()

app.use(express.static(path.join(import.meta.dirname, 'public')))

app.use(weatherRouter)

export default app
