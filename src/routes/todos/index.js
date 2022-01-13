/**
 * /todos handler
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
function handler (_, res) {
  res.json([
    {
      id: 1,
      title: 'Todo 1',
      completed: false
    },
    {
      id: 2,
      title: 'Todo 2',
      completed: false
    }
  ])
}

handler.method = 'GET'
handler.path = '/todos'
handler.schema = {
  summary: 'Todos',
  description: 'Returns a list of todos',
  responses: {
    200: {
      description: 'Successful',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: {
                  type: 'string'
                },
                title: {
                  type: 'string'
                },
                completed: {
                  type: 'boolean'
                }
              }
            }
          }
        }
      }
    }
  }
}

export { handler as todosHandler }
