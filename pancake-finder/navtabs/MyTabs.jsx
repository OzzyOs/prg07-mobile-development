import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from './screens/MapScreen';
import HomeScreen from './screens/HomeScreen';

import { Text, Pressable, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export default function MyTabs({ isDarkMode, pancakeData, addFavorite, removeFavorite, favorites }) {

  return (
    <Tab.Navigator>

      <Tab.Screen
        name="Pancake Finder"
        options={({ navigation }) => ({
          tabBarIcon:() => (
            <Text>🥞</Text>
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Settings')} // Navigate to the Settings screen
              style={styles.settingsButton}
            >
              <Text>⚙️</Text>
            </Pressable>
          ),
        })}
      >
          {props => <MapScreen {...props} pancakeData={pancakeData} />}
      </Tab.Screen>

      <Tab.Screen
        name="Hotspots"
        options={({ navigation }) => ({
          tabBarIcon:() => (
            <Text>🚩</Text>
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Settings')} // Navigate to the Settings screen
              style={styles.settingsButton}
            >
              <Text>⚙️</Text>
            </Pressable>
          ),
        })}
      >
        {props => <HomeScreen {...props} pancakeData={pancakeData} isDarkMode={isDarkMode} favorites={favorites} addFavorite={addFavorite} removeFavorite={removeFavorite} />}
      </Tab.Screen>

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
    settingsButton: {
      marginRight: 15
    }
})



