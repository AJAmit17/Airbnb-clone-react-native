import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="search" size={size} color={color} />
          }
        }}
      />
      <Tabs.Screen
        name='wishlist'
        options={{
          tabBarLabel: "WishList",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="heart-outline" size={size} color={color} />
          }
        }}
      />
      <Tabs.Screen
        name='trips'
        options={{
          tabBarLabel: "Trips",
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome5 name="airbnb" size={size} color={color} />
          }
        }}
      />
      <Tabs.Screen
        name='inbox'
        options={{
          tabBarLabel: "Inbox",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="mail-outline" size={size} color={color} />
          }
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="person-outline" size={size} color={color} />
          }
        }}
      />
    </Tabs>
  )
}

export default Layout