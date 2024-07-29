import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, ScrollView, SafeAreaView, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Carousel from 'react-native-reanimated-carousel';
import 'react-native-gesture-handler';
import { fontFamily } from '../../../lib/globals';
import { Colors } from '../../../assets/styles/colors/colors';
import { queryAllRealmObject } from '../../../database';
import { CARDINFO } from '../../../database/allSchemas';




const Home = (props: any) => {
    const { width: viewportWidth } = Dimensions.get('window');
    const [cardData, setCardData] = useState([])


    useEffect(() => {
        fetchDataRealm()
    }, [])

    const fetchDataRealm = () => {
        //console.log('fetchDataRealm:')
        queryAllRealmObject(CARDINFO)
            .then((data: any) => {
                const res: any = data
                //  console.log('fetchDataRealm:', res)
                setCardData(res)
            });
    }

    const contacts = [
        { id: 1, firstName: 'John', lastName: 'Doe', image: require('../../../assets/images/men_4.jpg'), transName: 'Transfer' },
        { id: 2, firstName: 'Jane', lastName: 'Smith', image: require('../../../assets/images/women_1.jpg'), transName: 'Transfer' },
        { id: 3, firstName: 'Sally', lastName: 'Martinez', image: require('../../../assets/images/men_2.jpg'), transName: 'Transfer' },
        { id: 4, firstName: 'Sidney', lastName: 'Johnson', image: require('../../../assets/images/women_2.jpg'), transName: 'Transfer' },
        { id: 5, firstName: 'Freddie', lastName: 'Collins', image: require('../../../assets/images/men_3.jpg'), transName: 'Transfer' },
        { id: 6, firstName: 'Pamel', lastName: 'Miller', image: require('../../../assets/images/women_3.jpg'), transName: 'Transfer' },

    ];

    const transactions = [
        { id: 1, name: 'Marion Garrett', place: 'New York', amount: '-$120.50', time: '21:15', transName: 'Transfer', image: require('../../../assets/images/women_5.jpg') },
        { id: 2, name: 'Burger King', place: 'New York', amount: '-$35.17', time: '16:57', transName: 'Restaurant', image: require('../../../assets/images/burger.jpg') },
    ];

    const CustomCard = (item: any) => {
        return (
            <ImageBackground
                source={{ uri: item.item.imgUrl }}
                style={styles.backgroundImage}
                key={item.item.id}
            >
                <View style={styles.cardContainer}>
                    <View style={styles.cardTxtContainer}>
                        <Text style={styles.cardtitle}>{item.item.cardName}</Text>
                        <Text style={styles.cardtype}>{item.item.cardType}</Text>
                    </View>
                    <View style={styles.cardTxtContainer}>
                        <Text style={styles.cardprice}>${item.item.price}</Text>
                        <Icon name="eye-outline" size={30} color={'white'} />
                    </View>
                    <View style={styles.cardTxtContainer}>
                        <Text style={styles.cardnumber}>...{item.item.cardNumber}</Text>
                        <Text style={styles.expirydate}>{item.item.expiryDate}</Text>
                    </View>
                </View>
            </ImageBackground>
        );
    };

    const getContectDetails = (items: any) => {
        return (
            <TouchableOpacity key={items.item.id} style={styles.contactContainer} onPress={() => props.navigation.navigate('Payment', { image: items.item.image, transName: items.item.transName, firstName: items.item.firstName, lastName: items.item.lastName })}>
                <Image source={items.item.image} style={styles.contactImage} />
                <Text style={styles.transection}> {items.item.firstName}{'\n'}{items.item.lastName} </Text>
            </TouchableOpacity>
        )
    }
    const getTransectionDetails = (items: any) => {
        return (
            <View style={styles.transContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={items.item.image} style={styles.contactImage} />
                    <View style={styles.balanceContainer}>
                        <Text style={styles.balanceTextAmount}>{items.item.name}</Text>
                        <Text style={styles.balanceText}>{items.item.time}. {items.item.transName}</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.transAmount}>{items.item.amount}</Text>
                </View>
            </View>

        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../../assets/images/men_1.jpg')} style={styles.profileImage} />
                        <View style={styles.balanceContainer}>
                            <Text style={styles.balanceText}>Total balance</Text>
                            <Text style={styles.balanceTextAmount}>$7,517.06</Text>
                        </View>
                    </View>
                    <View>
                        <Icon name="notifications-outline" size={30} style={styles.notificationImage} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Carousel
                        loop={true}
                        autoPlay={true}
                        data={cardData}
                        renderItem={CustomCard}
                        width={viewportWidth}
                        height={200}
                        mode="parallax"
                        modeConfig={{
                            parallaxScrollingScale: 0.9,
                            parallaxScrollingOffset: 50,
                        }}
                    />
                </View>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <Text style={styles.sectionTitle}>Send money</Text>
                </View>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <View>
                        <TouchableOpacity style={styles.moneyContainer} onPress={() => props.navigation.navigate('Contacts')}>
                            <Icon name="swap-horizontal-outline" size={30} style={styles.transectionImage} />
                            <Text style={styles.transection}> New{'\n'}Transection </Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={contacts}
                        renderItem={getContectDetails}
                        keyExtractor={(item: any) => item.id}
                        horizontal={true}
                    />
                </View>
                <View>
                    <View style={styles.content}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.transTitle}>Today</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name="search" size={30} color={Colors.black} style={styles.transSearch} />
                            </View>
                        </View>
                        <View>
                            <FlatList
                                data={transactions}
                                renderItem={getTransectionDetails}
                                keyExtractor={(item: any) => item.id}

                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 10,
        backgroundColor: Colors.lightGray,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        //  borderColor: Colors.darkGray,
        backgroundColor: Colors.lightBlue
    },
    balanceContainer: {
        marginHorizontal: 20,
    },
    balanceText: {
        fontSize: 15,
        color: Colors.darkGray,
        fontFamily: fontFamily.regular
    },
    balanceTextAmount: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.black
    },
    transAmount: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.black
    },
    notificationImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: Colors.darkGray,
        backgroundColor: Colors.white,
        alignItems: 'center',
        padding: 10
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        // borderRadius: 17,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        width: '100%',
        height: 'auto',
        borderTopRightRadius: 17,
        borderTopLeftRadius: 17,
    },
    cardContainer: {
        paddingHorizontal: 20
    },

    cardTxtContainer: {
        flexDirection: 'row', justifyContent: 'space-between'
    },
    cardtitle: {
        fontSize: 18,
        marginBottom: 30,
        marginTop: 10,
        fontFamily: fontFamily.regular,
        color: 'white',
    },
    cardtype: {
        fontSize: 46,
        fontWeight: 'bold',
        marginBottom: 30,
        fontFamily: fontFamily.semiBold,
        color: 'white',
    },
    cardprice: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 30,
        fontFamily: fontFamily.semiBold,
        color: 'white',
    },
    cardnumber: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 30,
        fontFamily: fontFamily.semiBold,
        color: 'white',
    },
    expirydate: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 30,
        fontFamily: fontFamily.semiBold,
        color: 'white',
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black',
        fontFamily: fontFamily.semiBold,
    },
    transection: {
        fontSize: 12,
        fontWeight: 'bold',
        fontFamily: fontFamily.semiBold,
        color: Colors.black,
        textAlign: 'center',
    },
    transectionImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: Colors.darkGray,
        backgroundColor: Colors.white,
        alignItems: 'center',
        padding: 10
    },
    content: {
        backgroundColor: 'white',
        padding: 20,
        justifyContent: 'center',
        // alignItems: 'center',
        borderTopRightRadius: 17,
        borderTopLeftRadius: 17,
        height: 'auto'
    },
    transTitle: {
        fontSize: 20,
        marginBottom: 12,
        color: Colors.black,
        fontWeight: 'bold',
        fontFamily: fontFamily.semiBold
    },
    transSearch: {
        color: Colors.black,
        marginBottom: 12,
    },
    contactContainer: {
        flexDirection: 'column',
        margin: 2,
        alignItems: 'center',
        width: 70
    },
    transContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
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
    moneyContainer: {
        flexDirection: 'column',
        margin: 2,
        alignItems: 'center',
        width: 70
    },

});

export default Home;