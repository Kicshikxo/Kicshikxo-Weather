import { Router } from 'express'
import { weatherController } from '~/controller/weather.controller.js'

const router = Router()

router.get('/weather', weatherController)

export default router
