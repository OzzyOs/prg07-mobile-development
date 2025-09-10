import React from 'react';
import {View, Text, FlatList, Pressable} from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function HomeScreen({ pancakeData, navigation}) {

    const { colors } = useTheme();

      if (!pancakeData || pancakeData.length === 0) {
        return (
            <View style={{ flex: 1, marginTop: 25 }}>
                <Text style={{ alignSelf: 'center', color: colors.text }}>
                    It seems there are no restaurants to be loaded..
                </Text>
            </View>
        );
    }

    return (
        <View style={{ flex: 1, marginTop: 15 }}>
            <FlatList
                data={pancakeData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Pressable onPress={() => navigation.navigate('Pancake Finder', {id: item.id})}>
                    <View style={{ 
                        padding: 16,
                        borderBottomWidth: 1,
                        borderBottomColor: colors.border,
                    }}>
                        <Text style={{ color: colors.text, fontSize: 18 }}>
                            {item.name}
                        </Text>
                        <Text style={{ color: colors.text }}>
                            {item.description}
                        </Text>
                    </View>
                    </Pressable>
                )}
            />
        </View>
    );
}