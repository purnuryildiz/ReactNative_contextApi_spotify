import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenName from '../constants/ScreenName';
import HomeScreen from '../screens/HomeScreen';
import LikedSongScreen from '../screens/LikedSongScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SongInfoScreen from '../screens/SongInfoScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//BOTTOM_TAB NAVIGATION

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={ScreenName.home} component={HomeScreen} />
      <Tab.Screen name={ScreenName.profile} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

//STACK NAVIGATION
const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ScreenName.liked} component={LikedSongScreen} />
        <Stack.Screen name={ScreenName.login} component={LoginScreen} />

        <Stack.Screen name={ScreenName.songInfo} component={SongInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
