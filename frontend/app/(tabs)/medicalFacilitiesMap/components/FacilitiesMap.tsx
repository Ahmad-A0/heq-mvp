import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { SearchFilters } from './SearchFilters';
import { useFacility } from '../context/FacilityContext';
import { WeatherWidget } from './WeatherWidget';
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

const DISTANCE_THRESHOLD = 1000; // 1km in meters
const ZOOM_THRESHOLD = 5;

export function FacilitiesMap({
    userLocation,
    facilities,
    onMapPress,
    onFacilitySelect,
}: FacilitiesMapProps) {
    const [animateToLocation, setAnimateToLocation] = useState(false);
    const [region, setRegion] = useState<UserLocation | null>(userLocation);
    const [previousCenter, setPreviousCenter] = useState<number[]>([0, 0]);
    const [shouldFetchWeather, setShouldFetchWeather] = useState(false);
    const mapRef = useRef<Mapbox.MapView>(null);
    const cameraRef = useRef<Mapbox.Camera>(null);

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

    useEffect(() => {
        const intervalId = setInterval(async () => {
            console.log('Checking map center and zoom...');
            if (mapRef.current) {
                try {
                    const center = await mapRef.current.getCenter();
                    const zoom = await mapRef.current.getZoom();

                    const distance = calculateDistance(previousCenter, center);

                    if (
                        distance > DISTANCE_THRESHOLD &&
                        zoom > ZOOM_THRESHOLD
                    ) {
                        // console.log('Map center or zoom changed:', center, zoom);
                        setRegion({ latitude: center[1], longitude: center[0] });
                        setShouldFetchWeather(true);
                        setPreviousCenter(center);
                    } else {
                        // console.log('Map center or zoom did not change:', center, zoom, distance);
                        setShouldFetchWeather(false);
                    }
                } catch (error) {
                    console.error('Error getting map center or zoom:', error);
                }
            }
        }, 5000);

        return () => clearInterval(intervalId);
    }, [previousCenter]);

    useEffect(() => {
        if (shouldFetchWeather && region) {
            // Fetch updated weather data for region.latitude, region.longitude
        }
    }, [shouldFetchWeather, region]);

    function calculateDistance(coord1: number[], coord2: number[]) {
        const R = 6371e3; // Earth's radius in meters
        const φ1 = (coord1[1] * Math.PI) / 180; // φ, λ in radians
        const φ2 = (coord2[1] * Math.PI) / 180;
        const Δφ = ((coord2[1] - coord1[1]) * Math.PI) / 180;
        const Δλ = ((coord2[0] - coord1[0]) * Math.PI) / 180;

        const a =
            Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return R * c; // in meters
    }

    return (
        <View style={{ flex: 1 }}>
            <MapView
                ref={mapRef}
                style={{ flex: 1 }}
                logoEnabled={false}
                compassEnabled={false}
                scaleBarEnabled={false}
                onPress={onMapPress}
            >
                {userLocation && (
                    <>
                        <Camera
                            ref={cameraRef}
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

            <View className="absolute top-0 w-full flex flex-col items-end">
                <View className="w-full px-4 z-50">
                    <SearchFilters
                        filters={searchFilters}
                        onFiltersChange={onSearchFiltersChange}
                        onFocus={() => null}
                    />
                </View>

                <WeatherWidget userLocation={region} className="mx-3 mt-2" />

                <TouchableOpacity
                    className="mx-3 my-2 p-3 bg-white rounded-full shadow-md"
                    onPress={handleLocationPress}
                >
                    <Locate size={24} color="#3B82F6" />
                </TouchableOpacity>
            </View>
        </View>
    );
}
