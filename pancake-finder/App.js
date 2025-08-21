import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import MyTabs from './navtabs/MyTabs';

export default function App() {

  // Dit zijn de custom kleuren voor de "light theme".
  const lightTheme = {
    ...DefaultTheme,
    color: {
      primary: "#CCCCCC"
    }
  }
  
  // Dit zijn de custom kleuren voor de "dark theme".
  const darkTheme = {
    ...DarkTheme,
    color: {
      primary: "#1a1a1aff"
    }
  
  }
  
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
