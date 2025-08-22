import React from 'react';
import {View, Text} from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function FavoritesScreen() {

    const { colors } = useTheme();

    return (
        <React.Fragment>
            <View style={{ flex: 1, marginTop: 25 }}>
                <Text style={{ alignSelf:'center', color: colors.text }}> It seems you have no favorites yet.. </Text>
            </View>
        </React.Fragment>
    )
}