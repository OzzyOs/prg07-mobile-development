import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import MyTabs from './navtabs/MyTabs';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  // State management
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  return (
    <NavigationContainer theme={isDarkMode ? nightTheme : lightTheme}>
      <StatusBar style={isDarkMode ? "light" : "dark"} />
      {/* Geef de darkMode mee als properties naar de MyTabs component*/}
      <MyTabs isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </NavigationContainer>
  );
}
