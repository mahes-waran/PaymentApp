import React from 'react';

import ADIcon from 'react-native-vector-icons/AntDesign';
import ENIcon from 'react-native-vector-icons/Entypo';
import EIIcon from 'react-native-vector-icons/EvilIcons';
import FIcon from 'react-native-vector-icons/Feather';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import FTOIcon from 'react-native-vector-icons/Fontisto';
import IIIcon from 'react-native-vector-icons/Ionicons';
import MCIIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIIcon from 'react-native-vector-icons/MaterialIcons';
import OIcon from 'react-native-vector-icons/Octicons';


import { Colors } from '../../assets/styles/colors/colors';

type IconProps = {
    name: string,
    type: string,
    size: number,
    color: string,
    style: any,
    onPress: () => void
}

export const Icon: React.FC<IconProps> = ({
    name,
    type,
    size,
    color = Colors.black,
    style,
    onPress = undefined,
}) => {
    switch (type) {
        case 'AntDesign':
            return (
                <ADIcon
                    size={size}
                    color={color}
                    name={name}
                    onPress={onPress}
                    style={style}
                />
            );
        case 'Entypo':
            return (
                <ENIcon
                    size={size}
                    color={color}
                    name={name}
                    onPress={onPress}
                    style={style}
                />
            );
        case 'EvilIcons':
            return (
                <EIIcon
                    size={size}
                    color={color}
                    name={name}
                    onPress={onPress}
                    style={style}
                />
            );
        case 'Feather':
            return (
                <FIcon
                    size={size}
                    color={color}
                    name={name}
                    onPress={onPress}
                    style={style}
                />
            );
        case 'FontAwesome':
            return (
                <FAIcon
                    size={size}
                    color={color}
                    name={name}
                    onPress={onPress}
                    style={style}
                />
            );
        case 'FontAwesome5':
            return (
                <FA5Icon
                    size={size}
                    color={color}
                    name={name}
                    onPress={onPress}
                    style={style}
                />
            );
        case 'Fontisto':
            return (
                <FTOIcon
                    size={size}
                    color={color}
                    name={name}
                    onPress={onPress}
                    style={style}
                />
            );
        case 'Ionicons':
            return (
                <IIIcon
                    size={size}
                    color={color}
                    name={name}
                    onPress={onPress}
                    style={style}
                />
            );
        case 'MaterialCommunityIcons':
            return (
                <MCIIcon
                    size={size}
                    color={color}
                    name={name}
                    onPress={onPress}
                    style={style}
                />
            );
        case 'MaterialIcons':
            return (
                <MIIcon
                    size={size}
                    color={color}
                    name={name}
                    onPress={onPress}
                    style={style}
                />
            );
        case 'Octicons':
            return (
                <OIcon
                    size={size}
                    color={color}
                    name={name}
                    onPress={onPress}
                    style={style}
                />
            );
    }
};

