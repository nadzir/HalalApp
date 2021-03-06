import React from 'react'
import { Actions, Scene } from 'react-native-router-flux'
import { HomeView } from '../containers/Home'
import { CameraViewContainer } from '../containers/Camera'
import { HalalFinderContainer } from '../containers/HalalFinder'
import { HalalListContainer } from '../containers/HalalList'

export default Actions.create(
  <Scene key='root' hideNavBar='false' >
    <Scene
      hideNavBar
      key='home'
      component={HomeView}
      analyticsDesc='AppLaunch: Launching App'
    />
    <Scene
      hideNavBar
      key='camera'
      component={CameraViewContainer}
      analyticsDesc='CameraView'
    />
    <Scene
      hideNavBar
      key='halalFinder'
      component={HalalFinderContainer}
      analyticsDesc='HalalFinder'
    />
    <Scene
      hideNavBar
      key='halalList'
      component={HalalListContainer}
      analyticsDesc='HalalList'
    />
  </Scene>
)
