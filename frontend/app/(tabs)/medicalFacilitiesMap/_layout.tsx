import { useState, useEffect, useRef } from 'react';
import { Slot } from 'expo-router';
import { View } from 'react-native';
import * as Location from 'expo-location';
import { Facility, UserLocation, FacilitySearchFilters } from './types';
import { SAMPLE_FACILITIES } from './constants';
import { FacilitiesMap } from './components/FacilitiesMap';
import { PanelContent } from './components/PanelContent';
import { SlidingPanel, SlidingPanelRef } from './components/SlidingPanel';

export default function MFMLayout() {
  const [searchFilters, setSearchFilters] = useState<FacilitySearchFilters>({
    query: '',
    facilityType: null,
    location: null,
  });
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const panelRef = useRef<SlidingPanelRef>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
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

  const filteredFacilities = SAMPLE_FACILITIES.filter(facility => {
    const matchesQuery = facility.name
      .toLowerCase()
      .includes(searchFilters.query.toLowerCase());

    const matchesType = !searchFilters.facilityType || 
      facility.type === searchFilters.facilityType;

    // In a real app, we would use the actual distance calculation here
    const matchesLocation = !searchFilters.location || true;

    return matchesQuery && matchesType && matchesLocation;
  });

  const handleMapPress = () => {
    setSelectedFacility(null);
    panelRef.current?.minimize();
  };

  const handleFacilitySelect = (facility: Facility) => {
    setSelectedFacility(facility);
    setUserLocation({
      latitude: facility.coordinates[1],
      longitude: facility.coordinates[0],
    });
    panelRef.current?.expand();
  };

  const handleSearchFocus = () => {
    panelRef.current?.expand();
  };

  return (
    <View style={{ flex: 1 }}>
      <FacilitiesMap
        userLocation={userLocation}
        facilities={filteredFacilities}
        onMapPress={handleMapPress}
        onFacilitySelect={handleFacilitySelect}
      />

      <SlidingPanel ref={panelRef}>
        <PanelContent
          selectedFacility={selectedFacility}
          facilities={filteredFacilities}
          searchFilters={searchFilters}
          onSearchFiltersChange={setSearchFilters}
          onSearchFocus={handleSearchFocus}
          onFacilitySelect={handleFacilitySelect}
        />
      </SlidingPanel>

      <Slot />
    </View>
  );
}
