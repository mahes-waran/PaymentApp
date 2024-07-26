import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from '../BottomTab';
import Contacts from '../../screens/Contacts/Contacts';
import SendMoney from '../../screens/SendMoney/Sendmoney';
import Scanner from '../../screens/Scanner/Scanner';


const TabStack = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={'TabStack'}
                component={BottomTab}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={'Contacts'}
                component={Contacts}
            />
            <Stack.Screen
                name={'Payment'}
                component={SendMoney}
            />
            <Stack.Screen
                name={'Scanner'}
                component={Scanner}
            />
        </Stack.Navigator>
    );
};

export default TabStack;
