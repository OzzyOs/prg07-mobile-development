import {View, StyleSheet, Text} from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
// import data from '../../data/pancakes.json';

export default function MapScreen({pancakeData}) {
    const data = pancakeData ?? [];
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
                {data.map((i, index) => (
                    <Marker 
                    key={i.id}
                    coordinate={{
                        latitude: i.coordinates.latitude,
                        longitude: i.coordinates.longitude,
                    }}
                    title={i.name}
                    >
                        <Callout>
                            <View style={{maxWidth: 200, height: 150, display: 'flex', overflow:'hidden'}}>
                                <Text>{i?.description}</Text>
                            </View>
                        </Callout>
                        </Marker>
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