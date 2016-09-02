// Export addTodo action creator.
export const addTodo = (id,text) => {
  return {
    type: 'ADD_TODO',
    id,
    text
  }
}

// Export setVisibilityFilter action creator.
export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

// Export toggleTodo action creator.
export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
