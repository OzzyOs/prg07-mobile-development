import React from 'react';
import {View, Text} from 'react-native';

export default function FavoritesScreen() {
    return (
        <React.Fragment>
            <View style={{ flex: 1, marginTop: 25 }}>
                <Text style={{ alignSelf:'center'}}> It seems you have no favorites yet.. </Text>
            </View>
        </React.Fragment>
    )
}