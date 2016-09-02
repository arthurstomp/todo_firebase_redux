import firebase from '../initializers/firebase'

export const REQUEST_TOGGLE_TODO = 'REQUEST_TOGGLE_TODO'
export const RECEIVE_TOGGLE_TODO = 'RECEIVE_TOGGLE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

const requestToggleTodo = (id) => {
  return {
    type: REQUEST_TOGGLE_TODO,
    id
  }
}

const receiveToggleTodo = (id) => {
  return {
    type: RECEIVE_TOGGLE_TODO,
    id
  }
}

// Export toggleTodo action creator.
const toggleTodo = (id) => {
  return dispatch => {
    dispatch(requestToggleTodo)
    let toggledTodoRef = firebase.database().ref('/todos/' + id)
    toggledTodoRef.once('value', snapshot => {
      let todo = snapshot.val()
      todo.completed = !todo.completed
      toggledTodoRef.set(todo).then(() => {
        dispatch(receiveToggleTodo(id))
      })
    })
  }
}

export default toggleTodo
