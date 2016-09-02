import { REQUEST_SET_VISIBILITY_FILTER,
         RECEIVE_SET_VISIBILITY_FILTER,
         SET_VISIBILITY_FILTER } from '../actions/set_visibility_filter'

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
