import { REQUEST_INIT_TOODOS,
         RECEIVE_INIT_TOODOS,
         INIT_TOODOS } from '../actions/init_todos'

import { REQUEST_ADD_TODO,
         RECEIVE_ADD_TODO,
         ADD_TODO } from '../actions/add_todo'

import {REQUEST_TOGGLE_TODO,
        RECEIVE_TOGGLE_TODO,
        TOGGLE_TODO } from '../actions/toggle_todo'

const todo = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case RECEIVE_TOGGLE_TODO:
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })
    case RECEIVE_INIT_TOODOS:
      return action.todos
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ]
    case RECEIVE_TOGGLE_TODO:
      return state.map(t =>
        todo(t, action)
      )
    case INIT_TOODOS:
      return todo(undefined, action)
    case RECEIVE_INIT_TOODOS:
      return todo(undefined, action)
    default:
      return state
  }
}

export default todos
