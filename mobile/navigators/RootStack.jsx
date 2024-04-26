import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Shop from '../screens/Shop';
import Cart from '../screens/Cart';
import Order from '../screens/Order';
import Account from '../screens/Account';

import { Colors } from '../components/styles';
import { Image, View, Text } from 'react-native';
import RestaurantScreen from '../screens/Restaurant';
import OrderPreparing from '../screens/Order';
import OrderStatus from '../screens/OrderStatus';
import {useSelector} from 'react-redux';
import { selectOrderItems } from '../slices/orderSlice';
const {primary, teritary} = Colors;

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function HomeScreen() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                // tabBarStyle: {
                //     position: 'absolute',
                //     bottom: 25,
                //     left: 20,
                //     right: 20,
                //     elevation: 0,
                //     backgroundColor: 'black',
                //     borderRadius: 15,
                //     height: 90
                // }
            }}
            className=''
        >
            <Tab.Screen 
                name='Home'
                component={Shop}
                options={{
                    tabBarIcon: (({focused}) => (
                        <View style={{alignItems:'center', justifyContent: 'center', top: 10}}>
                            <Image
                                source={require('../assets/images/restaurantIcon.png')}
                                resizeMode="contain"
                                style={{
                                    width:25,
                                    height: 25,
                                    tintColor: focused ? '#6495ED' : '#748c94'
                                }}
                            />
                            <Text style={{color: focused ? '#6495ED' : '#748c94', fontSize: 12}}>SHOP</Text>
                        </View>
                    )),
                    headerTintColor: primary
                }}
            />
            <Tab.Screen 
                name='Order Status'
                component={OrderStatus}
                options={{
                    tabBarIcon: (({focused}) => (
                        <View style={{alignItems:'center', justifyContent: 'center', top: 10}}>
                            <Image
                                source={require('../assets/images/food-delivery.png')}
                                resizeMode="contain"
                                style={{
                                    width:25,
                                    height: 25,
                                    tintColor: focused ? '#6495ED' : '#748c94'
                                }}
                            />
                            <Text style={{color: focused ? '#6495ED' : '#748c94', fontSize: 12}}>ORDER</Text>
                        </View>
                    )),
                    headerTintColor: primary
                }}
            />
            <Tab.Screen 
                name='Account'
                component={Account}
                options={{
                    tabBarIcon: (({focused}) => (
                        <View style={{alignItems:'center', justifyContent: 'center', top: 10}}>
                            <Image
                                source={require('../assets/images/user.png')}
                                resizeMode="contain"
                                style={{
                                    width:25,
                                    height: 25,
                                    tintColor: focused ? '#6495ED' : '#748c94'
                                }}
                            />
                            <Text style={{color: focused ? '#6495ED' : '#748c94', fontSize: 12}}>ACCOUNT</Text>
                        </View>
                    )),
                    headerTintColor: primary
                }}
            />
        </Tab.Navigator>
    )
}

function RootStack() {
  return (
    <NavigationContainer style={{backgroundColor: 'white'}}>
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName='Login'
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen options={{headerTintColor: primary}} name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name='Restaurant' component={RestaurantScreen} />
            <Stack.Screen name="Cart" options={{presentation:'fullScreenModal'}} component={Cart} />
            <Stack.Screen name="Order" component={OrderPreparing} />
            {/* <Stack.Screen name="Order Status" component={OrderStatus} /> */}
        </Stack.Navigator>
    </NavigationContainer>
  );
}


export default RootStack
