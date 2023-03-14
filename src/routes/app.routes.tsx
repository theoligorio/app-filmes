import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { Platform } from 'react-native';
// import { BlurView } from "expo-blur";
// import { Entypo } from '@expo/vector-icons';
import { Home } from "../screens/Home";
import { Search } from "../screens/Search";
import { Favorites } from "../screens/Favorites";
import { InfoMovies } from '../screens/InfoMovies'

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="Início"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Início" component={Home} />

      <Screen name="Search" component={Search} />

      <Screen name="Favorites" component={Favorites} />

      <Screen name="InfoMovies" component={InfoMovies} />
    </Navigator>
  );
}
