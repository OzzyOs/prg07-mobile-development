import {View, Text, Switch} from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function SettingsScreen ({isDarkMode, setIsDarkMode}) {

    const {colors} = useTheme();
    
    return (
        <View>
            <View style={{padding: 20}}>
                <Text style={{marginBottom: 10, color: colors.text}}>Switch to enable Light or Dark Mode</Text>
                    <Switch
                            value={isDarkMode}
                            onValueChange={setIsDarkMode} // Toggle dark mode
                            thumbColor={isDarkMode ? '#f4f3f4' : '#f4f3f4'}
                            trackColor={{ false: '#d85151ff', true: '#81b0ff' }}
                        />
            </View>
        </View>
    )
}