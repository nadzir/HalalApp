import { Router } from 'react-native-router-flux'
import { Provider } from 'react-redux'
import React, { Component } from 'react'
import AppRoutes from './routes'
import store from './redux/store'

if (typeof global.self === 'undefined') global.self = global

// export default class AppContainer extends Component {
//   constructor () {
//     super()
//     // this.state = {
//     //   store: store
//     // }
//   }
//   render () {
//     return (
//       <Provider store={store}>
//         <Router scenes={AppRoutes} />
//       </Provider>
//     )
//   }
// }
// Cant be a refactored cause have error in hot reloading
export default function AppContainer () {
  return (
    <Provider store={store}>
      <Router duration={0} scenes={AppRoutes} />
    </Provider>
  )
}
