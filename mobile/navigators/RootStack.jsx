import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Shop from '../screens/Shop';

import { Colors } from '../components/styles';
const {primary, teritary} = Colors;

const Stack = createStackNavigator();

function RootStack() {
  return (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerStyled: {
                    backgroundColor: 'transparent'
                },
                headerTintColor: teritary,
                headerTransparent: true,
                headerTitle: '',
                headerLeftContainerStyle: {
                    paddingLeft: 20
                }
            }}
            initialRouteName='Login'
        >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen options={{headerTintColor: primary}} name="Shop" component={Shop} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}


export default RootStack
