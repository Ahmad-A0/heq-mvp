import { useState, useEffect, useRef } from 'react';
import { Stack, useRouter } from 'expo-router';
import { View, Alert } from 'react-native';
import * as Location from 'expo-location';
import { Facility, UserLocation, FacilitySearchFilters, RatingSubmission } from './types';
import { SAMPLE_FACILITIES } from './constants';
import { FacilitiesMap } from './components/FacilitiesMap';
import { SlidingPanel, SlidingPanelRef } from './components/SlidingPanel';
import { FacilityProvider } from './context/FacilityContext';

export default function MFMLayout() {
    const [searchFilters, setSearchFilters] = useState<FacilitySearchFilters>({
        query: '',
        facilityType: null,
        location: null,
    });
    const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
    const [selectedFacility, setSelectedFacility] = useState<Facility | null>(
        null
    );
    const panelRef = useRef<SlidingPanelRef>(null);

    useEffect(() => {
        (async () => {
            const { status } =
                await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.error('Permission to access location was denied');
                return;
            }

            const location = await Location.getCurrentPositionAsync({});
            setUserLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            });
        })();
    }, []);

    const filteredFacilities = SAMPLE_FACILITIES.filter((facility) => {
        const matchesQuery = facility.name
            .toLowerCase()
            .includes(searchFilters.query.toLowerCase());

        const matchesType =
            !searchFilters.facilityType ||
            facility.type === searchFilters.facilityType;

        // In a real app, we would use the actual distance calculation here
        const matchesLocation = !searchFilters.location || true;

        return matchesQuery && matchesType && matchesLocation;
    });

    const handleMapPress = () => {
        setSelectedFacility(null);
        panelRef.current?.minimize();
    };

    const router = useRouter();

    const handleFacilitySelect = (facility: Facility | null) => {
        setSelectedFacility(facility);
        if (facility) {
            setUserLocation({
                latitude: facility.coordinates[1],
                longitude: facility.coordinates[0],
            });
            panelRef.current?.expand();
            router.push('/medicalFacilitiesMap/facility');
        }
    };

    const handleRatingSubmit = (rating: RatingSubmission) => {
        console.log('Rating submitted:', rating);
        // TODO: Implement actual rating submission
    };

    const showNotification = (message: string) => {
        // For now, use Alert as a simple notification mechanism
        Alert.alert('Weather Notification', message);
        console.log('Notification:', message);
    };

    const contextValue = {
        facilities: filteredFacilities,
        searchFilters,
        onSearchFiltersChange: setSearchFilters,
        onFacilitySelect: handleFacilitySelect,
        selectedFacility,
        onRatingSubmit: handleRatingSubmit,
        showNotification,
    };

    return (
        <View style={{ flex: 1 }}>
            <FacilityProvider value={contextValue}>
                <FacilitiesMap
                    userLocation={userLocation}
                    facilities={filteredFacilities}
                    onMapPress={handleMapPress}
                    onFacilitySelect={handleFacilitySelect}
                />

                <SlidingPanel ref={panelRef}>
                    <Stack
                        screenOptions={{
                            headerShown: false,
                            animation: 'slide_from_right',
                            animationDuration: 100,
                        }}
                    >
                        <Stack.Screen name="index" />
                        <Stack.Screen
                            name="facility"
                            options={{
                                animation: 'simple_push',
                                animationDuration: 100,
                            }}
                        />
                    </Stack>
                </SlidingPanel>
            </FacilityProvider>
        </View>
    );
}
