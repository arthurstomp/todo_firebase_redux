import firebase from '../initializers/firebase'

export const REQUEST_ADD_TODO = 'REQUEST_ADD_TODO'
export const RECEIVE_ADD_TODO = 'RECEIVE_ADD_TODO'
export const ADD_TODO = 'ADD_TODO'

const requestAddTodo = (text) => {
  return {
    type: REQUEST_ADD_TODO,
    text
  }
}

const receiveAddTodo = (id, text, completed) => {
  return {
    type: RECEIVE_ADD_TODO,
    id,
    text,
    completed
  }
}

const addTodo = (text) => {
  return dispatch => {
    dispatch(requestAddTodo)
    let newTodo = firebase.database().ref().child('todos').push()
    newTodo.set({
      text,
      completed: false
    }).then(() => {
      dispatch(receiveAddTodo(newTodo.key, text, false))
    })
  }
}
// Export addTodo action creator.
export default addTodo
