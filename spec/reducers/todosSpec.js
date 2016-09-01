import {addTodo, toggleTodo} from '../../modules/actions/'
import todos from '../../modules/reducers/todos'
describe('todos Reducer', () => {
  var todosState = []
  var testTodoId = 0

  beforeEach(() => {
    var addTodoAction = addTodo('test')
    testTodoId = addTodoAction.id
    todosState = todos([], addTodoAction)
  })

  it('should responde to an unexpected action', () => {
    var action = {type: 'UNEXPECTED'}
    expect(todos([], action)).toEqual([])
  })

  it('should add todo', () => {
    var addTodoAction = addTodo('test')
    var newState = todos(todosState, addTodoAction)
    expect(newState.length).toEqual(2)
  })

  it('should add todo as not completed', () => {
    todosState.map(t => {
      expect(t.completed).toEqual(false)
    })
  })

  it('should toggle todo completed state', () => {
    var toggleTodoAction = toggleTodo(testTodoId)
    expect(todosState.length).toEqual(1)
    var newState = todos(todosState, toggleTodoAction)
    newState.map(nt => {
      if (nt.id === testTodoId) {
        expect(nt.completed).toEqual(true)
      }
    })
  })

  it('should return same state if id doesnt exist', () => {
    var wrongTodoId = -1
    var toggleTodoAction = toggleTodo(wrongTodoId)
    var sameState = todos(todosState, toggleTodoAction)
    expect(sameState).toEqual(todosState)
  })
})
