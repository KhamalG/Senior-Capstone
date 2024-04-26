import {View, Text, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import RestaurantCard from './restaurauntCard'

export default function FeaturedRow({title, description, restaurants}) {
    return (
        <View>
            <View className='flex-row justify-between items-center px-4'>
                <View>
                    <Text className='font-bold text-lg'>{title}</Text>
                    <Text className='text-gray-500 text-xs'>{description}</Text>
                </View>
                {/* <TouchableOpacity>
                    <Text className='font-semibold'>See All</Text>
                </TouchableOpacity> */}
            </View>
            <ScrollView
                vertical
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 15
                }}
                className="overflow-visible py-5"
            >
                {
                    restaurants.map((restaurant, index) => {
                        return (
                            <RestaurantCard
                                item={restaurant}
                                key={index} 
                            />
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}