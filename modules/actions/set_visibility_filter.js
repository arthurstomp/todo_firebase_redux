export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

// Export setVisibilityFilter action creator.
const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}
export default setVisibilityFilter
