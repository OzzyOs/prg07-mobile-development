import React, { useEffect, useRef } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { useTheme } from '@react-navigation/native';

// import data from '../../data/pancakes.json';

export default function MapScreen({ pancakeData, route }) {
    const data = pancakeData ?? [];
    const { colors } = useTheme();
    const { id } = route.params || {};
    const markersRef = useRef({}); 
    const mapRef = useRef(null);
    // console.log(data);

    useEffect(() => {
            if (id && markersRef.current[id]) {
                // Open callout voor geselecteerd restaurant
                markersRef.current[id].showCallout();
                
                // Zoom naar locatie van het geselecteerde restaurant
                const selected = data.find(item => item.id === id);
                    if(selected && mapRef.current) {
                        mapRef.current.animateToRegion({
                            latitude: selected.coordinates.latitude,
                            longitude: selected.coordinates.longitude,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01,
                        },
                        // Animatie snelheid
                        1000
                    );
                    }
            }
        }, [id, data]);

    return (
        <View style={{height: "100%"}}>
              <MapView
                ref={mapRef}
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
                    ref={(ref) => (markersRef.current[i.id] = ref)}
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