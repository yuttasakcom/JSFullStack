import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { renderRoutes } from 'react-router-config'

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducers from './reducers'

import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

import 'bootstrap/scss/bootstrap.scss'
import './assets/styles/styles.scss'

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk)
)

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
