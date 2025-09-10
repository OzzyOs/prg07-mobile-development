import {View, StyleSheet, Text} from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { useTheme } from '@react-navigation/native';

// import data from '../../data/pancakes.json';

export default function MapScreen({pancakeData}) {
    const data = pancakeData ?? [];
    const { colors } = useTheme();
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
                        <Callout style={{backgroundColor: colors.background}}>
                            <View style={{maxWidth: 200, height: 150, display: 'flex', overflow:'hidden', backgroundColor: colors.background}}>
                                <Text style={{fontWeight: 'bold', marginBottom: 5, color: colors.text}}>{i?.name}</Text>
                                <Text style={{color: colors.text}}>{i?.description}</Text>
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