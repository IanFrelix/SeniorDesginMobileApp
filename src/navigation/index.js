import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/loginScreen';
import RegisterScreen from '../screens/registerScreen';
import MonitorScreen from '../screens/monitorScreen';
import CommandScreen from '../screens/commandsScreen';
import SettingsScreen from '../screens/settingsScreen';
import HomeScreen from '../screens/homeScreen';

const Stack = createNativeStackNavigator();


const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen nam="Register" component={RegisterScreen} />
                <Stack.Screen nam="Monitor" component={MonitorScreen} />
                <Stack.Screen nam="Command" component={CommandScreen} />
                <Stack.Screen nam="Settings" component={SettingsScreen} />
                <Stack.Screen nam="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    back: {
        headerShown: true, 
        headerTitle: "",
        headerBackVisible: true,
        borderBottomWidth: 0,
        headerStyle: {backgroundColor: '#3d3d3d'}
    }
});

export default Navigation;