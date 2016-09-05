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
  return dispatch => {
    dispatch(requestInitTodos)
    let todosRef = firebase.database().ref('/todos/')
    todosRef.once('value').then(snapshot => {
      let todos = snapshot.val()
      let todosState = []
      for (let todo in todos) {
        todosState.push({
          id: todo,
          text: todos[todo].text,
          completed: todos[todo].completed
        })
      }
      dispatch(receiveInitTodos(todosState))
    })
  }
}

export default initTodos
