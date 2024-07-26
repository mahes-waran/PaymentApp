import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { normalize } from '../../../lib/globals';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../../assets/styles/colors/colors';

const TabShape = ({ navigation }: BottomTabBarProps) => {

    const routes = [
        {
            index: 1,
            key: '1',
            name: 'Home',
            icon: 'home',
            height: normalize(25),
            width: normalize(25),
        },
        {
            index: 2,
            key: '2',
            name: 'Transfers',
            icon: 'swap-horiz',
            height: normalize(23),
            width: normalize(30),
        },
        {
            index: 3,
            key: '3',
            name: ' ',
            icon: 'swap-horiz',
            height: normalize(23),
            width: normalize(30),
        },
        {
            index: 4,
            key: '4',
            name: 'Cards',
            icon: 'credit-card',
            height: normalize(27),
            width: normalize(27),
        },
        {
            index: 5,
            key: '5',
            name: 'Statistics',
            icon: 'bar-chart',
            height: normalize(26),
            width: normalize(28),
        },
    ];

    return (
        <View style={styles.container}>
            {routes.map((route, index) => {
                const label = route.icon
                const isFocused = route.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <View>
                        {route.index != 3 ? (
                            <TouchableOpacity
                                key={index}
                                accessibilityRole="button"
                                accessibilityState={isFocused ? { selected: true } : {}}
                                onPress={onPress}
                                onLongPress={onLongPress}
                                style={styles.tabButton}
                            >
                                <MaterialIcons name={String(label).toLowerCase()} size={24} color={Colors.black} />
                                <Text>{route.name}</Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity key={index} style={styles.actionButton} onPress={() => navigation.navigate('Scanner')}>
                                <MaterialCommunityIcons name="barcode-scan" size={30} color={Colors.white} />
                            </TouchableOpacity>
                        )}
                    </View>

                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    tabButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12
    },
    actionButton: {
        position: 'relative',
        bottom: 15,
        alignSelf: 'center',
        backgroundColor: Colors.actionBtn,
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
});

export default TabShape;
