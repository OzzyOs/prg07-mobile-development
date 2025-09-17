import {View, Text, Switch} from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function FavoritesScreen ({isDarkMode, setIsDarkMode}) {

    const {colors} = useTheme();
    
    return (
        <View>
            <View style={{padding: 20}}>
                <Text style={{marginBottom: 10, color: colors.text}}>Favorites</Text>
            </View>
        </View>
    )
}