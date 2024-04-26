import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Image, View } from "react-native";
import {useNavigation} from '@react-navigation/native'



export default function OrderPreparing() {
    const navigation = useNavigation()
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Order Status');
        }, 3000)
    }, [])
    return (
        <View className='flex-1 bg-white justify-center items-center'>
            <Image source={require('../assets/images/delivery.gif')} className='h-80 w-80' />
        </View>
    )
}

