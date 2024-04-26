import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";
import React, {useState, useEffect} from "react";
import { featured } from "../constants";
import * as Progress from 'react-native-progress';
import * as Icon from 'react-native-feather';
import {useSelector} from 'react-redux';
import {useNavigation} from "@react-navigation/native"
import { selectOrderItems, selectOrderStatus, selectOrderTotal } from "../slices/orderSlice";
import { selectCartTotal } from "../slices/cartSlice";
import {useDispatch} from 'react-redux'

export default function OrderStatus () {
    const restaurant = featured.restaurants[0];
    const orderItems = useSelector(selectOrderItems);
    const orderStatus = useSelector(selectOrderStatus);
    const orderTotal = useSelector(selectOrderTotal);
    const [activeOrder, setActiveOrder] = useState(false)
    
    let groupItems = orderItems[0];
    console.log('orderTotal: ', orderTotal);

    
    if (!groupItems) {
        return (
            <SafeAreaView className='bg-white place-items-center'>
                <View className='flex-row justify-center'>
                    <Text>No Active Order</Text>
                </View>
            </SafeAreaView>
        )
    }
    

    

    return (
        <SafeAreaView className='bg-white'>
            <View className='rounded-t-3xl -mt-12 bg-white relative'>
                <View className='flex-row justify-between px-5 pt-10'>
                    <View>
                        <Text className='text-lg text-gray-700 font-semibold'>Estimated Arrival</Text>
                        <Text className='text-3xl text-gray-700 font-extrabold'> 10-15 Minutes </Text>
                        <Text className='mt-2 text-gray-700 font-semibold'>Your order is own its way!</Text>
                    </View>
                    <Image className='w-24 h-24' source={require('../assets/images/deliveryIcon.jpeg')} />
                </View>
                <View className='flex-row justify-center pt-5'>
                    <Text className='text-2xl text-gray-700 font-extrabold'>Delivery to Zone 6</Text>
                </View>
                <View className='flex-row justify-center pt-5'>
                    <Progress.Bar progress={0.70} width={350} height={25}/>
                </View>
                <View className='flex-row justify-evenly'>
                    <Text className='mt-2 text-gray-700 font-semibold'>Preparing</Text>
                    <Text className='mt-2 text-gray-700 font-semibold'>En Route</Text>
                    <Text className='mt-2 text-gray-700 font-semibold'>Arrived</Text>
                    <Text className='mt-2 text-gray-700 font-semibold'>Delivered</Text>
                </View>
                <View className='flex-row justify-center pt-5'>
                    <Text className='text-2xl text-gray-700 font-extrabold'>Access Code</Text>
                </View>
                <View className='flex-row justify-center pt-2'>
                    <Text className='text-lg text-gray-700 font-semibold'>9999</Text>
                </View>
                <View className='flex-row justify-center pt-5'>
                    <Text className='text-2xl text-gray-700 font-extrabold'>Items</Text>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingBottom: 5}}
                    className='bg-white pt-5 '
                >
                    {
                        Object.entries(groupItems).map(([key, items]) => {
                            let dish = items[0];
                            console.log(`dish ${key}: `, items);
                            return (
                                <View key={key}
                                    className='flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md'
                                >
                                    <Text className='font-bold' style={{color: 'black'}}> {items.length} x </Text>
                                    <Image className='h-14 w-14 rounded-full' source={dish.image} />
                                    <Text className='flex-1 font-bold text-gray-700'>{dish.name}</Text>
                                    <Text className='font-semibold text-base'>${dish.price}</Text>
                                </View>
                            )
                        })
                    }
                </ScrollView>
                <ScrollView  className='p-6 px-8 rounded-t-3xl space-y-4'>
                    <View className='flex-row justify-between'>
                        <Text className='text-gray-700'>Subtotal</Text>
                        <Text className='text-gray-700'>${orderTotal - 2}</Text>
                    </View>
                    <View className='flex-row justify-between'>
                        <Text className='text-gray-700'>Delivery Fee</Text>
                        <Text className='text-gray-700'>${2}</Text>
                    </View>
                    <View className='flex-row justify-between'>
                        <Text className='text-gray-700'>Order Total</Text>
                        <Text className='text-gray-700'>${orderTotal}</Text>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}