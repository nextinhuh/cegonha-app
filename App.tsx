import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./src/config/firebase.config";
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  useFonts,
  JosefinSlab_400Regular,
  JosefinSlab_600SemiBold,
  JosefinSlab_700Bold
} from '@expo-google-fonts/josefin-slab';
import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';
import Routes from "./src/routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

export default function App() {
  initializeApp(firebaseConfig);
  const [fontsLoaded] = useFonts({
    JosefinSlab_400Regular,
    JosefinSlab_600SemiBold,
    JosefinSlab_700Bold,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_300Light,
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
    <NavigationContainer onReady={onLayoutRootView}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Routes />
      </GestureHandlerRootView>
    </NavigationContainer>

  );
}