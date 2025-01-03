import React, { useState } from 'react'; import { View, TouchableOpacity, Text } from 'react-native';
import { SearchFilters } from './SearchFilters';
import { useFacility } from '../context/FacilityContext';
import Mapbox, {
    MapView,
    Camera,
    UserLocation as MapboxUserLocation,
    PointAnnotation,
} from '@rnmapbox/maps';
import * as Location from 'expo-location';
import { MapPin, Locate } from 'lucide-react-native';
import { Facility, UserLocation } from '../types';
import {
    MAPBOX_ACCESS_TOKEN,
    PANEL_MAX_HEIGHT,
    PANEL_MIN_HEIGHT,
} from '../constants';

interface FacilitiesMapProps {
    userLocation: UserLocation | null;
    facilities: Facility[];
    onMapPress: () => void;
    onFacilitySelect: (facility: Facility) => void;
}

Mapbox.setAccessToken(MAPBOX_ACCESS_TOKEN);

export function FacilitiesMap({
    userLocation,
    facilities,
    onMapPress,
    onFacilitySelect,
}: FacilitiesMapProps) {
    const [animateToLocation, setAnimateToLocation] = useState(false);

    const handleLocationPress = async () => {
        if (userLocation) {
            const location = await Location.getCurrentPositionAsync({});
            userLocation.latitude = location.coords.latitude;
            userLocation.longitude = location.coords.longitude;

            setAnimateToLocation(true);
            setTimeout(() => setAnimateToLocation(false), 500);
        }
    };

    const { searchFilters, onSearchFiltersChange } = useFacility();

    return (
        <View style={{ flex: 1 }}>
            <View className="absolute top-0 left-0 right-0 z-50 px-4 pt-2">
                <SearchFilters
                    filters={searchFilters}
                    onFiltersChange={onSearchFiltersChange}
                    onFocus={() => null}
                />
            </View>
            <MapView
                style={{ flex: 1 }}
                logoEnabled={false}
                compassEnabled={false}
                scaleBarEnabled={false}
                onPress={onMapPress}
            >
                {userLocation && (
                    <>
                        <Camera
                            zoomLevel={14}
                            centerCoordinate={[
                                userLocation.longitude,
                                userLocation.latitude,
                            ]}
                            animationDuration={animateToLocation ? 500 : 0}
                        />
                        <MapboxUserLocation
                            visible={true}
                            showsUserHeadingIndicator={true}
                        />
                    </>
                )}

                {facilities.map((facility) => (
                    <PointAnnotation
                        key={facility.id}
                        id={facility.id}
                        coordinate={facility.coordinates}
                        onSelected={() => onFacilitySelect(facility)}
                    >
                        <View className="bg-white rounded-full p-2 shadow-lg border-2 border-blue-500">
                            <Text style={{ fontSize: 24 }}>
                                {facility.emoji}
                            </Text>
                        </View>
                    </PointAnnotation>
                ))}
            </MapView>

            <TouchableOpacity
                className="absolute top-14 right-0 m-3 p-3 bg-white rounded-full shadow-md"
                onPress={handleLocationPress}
            >
                <Locate size={24} color="#3B82F6" />
            </TouchableOpacity>
        </View>
    );
}
