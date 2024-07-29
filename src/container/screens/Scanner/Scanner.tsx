import { useEffect, useState } from 'react';
import {
    Alert,
    Image,
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    Camera,
    useCameraDevice,
    useCameraPermission,
    useCodeScanner,
} from 'react-native-vision-camera';
import { formatWifiData, getCountryOfOriginFromBarcode, openExternalLink } from '../../../util/helper';




const Scanner = (navigation: any) => {

    const [torchOn, setTorchOn] = useState(false);
    const [enableOnCodeScanned, setEnableOnCodeScanned] = useState(true);

    const {
        hasPermission: cameraHasPermission,
        requestPermission: requestCameraPermission,
    } = useCameraPermission();


    const device = useCameraDevice('back');


    useEffect(() => {
        handleCameraPermission();
    }, []);


    const codeScanner = useCodeScanner({
        codeTypes: ['qr', 'ean-13'],
        onCodeScanned: (codes) => {
            if (enableOnCodeScanned) {
                let value = codes[0]?.value;
                let type = codes[0]?.type;

                console.log(codes[0]);


                if (type === 'qr') {
                    openExternalLink(value).catch((error: any) => {
                        showAlert('Detail', formatWifiData(value), false);
                    });
                } else {

                    const countryOfOrigin = getCountryOfOriginFromBarcode(value);

                    console.log(`Country of Origin for ${value}: ${countryOfOrigin}`);
                    showAlert(value, countryOfOrigin);
                }


                setEnableOnCodeScanned(false);
            }
        },
    });


    const handleCameraPermission = async () => {
        const granted = await requestCameraPermission();

        if (!granted) {
            console.log('Camera permission is required to use the camera. Please grant permission in your device settings.')
            Linking.openSettings();
        }
    };


    const showAlert = (
        value = '',
        countryOfOrigin = '',
        showMoreBtn = true
    ) => {
        Alert.alert(
            value,
            countryOfOrigin,
            showMoreBtn
                ? [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    {
                        text: 'More',
                        onPress: () => {
                            setTorchOn(false);
                            setEnableOnCodeScanned(true);
                            openExternalLink(
                                'https://www.barcodelookup.com/' + value
                            );
                        },
                    },
                ]
                : [
                    {
                        text: 'Cancel',
                        onPress: () => setEnableOnCodeScanned(true),
                        style: 'cancel',
                    },
                ],
            { cancelable: false }
        );
    };

    const RoundButtonWithImage = () => {
        return (
            <TouchableOpacity
                onPress={() => setTorchOn((prev) => !prev)}
                style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Image
                        source={
                            torchOn
                                ? require('../../../assets/images/flashlight_on.jpg')
                                : require('../../../assets/images/torch_off.jpg')
                        }
                        style={styles.buttonImage}
                    />
                </View>
            </TouchableOpacity>
        );
    };


    if (device == null)
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ margin: 10 }}>Camera Not Found</Text>
            </View>
        );


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <RoundButtonWithImage />
            <Camera
                codeScanner={codeScanner}
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={true}
                torch={torchOn ? 'on' : 'off'}
                onTouchEnd={() => setEnableOnCodeScanned(true)}
            />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        position: 'absolute',
        zIndex: 1,
        right: 20,
        top: 20,
    },
    button: {
        backgroundColor: '#FFF', // Button background color
        borderRadius: 50, // Make it round (half of the width and height)
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonImage: {
        width: 25, // Adjust the width and height of the image as needed
        height: 25,
    },
});

export default Scanner;