import {addTodo, setVisibilityFilter, toggleTodo} from '../../modules/actions/'
describe('addTodo', () => {
  it('should have the right type', () => {
    var addTodoAction = addTodo()
    expect(addTodoAction.type).toEqual('ADD_TODO')
  })
  it('should have text', () => {
    var addTodoAction = addTodo('test')
    expect(addTodoAction.text).toEqual('test')
  })
})

// describe('setVisibilityFilter', () => {
//
// })
