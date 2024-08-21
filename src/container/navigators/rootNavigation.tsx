import React, { useEffect } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { blueTheme } from '../../assets/styles/colors/themeColors';
import TabStack from './Stack/TabStack';
import { getRandomFloatNumber, getRandomNumber } from '../../lib/globals';
import { insertNewRealmObject } from '../../database';
import { CARDINFO } from '../../database/allSchemas';

const RootNavigation = () => {

    useEffect(() => {
     
    }, [])

  

    const Blue = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            ...blueTheme,
        },
    };
    const getTheme = () => {
        return Blue;
    };
    const themeMode = getTheme();

    return (
        <NavigationContainer theme={themeMode}>
            <TabStack />
        </NavigationContainer>
    );
}
export default RootNavigation;