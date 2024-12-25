import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Mapbox, { MapView, Camera, UserLocation as MapboxUserLocation, PointAnnotation } from '@rnmapbox/maps';
import { MapPin } from 'lucide-react-native';
import { Facility, UserLocation } from '../types';
import { MAPBOX_ACCESS_TOKEN, PANEL_MIN_HEIGHT } from '../constants';

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
  onFacilitySelect 
}: FacilitiesMapProps) {
  const [animateToLocation, setAnimateToLocation] = useState(false);

  const handleLocationPress = () => {
    if (userLocation) {
      setAnimateToLocation(true);
      setTimeout(() => setAnimateToLocation(false), 500);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        logoEnabled={false}
        compassEnabled
        scaleBarEnabled
        onPress={onMapPress}
      >
        {userLocation && (
          <>
            <Camera
              zoomLevel={14}
              centerCoordinate={[userLocation.longitude, userLocation.latitude]}
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
              <Text style={{ fontSize: 24 }}>{facility.emoji}</Text>
            </View>
          </PointAnnotation>
        ))}
      </MapView>

      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: PANEL_MIN_HEIGHT + 16,
          right: 16,
          backgroundColor: 'white',
          borderRadius: 9999,
          padding: 12,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
        onPress={handleLocationPress}
      >
        <MapPin size={24} color="#3B82F6" />
      </TouchableOpacity>
    </View>
  );
}