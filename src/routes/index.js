import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';
import { HomeView } from '../containers/Home';
import { CameraView } from '../containers/Camera';

export default Actions.create(<Scene key="root" hideNavBar="false" >
  <Scene
    hideNavBar
    key="home"
    component={HomeView}
    analyticsDesc="AppLaunch: Launching App"
  />
  <Scene
    hideNavBar
    key="camera"
    component={CameraView}
    analyticsDesc="AppLaunch: Launching App"
  />
</Scene>);
