import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './store'

import RootStack from './navigators/RootStack';

export default function App() {
  return (
    <Provider store={store}>
      <RootStack/>
    </Provider>
  );
}


