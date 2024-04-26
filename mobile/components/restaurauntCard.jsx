import { TouchableWithoutFeedback, View, Image, Text } from "react-native";
import {useNavigation} from '@react-navigation/native'
import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { emptyCart, selectCartTotal } from "../slices/cartSlice";

export default function RestaurantCard({item}) {
    const navigation = useNavigation();
    const cartItems = useSelector(selectCartTotal);

    return (
        <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Restaurant', {...item})}
        >
            <View className='mb-6 bg-white rounded-3xl shadow-lg'style={{shadowRadius: 7, shadowColor: "black"}}>
                <Image className='h-36 w-50 object-contain rounded-t-3xl justify-center' source={item.image}/>
                <View className='px-3 pb-4 space-y-2'>
                    <Text className='text-lg font-bold pt-2'>{item.name}</Text>
                    <View className="flex-row items-center space-x-1">
                        <Image source={require('../assets/images/fullstar.png')} className='h-4 w-4' />
                        <Text className='text-xs'>
                            <Text className="text-green-700">{item.stars}</Text>
                            <Text className='text-gray-700'>
                                ({item.reviews} review) | <Text className='font-semibold'>{item.category}</Text>
                            </Text>
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}