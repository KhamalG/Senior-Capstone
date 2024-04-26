import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {useNavigation} from "@react-navigation/native"
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { featured } from "../constants";
import * as Icon from 'react-native-feather';
import {useSelector} from 'react-redux';
import { selectRestaurant } from "../slices/restaurantSlice";
import { emptyCart, removeFromCart, selectCartItems, selectCartItemsById, selectCartTotal } from "../slices/cartSlice";
import {useDispatch} from 'react-redux'
import { addToOrder, emptyOrder, selectOrderItems, selectOrderItemsById, selectOrderTotal, setOrderStatus, setOrderTotal } from "../slices/orderSlice";

export default function Cart () {
    const restaurant = useSelector(selectRestaurant);
    const navigation = useNavigation();
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    const [groupedItems, setGroupedItems] = useState({});
    const dispatch = useDispatch();
    const deliveryFee = 2;
    const orderTotal = cartTotal + deliveryFee;

    useEffect(() => {
        const items = cartItems.reduce((group, item) => {
            if (group[item.id]) {
                group[item.id].push(item);
            } else {
                group[item.id] = [item];
            }
            return group;
        }, {})
        setGroupedItems(items)
    }, [cartItems])

    console.log('grouped Items: ', groupedItems);

    function completeOrder() {
        const total = orderTotal
        dispatch(emptyOrder());
        dispatch(addToOrder({...groupedItems}));
        dispatch(setOrderStatus('preparing'));
        console.log('setting order total: ', orderTotal);
        dispatch(setOrderTotal(total));
        dispatch(emptyCart());
        navigation.navigate('Order');
    } 

    return (
        <View className='bg-white flex-1'>
            <View className='relative py-4 shadow-sm'>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{backgroundColor: 'black'}}
                    className='absolute z-10 rounded-full p-1 shadow top-5 left-2'
                >
                    <Icon.ArrowLeft strokeWidth={3} stroke='white'/>
                </TouchableOpacity>
                <View>
                    <Text className='text-center font-bold text-xl'>Your cart</Text>
                    <Text className='text-center text-gray-500'>{restaurant.name}</Text>
                </View>
            </View>

            <View style={{backgroundColor: 'black'}}
                className='flex-row px-4 items-center'
            >
                <Image source={require('../assets/images/deliveryIcon.jpeg')} className='w-20 h-20 rounded-full' />
                <Text className='flex-1 pl-4 text-gray-50'>Delivery in 15-20 minutes</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text className='font-bold' style={{color: 'white'}}>Change</Text>
                </TouchableOpacity>
            </View>
            {/* dishes */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 50}}
                className='bg-white pt-5'
            >
                {
                    Object.entries(groupedItems).map(([key, items]) => {
                        let dish = items[0];
                        return (
                            <View key={key}
                                className='flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md'
                            >
                                <Text className='font-bold' style={{color: 'black'}}> {items.length} x </Text>
                                <Image className='h-14 w-14 rounded-full' source={dish.image} />
                                <Text className='flex-1 font-bold text-gray-700'>{dish.name}</Text>
                                <Text className='font-semibold text-base'>${dish.price}</Text>
                                <TouchableOpacity
                                    className='p-1 rounded-full'
                                    onPress={() => dispatch(removeFromCart({id: dish.id}))}
                                    style={{backgroundColor: '#6495ED'}}
                                >
                                    <Icon.Minus strokeWidth={2} height={20} width={20} stroke='white' />
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>
            {/* totals */}
            <View style={{backgroundColor: 'black'}} className='p-6 px-8 rounded-t-3xl space-y-4'>
                <View className='flex-row justify-between'>
                    <Text className='text-gray-50'>Subtotal</Text>
                    <Text className='text-gray-50'>${cartTotal}</Text>
                </View>
                <View className='flex-row justify-between'>
                    <Text className='text-gray-50'>Delivery Fee</Text>
                    <Text className='text-gray-50'>${deliveryFee}</Text>
                </View>
                <View className='flex-row justify-between'>
                    <Text className='text-gray-50'>Order Total</Text>
                    <Text className='text-gray-50'>${orderTotal}</Text>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => completeOrder()}
                        style={{backgroundColor: '#6495ED'}}
                        className='p-3 rounded-full'
                    >
                        <Text className='text-white text-center font-bold text-lg'>Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
