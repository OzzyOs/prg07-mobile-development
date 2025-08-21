import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import MapScreen from './screens/MapScreen';
import SettingsScreen from './screens/SettingsScreen';
import FavoritesScreen from './screens/FavoritesScreen';

import { View, Text, Pressable, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const lightTheme = {
  ...DefaultTheme,
}

const darkTheme = {
  ...DarkTheme,
}

export default function MyTabs() {
  return (
    <Tab.Navigator>
        
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        />

      <Tab.Screen 
        name="Pancake Finder" 
        component={MapScreen}
        />

      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen} 
      />

      

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    modalButton: {
        width: 20,
        height: 20,
        borderWidth: 1,
        marginRight: 10
    },

})
   


