import {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import data from '../../data/pancakes.json';

export default function MapScreen() {
    const [restaurants, setRestaurants] = useState(data)
    // console.log(data);

    return (
        <View style={{height: "100%"}}>
              <MapView
                style={styles.map}
                initialRegion={{
                     latitude: 51.9225,
                        longitude: 4.4792,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                }}
                >
                {restaurants.map((i, index) => (
                    <Marker 
                    key={i.id}
                    coordinate={{
                        latitude: i.latitude,
                        longitude: i.longitude,
                        latitudeDelta: i.latitudeDelta,
                        longitudeDelta: i.longitudeDelta
                    }}
                    title={i.name}
                    description={i.description}
                    />
                ))}
            </MapView>     
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
});