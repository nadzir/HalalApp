import { Router } from 'react-native-router-flux';
import React from 'react';
import AppRoutes from './routes';

export default function AppContainer() {
  return (
    <Router scenes={AppRoutes} />
  );
}
