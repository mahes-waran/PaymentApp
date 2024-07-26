import React from 'react'
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Colors } from '../../../assets/styles/colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { fontFamily } from '../../../lib/globals';


const Contacts = () => {
    const recentContacts = [
        { id: 1, name: 'Jane Smith', image: require('../../../assets/images/women_1.png'), contact: 'Bank', mobile: '098734228756' },
        { id: 2, name: 'Sally Martinez', image: require('../../../assets/images/men_2.png'), contact: 'Bank', mobile: '098734228756' },
        { id: 3, name: 'Sidney Johnson', image: require('../../../assets/images/women_2.png'), contact: 'Bank', mobile: '098734228756' },
    ]
    const allContacts = [
        { id: 1, name: 'Marion Garrett', image: require('../../../assets/images/women_3.png'), contact: 'Bank', mobile: '098734228756' },
        { id: 2, name: 'Andrea Summer', image: require('../../../assets/images/women_4.png'), contact: 'Bank', mobile: '098734228756' },
        { id: 3, name: 'karen William', image: require('../../../assets/images/women_5.png'), contact: 'Bank', mobile: '098734228756' },
    ]

    const getRecentContacts = (items: any) => {
        return (
            <View style={styles.contactCotainer}>
                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => console.log('onPress')}>
                    <Image source={items.item.image} style={styles.contactImage} />
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameText}>{items.item.name}</Text>
                        <Text style={styles.numberText}>{items.item.contact} - {items.item.mobile}</Text>
                    </View>
                </TouchableOpacity>
            </View>

        )
    }
    const getAllContacts = (items: any) => {
        return (
            <View style={styles.contactCotainer}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={items.item.image} style={styles.contactImage} />
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameText}>{items.item.name}</Text>
                        <Text style={styles.numberText}>{items.item.contact} - {items.item.mobile}</Text>
                    </View>
                </View>
            </View>

        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Search"
                    />
                    <Icon name="search" size={20} color={Colors.darkGray} style={styles.icon} />
                </View>
                <View style={styles.recentContainer}>
                    <Text style={styles.recentTxt}>Recents Contacts</Text>
                </View>
                <View style={styles.recentCtx}>
                    <FlatList
                        data={recentContacts}
                        renderItem={getRecentContacts}
                        keyExtractor={(item: any) => item.id}
                    />
                </View>
                <View style={styles.divider} />
                <View style={styles.recentContainer}>
                    <Text style={styles.recentTxt}>All Contacts</Text>
                </View>
                <View style={styles.recentCtx}>
                    <FlatList
                        data={allContacts}
                        renderItem={getAllContacts}
                        keyExtractor={(item: any) => item.id}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Contacts;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.darkGray,
        borderRadius: 8,
        paddingHorizontal: 10,
        margin: 20,
    },
    input: {
        flex: 1,
        paddingVertical: 10,
    },
    icon: {
        marginLeft: 10,
    },
    recentContainer: {
        margin: 20,
    },
    recentTxt: {
        fontFamily: fontFamily.regular,
        fontSize: 16,
        color: Colors.darkGray
    },
    recentCtx: {
        margin: 20,
    },
    contactCotainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 15,
    },
    contactImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        // borderColor: Colors.darkGray,
        backgroundColor: Colors.white,
        alignItems: 'center',
        padding: 10
    },
    nameContainer: {
        marginHorizontal: 20,
    },
    nameText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.black
    },
    numberText: {
        fontSize: 15,
        color: Colors.darkGray,
        fontFamily: fontFamily.regular
    },
    divider: {
        height: 1,
        backgroundColor: Colors.lightGray,
        marginVertical: 10,
        marginHorizontal: 20,
    },
});
