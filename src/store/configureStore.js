/**
 * Created by czhw on 16/6/16.
 */
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers/index'

export default function configureStore(initialState){
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunkMiddleware,createLogger())
  )
  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('../reducers', () => {
  //     const nextRootReducer = require('../reducers').default
  //     store.replaceReducer(nextRootReducer)
  //   })
  // }
  return store;
}