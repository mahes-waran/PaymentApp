import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../../assets/styles/colors/colors';


const Cards = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text></Text>
        </SafeAreaView>
    )
}
export default Cards;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 10,
        backgroundColor: Colors.white,
    },
});