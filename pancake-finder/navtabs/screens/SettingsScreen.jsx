import {View, Text, Switch, StyleSheet} from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function SettingsScreen ({isDarkMode, setIsDarkMode}) {

    const {colors} = useTheme();
    
    return (
        <View>
            <View style={styles.container}>
                <Text style={[styles.textStyle, { color: colors.text }]}>Switch to enable Light or Dark Mode</Text>
                    <Switch
                            value={isDarkMode} // Value of current theme
                            onValueChange={setIsDarkMode} // Toggle dark mode
                            thumbColor={isDarkMode ? '#f4f3f4' : '#f4f3f4'}
                            trackColor={{ false: '#d85151ff', true: '#81b0ff' }}
                        />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    textStyle: {
        marginBottom: 10
    },
})