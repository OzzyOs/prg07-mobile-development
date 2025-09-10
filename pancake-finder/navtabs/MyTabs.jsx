import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from './screens/MapScreen';
import SettingsScreen from './screens/SettingsScreen';
import HomeScreen from './screens/HomeScreen';

import { View, Text, Pressable, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export default function MyTabs({ isDarkMode, setIsDarkMode, pancakeData }) {
  return (
    <Tab.Navigator>

      <Tab.Screen
        name="Home"
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
      >
        {props => <HomeScreen {...props} pancakeData={pancakeData} isDarkMode={isDarkMode} />}
      </Tab.Screen>

      <Tab.Screen
        name="Pancake Finder"
        options={{
          headerRight: () => (
            <Pressable
              onPress={() => setIsDarkMode(!isDarkMode)}
              style={{ marginRight: 15 }}
            >
              <Text>{isDarkMode ? "☀️" : "🌙"}</Text>
            </Pressable>
          ),
        }}>
          {props => <MapScreen {...props} pancakeData={pancakeData} />}
      </Tab.Screen>

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        initialParams={{ isDarkMode }}
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



