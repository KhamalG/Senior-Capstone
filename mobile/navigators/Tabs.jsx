import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Shop from '../screens/Shop';
import Order from '../screens/Order';
import Cart from '../screens/Cart';
import Account from '../screens/Account';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Shop" component={Shop}/>
            <Tab.Screen name="Order" component={Order}/>
            <Tab.Screen name="Cart" component={Cart}/>
            <Tab.Screen name="Account" component={Account}/>
        </Tab.Navigator>
    );
}

export default Tabs;