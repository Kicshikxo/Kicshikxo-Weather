import { Router } from 'express'
import { weatherController } from '~/controller/weather.controller'

const router = Router()

router.get('/weather', weatherController)

export default router
