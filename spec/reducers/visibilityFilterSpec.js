import { setVisibilityFilter } from '../../modules/actions'
import visibilityFilter from '../../modules/reducers/visibilityFilter'

describe('Visibility Filter Reducer', () => {
  it('should set any filter', () => {
    var action = setVisibilityFilter('TEST')
    var newState = visibilityFilter(null,action)
    expect(newState).toEqual('TEST')
  })

  it('should return same state if wrong action', () => {
    var wrongAction = {type: 'TEST', filter: 'HUE'}
    var newState = visibilityFilter('TEST', wrongAction)
    expect(newState).toEqual('TEST')
  })
})
