import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from '../screens/Dashboard';
import { SignIn } from '../screens/SignIn';

const AppNavigation = createBottomTabNavigator();

export default function AppRoutes() {
    return (
        <AppNavigation.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <AppNavigation.Screen name="Dashboard" component={Dashboard} />
            <AppNavigation.Screen name="SignIn2" component={SignIn} />
        </AppNavigation.Navigator>
    );
}