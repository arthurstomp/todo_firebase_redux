/* jshint ignore:start */
import React from 'react'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import todoApp from './reducers'
import AppInitializer from './containers/AppInitializer'

const loggerMiddleware = createLogger()

let store = createStore(
  todoApp,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

render(
  <Provider store={store}>
    <AppInitializer />
  </Provider>,
  document.getElementById('root')
)
