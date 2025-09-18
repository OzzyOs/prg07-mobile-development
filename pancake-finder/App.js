import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from './navtabs/screens/SettingsScreen';
import MyTabs from './navtabs/MyTabs';
import React, { useState, useEffect, use } from 'react';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage'

const Stack = createStackNavigator();

export default function App() {
  // State management
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [pancakeData, setPancakeData] = useState([]);
  const [favorites, setFavorites] = useState([])



  // Dit zijn de custom kleuren voor de "light theme".
  const lightTheme = {
    ...DefaultTheme,
    colors:{
      ...DefaultTheme.colors,
      primary: "#000000",
      background: "#CCCCCC",
      text: "#000000",
    }
  }
  
  // Dit zijn de custom kleuren voor de "dark theme".
  const nightTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: "white",
      background: "#3c3c3cff",
      text: "white",
    }
  }

  const saveFavorites = async (favoritesArray) => {
    try {
      await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
    } catch (error) {
      console.error('Error saving favorites:', error);
    }
  };

  const addFavorite = (item) => {
    const updatedFavorites = [...favorites, item];
    setFavorites(updatedFavorites);
    saveFavorites(updatedFavorites);
  };

  const removeFavorite = (item) => {
    const updatedFavorites = favorites.filter(fav => fav.id !== item.id);
    setFavorites(updatedFavorites);
    saveFavorites(updatedFavorites);
  };

  // Functie om UI kleuren lokaal op te slaan.
  const saveDarkMode = async (value) => {
    try {
      await AsyncStorage.setItem('isDarkMode', JSON.stringify(value));
    } catch (error) {
      console.error ('Error saving dark mode', error);
    }
  }

  // Handler om darkMode te registreren.
  const handleDarkModeChange = (value) => {
    setIsDarkMode(value);
    saveDarkMode(value);
  };

  useEffect(() => {
  const loadFavorites = async () => {
    try {
      const savedFavorites = await AsyncStorage.getItem('favorites');
      if (savedFavorites !== null) {
        setFavorites(JSON.parse(savedFavorites));
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
  };
  loadFavorites();
}, []);

  // Deze functie voert zich uit op elke refresh van de applicatie.
  // variabel probeert de opgeslagen darkmode op te halen
  // als de waarde bestaat, parse JSON string naar een boolean
  // & update the staat van de applicatie met de 'setIsDarkMode'.
  // Als er geen waarde is gevonden houd de applicatie de standaard staat.
  useEffect(()=> {
    const loadDarkMode = async () => {
      try {
        const savedMode = await AsyncStorage.getItem('isDarkMode');
          if (savedMode !== null) {
            setIsDarkMode(JSON.parse(savedMode));
          }
      } catch (error) {
          console.error('Error loading dark mode:', error)
      }
    };
    loadDarkMode(); 
  }, [])
  
  // Deze functie probeert data, met een fetch request, op te halen van webservice
  // wacht vervolgens de response af, als de response correct is, vult het de pancakeData
  // met de data uit het response.
    const fetchData = async () => {
        try {
            const response = await fetch('https://stud.hosted.hr.nl/0933530/webserviceprg07/Cake.json');
            const pancakeData = await response.json();
            console.log(pancakeData)
            setPancakeData(pancakeData);
        } catch (error) {
            console.error(error);
        }
    };

    // Bij het starten/verfrissen van de applicatie, voer de fetchData functie uit.
    useEffect(() => {
            fetchData();
        }, []);

  return (
    <NavigationContainer theme={isDarkMode ? nightTheme : lightTheme}>
      <StatusBar style={isDarkMode ? "light" : "dark"} />
      <Stack.Navigator>
        <Stack.Screen
          name='Back'
          options={{headerShown: false}}
          >
            {props => (
              <MyTabs 
                {...props}
                isDarkMode={isDarkMode} 
                setIsDarkMode={handleDarkModeChange} 
                pancakeData={pancakeData}
                favorites={favorites}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
          />)}
        </Stack.Screen>

        <Stack.Screen
          name='Settings'
          options={{title: 'Settings'}}
        >
          {props=> (
            <SettingsScreen
              {...props}
              isDarkMode={isDarkMode}
              setIsDarkMode={handleDarkModeChange}
          />
          )} 
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
