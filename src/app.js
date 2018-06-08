import { Router } from 'react-native-router-flux'
import { Provider } from 'react-redux'
import React from 'react'
import AppRoutes from './routes'
import store from './redux/store'

if (typeof global.self === 'undefined') global.self = global

export default function AppContainer () {
  return (
    <Provider store={store}>
      <Router duration={0} scenes={AppRoutes} />
    </Provider>
  )
}
