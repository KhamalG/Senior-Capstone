import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import * as Icon from 'react-native-feather';
import {useDispatch, useSelector} from 'react-redux'
import {addToCart, removeFromCart, selectCartItemsById} from '../slices/cartSlice';

export default function DishRow({item}) {
    const dispatch = useDispatch();
    const totalItems = useSelector(state => selectCartItemsById(state, item.id));

    const handleIncrease = () => {
        dispatch(addToCart({...item}))
    }

    const handleDecrease = () => {
        dispatch(removeFromCart({id: item.id}))
    }

    console.log('totalItems: ', totalItems);

    return (
        <View className= "flex-row items-center bg-white p-3 rounded-3xl shadwow-2xl mb-3 mx-2">
            <Image className="rounded-3xl" style={{height: 100, width: 100}} source={item.image}/>
            <View className='flex flex-1 space-y-3'>
                <View className='pl-3'>
                    <Text className='text-xl'>{item.name}</Text>
                    <Text className='text-gray-700'>{item.description}</Text>
                </View>
                <View className='flex-row justify-between pl-3 items-center'>
                    <Text className='text-gray-700 text-lg font-bold'>${item.price}</Text>
                    <View  className='flex-row items-center'>
                        <TouchableOpacity
                            onPress={handleDecrease}
                            disabled={!totalItems.length}
                            className='p-1 rounded-full'
                            style={{backgroundColor: 'black'}}
                        >
                            <Icon.Minus strokeWidth={2} height={20} width={20} stroke={'white'} />
                        </TouchableOpacity>
                        <Text className='px-3'>{totalItems.length}</Text>
                        <TouchableOpacity
                            onPress={handleIncrease}
                            className='p-1 rounded-full'
                            style={{backgroundColor: 'black'}}
                        >
                            <Icon.Plus strokeWidth={2} height={20} width={20} stroke={'white'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}