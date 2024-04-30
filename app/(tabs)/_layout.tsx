import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import Colors from '@/constants/Colors';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';




const Layout = () => {
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
            fontFamily: 'mon-sb',
        }
    }}>
        <Tabs.Screen name="index" options={{
            tabBarLabel: 'Inicio',
            tabBarIcon: ({color, size}) => 
                <AntDesign name="home" color={color} size={size}/>

        }}
        />
         <Tabs.Screen name="explore" options={{
            tabBarLabel: 'Productos',
            tabBarIcon: ({color, size}) => 
                <MaterialCommunityIcons name="food-outline" color={color} size={size}/>

        }}
        />
           <Tabs.Screen name="inbox" options={{
            tabBarLabel: 'MyOrder',
            tabBarIcon: ({color, size}) => 
                <AntDesign name="shoppingcart" color={color} size={size}/>

        }}
        />
          <Tabs.Screen name="profile" options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: ({color, size}) => 
                <Feather name="more-horizontal" color={color} size={size}/>

        }}
        />
      
        
    </Tabs>
  )
}

export default Layout