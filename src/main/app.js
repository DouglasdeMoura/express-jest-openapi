import express, { json, urlencoded } from 'express'
import { oapi } from './oapi'
import { router } from './routes'

const app = express()

app.use(json())
app.use(urlencoded({ extended: true }))
app.use(oapi)
app.use('/docs', oapi.swaggerui)
app.use(router)

app.use((_, res, next) => {
  res.setHeader('X-Powered-By', 'Express')
  next()
})

export { app }
