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
import User from './screens/UserScreen';
import Home from './screens/HomeScreen';
import Contact from './screens/ContactCard';
import Settings from './screens/SettingScreen';
import QRCodeGenerator from './screens/ContactCard';


//The splash screen is shown for 5 seconds before hiding automatically.
SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 5000);


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
 
//A navigation component that creates a bottom tab navigation
const Tab = createBottomTabNavigator();

function MyTabs() {
	return (
	  <Tab.Navigator
		initialRouteName="Home"
		screenOptions={{
		  tabBarActiveTintColor: '#e91e63',
		}}
	  >
		<Tab.Screen
		  name="Get Ready to Generate"
		  component={Home}
		  options={{
			tabBarLabel: 'Home',
			tabBarIcon: ({ color, size }) => (
			  <MaterialCommunityIcons name="home-circle" color={color} size={size} />
			),
		  }}
		/>
		<Tab.Screen
		  name="Notifications"
		  component={User}
		  options={{
			tabBarLabel: 'Updates',
			tabBarIcon: ({ color, size }) => (
			  <MaterialCommunityIcons name="hexagon-slice-5" color={color} size={size} />
			),
		  }}
		/>
		<Tab.Screen
		  name="Contacts"
		  component={QRCodeGenerator}
		  options={{
			tabBarLabel: 'Settings',
			tabBarIcon: ({ color, size }) => (
			  <MaterialCommunityIcons name="atom" color={color} size={size} />
			),
		  }}
		/>
	  </Tab.Navigator>
	);
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
