import request from 'supertest'
import { app } from './app'

describe('/ping', () => {
  it('should return a response for the healthcheck endpoint', () => {
    return request(app)
      .get('/ping')
      .then(response => {
        expect(response.statusCode).toBe(200)
        expect(response.text).toBe('pong')
      })
  })
})
