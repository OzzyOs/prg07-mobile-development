import {View, Text, FlatList, Pressable, Alert} from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function HomeScreen({ pancakeData, navigation, addFavorite, removeFavorite, favorites}) {

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
        <View style={{ flex: 1, padding: 10 }}>
            <FlatList
                data={pancakeData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    const isFavorite = favorites.some(fav => fav.id === item.id);
                    return (
                        <View
                            style={{
                                padding: 15,
                                marginBottom: 10,
                                borderRadius: 8,
                                backgroundColor: colors.card || '#ddd',
                            }}
                        >
                            <View style={{ borderBottomColor: colors.border }}>
                                <Pressable onPress={() => navigation.navigate('Pancake Finder', {id: item.id})}>
                                    <Text style={{ color: colors.text, fontSize: 16, fontWeight: '500' }}>
                                        {item.name}
                                    </Text>
                                    <Text style={{color: colors.text, marginTop: 5  }}>
                                        {item.description}
                                    </Text>
                                </Pressable>
                            </View>
                            <View style={{marginTop: 5, borderTopWidth: 0.5}}>
                                <Pressable onPress={() => {
                                    isFavorite ? removeFavorite(item) : addFavorite(item);
                                    Alert.alert(isFavorite ? 'Removed from favorites!' : 'Added to favorites!');
                            }}>                                    
                                <Text style={{ fontSize: 22 }}>
                                    {isFavorite ? '❤️' : '🤍'}
                                </Text>                            
                            </Pressable>
                        </View>
                    </View>
                );
            }}
        />
    </View>
    );
}