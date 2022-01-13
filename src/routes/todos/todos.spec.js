import { todosHandler } from '.'

describe('todosHandler', () => {
  it('should have a GET method defined', () => {
    expect(todosHandler.method).toBe('GET')
  })

  it('should have a path defined', () => {
    expect(todosHandler.path).toBe('/todos')
  })

  it('should have a schema defined', () => {
    expect(todosHandler.schema).toBeDefined()
  })

  it('should return a list of todos', () => {
    const res = {
      json: jest.fn()
    }

    todosHandler(undefined, res)

    expect(res.json).toHaveBeenCalledWith([
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
  })
})
