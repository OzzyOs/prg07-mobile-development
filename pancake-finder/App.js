import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import MyTabs from './navtabs/MyTabs';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  // State management
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [pancakeData, setPancakeData] = useState([]);

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
      {/* Geef de darkMode mee als properties naar de MyTabs component*/}
      <MyTabs isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} pancakeData={pancakeData}/>
    </NavigationContainer>
  );
}
