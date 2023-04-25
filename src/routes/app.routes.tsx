import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dashboard } from '../screens/Dashboard';

const AppNavigation = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <AppNavigation.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <AppNavigation.Screen name="Dashboard" component={Dashboard} />
        </AppNavigation.Navigator>
    );
}