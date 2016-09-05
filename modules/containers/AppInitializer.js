import { connect } from 'react-redux'
import initTodos from '../actions/init_todos'
import App from '../components/App'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: () => {
      dispatch(initTodos())
    }
  }
}

const AppInitializer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppInitializer
