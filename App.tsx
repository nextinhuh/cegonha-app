import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./src/config/firebase.config";
import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  JosefinSlab_400Regular,
  JosefinSlab_600SemiBold,
  JosefinSlab_700Bold
} from '@expo-google-fonts/josefin-slab';
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

import { SignIn } from './src/screens/SignIn';
import { useCallback } from "react";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const app = initializeApp(firebaseConfig);
  const [fontsLoaded] = useFonts({
    JosefinSlab_400Regular,
    JosefinSlab_600SemiBold,
    JosefinSlab_700Bold,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className="flex-1" onLayout={onLayoutRootView}>
      <SignIn />
    </View>
  );
}