import firebase from '../initializers/firebase'

export const REQUEST_INIT_TOODOS = 'REQUEST_INIT_TOODOS'
export const RECEIVE_INIT_TOODOS = 'RECEIVE_INIT_TOODOS'
export const INIT_TOODOS = 'INIT_TOODOS'

const requestInitTodos = () => {
  return {
    type: REQUEST_INIT_TOODOS
  }
}

const receiveInitTodos = (todos) => {
  return {
    type: RECEIVE_INIT_TOODOS,
    todos
  }
}

const initTodos = () => {
  console.log('init todos')
  return dispatch => {
    dispatch(requestInitTodos)
    let todosRef = firebase.database().ref('/todos/')
    todosRef.once('value', snapshot => {
      let todos = snapshot.val()
      let todosState = []
      todos.map(todo => {
        todosState.append({
          text: todo.text,
          completed: todo.completed
        })
      })
      console.log('todos')
      console.log(todos)
      dispatch(receiveInitTodos(todos))
    })
  }
}

export default initTodos
