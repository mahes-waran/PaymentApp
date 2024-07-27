import React, { useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from '../../../assets/styles/colors/colors';
import { fontFamily } from '../../../lib/globals';
import DropDownPicker from 'react-native-dropdown-picker';

const SendMoney = (props: any) => {
    const [inputValue, setInputValue] = useState('');
    const { image, transName, firstName, lastName } = props.route.params;
    // console.log(image, transName, firstName, lastName)
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('7104');
    const [items, setItems] = useState([
        { label: 'VISA....7104', value: '7104' },
        { label: 'VISA....7103', value: '7103' },
        { label: 'VISA....7102', value: '7102' },
    ]);
    const handlePress = (buttonValue: any) => {
        setInputValue(inputValue + buttonValue);
    };

    const handleSend = () => {
        console.log('Sending value:', inputValue);
        setInputValue('');
    };

    const handleClear = () => {
        setInputValue('');
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imgContainer}>
                <Image source={image} style={styles.profileImage} />
            </View>
            <View style={styles.nameContainer}>
                <View>
                    <Text style={{ color: Colors.black, fontSize: 20, fontFamily: fontFamily.semiBold, padding: 5, textAlign: 'center' }}>{firstName}  {lastName} </Text>
                    <Text style={{ color: Colors.darkGray, fontSize: 15, fontFamily: fontFamily.regular, textAlign: 'center' }}>{transName}</Text>
                </View>
            </View>
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, }}>
                    <Text style={styles.input}>${inputValue}</Text>
                    <TouchableOpacity onPress={() => console.log('onPress')} style={styles.countryButton}>
                        <Text style={styles.country}>USD</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5, marginEnd: 15 }}>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                    />
                </View>
                <View style={styles.buttonRow}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0, 'x'].map((values) => (
                        <TouchableOpacity
                            key={values}
                            onPress={() => values == 'x' ? handleClear() : handlePress(values.toString())}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>{values}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
                    <Text style={styles.sendButtonText}>Send</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default SendMoney;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 10,
        backgroundColor: Colors.white,
    },
    input: {
        textAlign: 'center',
        fontSize: 40,
        color: Colors.black,
        marginBottom: 20,
        marginTop: 20,
    },
    countryButton: {
        width: '20%',
        height: '50%',
        borderColor: Colors.lightGray,
        backgroundColor: Colors.lightGray,
        borderWidth: 2,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        marginTop: 20,
        marginEnd: 15,
        alignItems: 'center'
    },
    country: {
        textAlign: 'center',
        fontSize: 18,
        color: Colors.black,
        padding: 5
    },
    buttonRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    button: {
        width: '30%',
        height: '20%',
        padding: 10,
        borderColor: Colors.lightGray,
        backgroundColor: Colors.lightGray,
        borderWidth: 2,
        margin: 3,
        borderTopRightRadius: 17,
        borderTopLeftRadius: 17,
        borderBottomRightRadius: 17,
        borderBottomLeftRadius: 17,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 30,
        color: Colors.black
    },
    sendButton: {
        backgroundColor: Colors.actionBtn,
        padding: 20,
        borderTopRightRadius: 17,
        borderTopLeftRadius: 17,
        borderBottomRightRadius: 17,
        borderBottomLeftRadius: 17,
    },
    sendButtonText: {
        textAlign: 'center',
        color: Colors.white,
        fontSize: 20,
    },
    profileImage: {
        width: 80,
        height: 80,
        alignItems: 'center'
    },
    imgContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
});