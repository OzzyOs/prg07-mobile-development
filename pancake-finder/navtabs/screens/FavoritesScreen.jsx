import { View, Text, FlatList, Pressable } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function FavoritesScreen({ favorites, removeFavorite }) {
  const { colors } = useTheme();

  if (!favorites || favorites.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: colors.text }}>You have no favorites yet..</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text style={{ alignSelf: 'center',fontSize: 20, fontWeight: 'bold', color: colors.text, marginBottom: 10 }}>
        Current favorites
      </Text>

      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 15,
              marginBottom: 10,
              borderRadius: 8,
              backgroundColor: colors.card || '#ddd',
            }}
          >
            <Text style={{ color: colors.text, fontSize: 16, fontWeight: '500' }}>
              {item.name}
            </Text>
            <Text style={{ color: colors.text, marginTop: 5 }}>
              {item.description}
            </Text>
            <Pressable onPress={()=> removeFavorite(item)} style={{marginTop: 5, borderTopWidth: 0.5}}>
                <Text style={{color: 'red'}}>Remove from favorites</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}
