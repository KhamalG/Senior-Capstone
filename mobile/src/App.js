import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Screens/Login';
import Order from './Screens/Order';
import Account from './Screens/Account';
import Cart from './Screens/Cart';
import Shop from './Screens/Shop';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Login" component = {Login}/>
        <Stack.Screen name = "Order" component={Order} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Shop" component={Shop} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



export default App;
