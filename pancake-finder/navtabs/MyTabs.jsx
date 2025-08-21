import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from './screens/MapScreen';
import SettingsScreen from './screens/SettingsScreen';
import FavoritesScreen from './screens/FavoritesScreen';

import { View, Text, Pressable, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export default function MyTabs({ isDarkMode, setIsDarkMode }) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          headerRight: () => (
            <Pressable
              onPress={() => setIsDarkMode(!isDarkMode)}
              style={{ marginRight: 15 }}
            >
              <Text>{isDarkMode ? "☀️" : "🌙"}</Text>
            </Pressable>
          ),
        }}
      />
      <Tab.Screen
        name="Pancake Finder"
        component={MapScreen}
        options={{
          headerRight: () => (
            <Pressable
              onPress={() => setIsDarkMode(!isDarkMode)}
              style={{ marginRight: 15 }}
            >
              <Text>{isDarkMode ? "☀️" : "🌙"}</Text>
            </Pressable>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerRight: () => (
            <Pressable
              onPress={() => setIsDarkMode(!isDarkMode)}
              style={{ marginRight: 15 }}
            >
              <Text>{isDarkMode ? "☀️" : "🌙"}</Text>
            </Pressable>
          ),
        }}
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



