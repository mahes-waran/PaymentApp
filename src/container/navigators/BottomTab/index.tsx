import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home/Home';
import Transfers from '../../screens/Transfers/Transfers';
import Cards from '../../screens/Cards/Cards';
import Statistics from '../../screens/Statistics/Statistics';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TabShape from './TabShape';


export default () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName={'Home'}
            tabBar={(props) => <TabShape {...props} />}
        >
            <Tab.Screen name={'Home'} component={Home} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="home" color={color} size={size} />
                ),
                headerShown: false
            }} />
            <Tab.Screen name={'Transfers'} component={Transfers} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="swap-horiz" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name={'Cards'} component={Cards} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="credit-card" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name={'Statistics'} component={Statistics} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="bar-chart" color={color} size={size} />
                ),
            }} />
        </Tab.Navigator>
    );
};