import React, { useEffect } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { blueTheme } from '../../assets/styles/colors/themeColors';
import TabStack from './Stack/TabStack';
import { getRandomFloatNumber, getRandomNumber } from '../../lib/globals';
import { insertNewRealmObject } from '../../database';
import { CARDINFO } from '../../database/allSchemas';

const RootNavigation = () => {

    useEffect(() => {
        getCardDetails()
    }, [])

    const getCardDetails = async () => {
        try {
            const response = await fetch('https://c0ad2948-b731-4667-88e6-ab00dd4d0eda.mock.pstmn.io/cardart')
            const result = await response.json()
            var resultData: any = []
            result.data.cardart.map((item: any) => {
                let values: any = {
                    cardName: 'Debit Card',
                    cardType: 'Visa',
                    price: getRandomFloatNumber(),
                    cardNumber: Number(getRandomNumber()),
                    expiryDate: '07/27',
                    imgUrl: item.url,
                    id: Number(item.id),
                    time: new Date(),
                }
                console.log(values)
                insertNewRealmObject(values, CARDINFO).then((res) => {
                    console.log('inserted successfully')
                });
                resultData.push(values)
            })

        } catch (error) {
            console.log(error)
        }
    }

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