import {addTodo, setVisibilityFilter, toggleTodo} from '../../modules/actions/'
describe('addTodo Action', () => {
  it('should have the right type', () => {
    var addTodoAction = addTodo()
    expect(addTodoAction.type).toEqual('ADD_TODO')
  })
  it('should have text', () => {
    var addTodoAction = addTodo('test')
    expect(addTodoAction.text).toEqual('test')
  })
})

describe('setVisibilityFilter Action', () => {
  it('should have the right type', () => {
    var addTodoAction = setVisibilityFilter()
    expect(addTodoAction.type).toEqual('SET_VISIBILITY_FILTER')
  })

  it('should have filter', () => {
    var setVisibilityFilterAction = setVisibilityFilter('test')
    expect(setVisibilityFilterAction.filter).toEqual('test')
  })
})

describe('toggleTodo Action', () => {
  it('should have the right type', () => {
    var toggleTodoAction = toggleTodo()
    expect(toggleTodoAction.type).toEqual('TOGGLE_TODO')
  })
  it('should have id', () => {
    var toggleTodoAction = toggleTodo(1)
    expect(toggleTodoAction.id).toEqual(1)
  })
})
