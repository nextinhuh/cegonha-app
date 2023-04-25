import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from '../screens/Dashboard';
import { SignIn } from '../screens/SignIn';
import { AntDesign } from '@expo/vector-icons';

const AppNavigation = createBottomTabNavigator();

export default function AppRoutes() {
    return (
        <AppNavigation.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <AppNavigation.Screen name="Dashboard" component={Dashboard} options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <AntDesign name="star" size={22} color={focused ? 'purple' : 'black'} />
                    )
                },
                tabBarLabel: ({ focused }) => {
                    return (
                        <Text className={focused ? 'text-purple-700' : 'text-zinc-400'}>Home</Text>
                    )
                }
            }}
            />
            <AppNavigation.Screen name="SignIn2" component={SignIn} />
        </AppNavigation.Navigator>
    );
}