import { Router } from 'express'
import { oapi } from './oapi'
import * as routes from '../routes'

const router = Router()

// health check endpoint
router.get(
  '/ping',
  oapi.path({
    summary: 'Ping',
    description: 'Returns "pong" for health check purposes',
    responses: {
      200: {
        description: 'Successful',
        content: {
          'application/json': {
            schema: {
              type: 'string',
              example: 'pong'
            }
          }
        }
      }
    }
  }),
  (_, res) => {
    res.send('pong')
  })

// Load all routes
Object.keys(routes).forEach(key => {
  const handler = routes[key]
  router[handler.method.toLowerCase()](
    handler.path,
    oapi.path(handler.schema),
    handler
  )
})

export { router }
