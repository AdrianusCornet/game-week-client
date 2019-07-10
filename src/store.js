import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import reduxThunk from 'redux-thunk'

// impo './'

const middleware = applyMiddleware(reduxThunk)

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancer(middleware)

function reducer (state) {
  return state
}

export default createStore(reducer, enhancer)