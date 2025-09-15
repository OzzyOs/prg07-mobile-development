import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from './screens/MapScreen';
import HomeScreen from './screens/HomeScreen';

import { Text, Pressable, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export default function MyTabs({ isDarkMode, setIsDarkMode, pancakeData }) {

  return (
    <Tab.Navigator>

      <Tab.Screen
        name="Pancake Finder"
        options={({ navigation }) => ({
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Settings')} // Navigate to the Settings screen
              style={{ marginRight: 15 }}
            >
              <Text>⚙️</Text>
            </Pressable>
          ),
        })}
      >
          {props => <MapScreen {...props} pancakeData={pancakeData} />}
      </Tab.Screen>

      <Tab.Screen
        name="Home"
        options={({ navigation }) => ({
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Settings')} // Navigate to the Settings screen
              style={{ marginRight: 15 }}
            >
              <Text>⚙️</Text>
            </Pressable>
          ),
        })}
      >
        {props => <HomeScreen {...props} pancakeData={pancakeData} isDarkMode={isDarkMode} />}
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

})



