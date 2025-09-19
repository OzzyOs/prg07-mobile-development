import {View, Text, FlatList, Pressable, Alert, StyleSheet} from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function HomeScreen({ pancakeData, navigation, addFavorite, removeFavorite, favorites}) {

    const { colors } = useTheme();


    // If list is empty
    if (!pancakeData || pancakeData.length === 0) {
        return (
            <View style={styles.emptyList}>
                <Text style={[styles.emptyListText, {color: colors.text}]}>
                    It seems there are no restaurants to be loaded..
                </Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={pancakeData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    const isFavorite = favorites.some(fav => fav.id === item.id);
                    return (
                        <View
                            style={[styles.listView, { backgroundColor: colors.card || '#ddd' }]}
                        >
                            <View style={{ borderBottomColor: colors.border }}>
                                <Pressable onPress={() => navigation.navigate('Pancake Finder', {id: item.id})}>
                                    <Text style={[styles.cardHeader, { color: colors.text }]}>
                                        {item.name}
                                    </Text>
                                    <Text style={[styles.cardDescription, { color: colors.text }]}>
                                        {item.description}
                                    </Text>
                                </Pressable>
                            </View>
                            <View style={styles.favoriteStyling}>
                                <Pressable onPress={() => {
                                    isFavorite ? removeFavorite(item) : addFavorite(item);
                                    Alert.alert(isFavorite ? 'Removed from favorites!' : 'Added to favorites!');
                            }}>                                    
                                <Text style={styles.favoriteText}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 10 
    },
    cardHeader: {
        fontSize: 16, 
        fontWeight: '500'
    },
    cardDescription: {
        marginTop: 5 
    },
    favoriteStyling: {
        marginTop: 5 
    },
    favoriteText: {
         fontSize: 22
    },
    listView: {
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
    },
    emptyList: {
        flex: 1, 
        marginTop: 25 
    },
    emptyListText: {
        alignSelf: 'center'
    }
})