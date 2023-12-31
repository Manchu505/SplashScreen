import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import QRCode from 'react-native-qrcode-svg';
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//The home screen allows users to generate QR codes with custom text or URLs.

const Home = () => { 

const [qrValue, setQRValue] = useState(''); 
    const [isActive, setIsActive] = useState(false); 
  
    const generateQRCode = () => { 
        if (!qrValue) return; 
  
        setIsActive(true); 
    }; 
  
    const handleInputChange = (text) => { 
        setQRValue(text); 
  
        if (!text) { 
            setIsActive(false); 
        } 
    }; 
//Users can enter text or URLs into the TextInput.
//Pressing the "Generate QR Code" button generates the QR code and displays it.
//The QR code is displayed in a QRCode component.
    return ( 
        <View style={styles.container}> 
            <View style={styles.wrapper}> 
                <Text style={styles.title}> 
                    QR Code Generator 
                </Text> 
                <Text style={styles.description}> 
                    Paste a URL or enter text to create a QR code 
                </Text> 
                <TextInput 
                    style={styles.input} 
                    placeholder="Enter text or URL"
                    value={qrValue} 
                    onChangeText={handleInputChange} 
                /> 
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={generateQRCode} 
                > 
                    <Text style={styles.buttonText}> 
                        Generate QR Code 
                    </Text> 
                </TouchableOpacity> 
                {isActive && ( 
                    <View style={styles.qrCode}> 
                        <QRCode 
                            value={qrValue} 
                            size={200} 
                            color="white"
                            backgroundColor="red"
                        /> 
                    </View> 
                )} 
            </View> 
        </View> 
    ); 
}; 

const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#eee', 
    }, 
    wrapper: { 
        maxWidth: 300, 
        backgroundColor: '#fff', 
        borderRadius: 7, 
        padding: 20, 
        shadowColor: 'rgba(0, 0, 0, 0.1)', 
        shadowOffset: { width: 0, height: 10 }, 
        shadowOpacity: 1, 
        shadowRadius: 30, 
    }, 
    title: { 
        fontSize: 21, 
        fontWeight: '500', 
        marginBottom: 10, 
    }, 
    description: { 
        color: '#575757', 
        fontSize: 16, 
        marginBottom: 20, 
    }, 
    input: { 
        fontSize: 18, 
        padding: 17, 
        borderWidth: 1, 
        borderColor: '#999', 
        borderRadius: 5, 
        marginBottom: 20, 
    }, 
    button: { 
        backgroundColor: '#3498DB', 
        borderRadius: 5, 
        padding: 15, 
        alignItems: 'center', 
    }, 
    buttonText: { 
        color: '#fff', 
        fontSize: 18, 
    }, 
    qrCode: { 
        marginTop: 20, 
        alignItems: 'center', 
    }, 
});
export default Home; 
