import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'

import reducers from './reducers' // Import the reducer

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['image']
}

const persistedReducer = persistReducer(persistConfig, reducers)
const composeEnhancers = composeWithDevTools({ shouldHotReload: false })

export default createStore(
  persistedReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)
