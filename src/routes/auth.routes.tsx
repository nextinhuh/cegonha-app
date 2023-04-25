import React from 'react';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AuthNavigation = createNativeStackNavigator();

export default function AuthRoutes() {
    return (
        <AuthNavigation.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <AuthNavigation.Screen name="SignIn" component={SignIn} />
            <AuthNavigation.Screen name="SignUp" component={SignUp} />
        </AuthNavigation.Navigator>
    );
}