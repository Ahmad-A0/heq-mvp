import { useState, useEffect } from 'react';
import { Slot } from 'expo-router';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Mapbox, { MapView, Camera, PointAnnotation } from '@rnmapbox/maps';
import { Search } from 'lucide-react-native';
import * as Location from 'expo-location';

interface Facility {
  id: string;
  name: string;
  coordinates: [number, number];
  type: string;
  distance: string;
  emoji: string;
}

interface UserLocation {
  latitude: number;
  longitude: number;
}

// Sample data - in a real app this would come from an API
const SAMPLE_FACILITIES: Facility[] = [
  {
    id: '1',
    name: 'City General Hospital',
    coordinates: [-122.4194, 37.7749], // San Francisco coordinates
    type: 'Hospital',
    distance: '0.8 miles',
    emoji: '🏥',
  },
  {
    id: '2',
    name: 'Downtown Medical Center',
    coordinates: [-122.4124, 37.7884],
    type: 'Medical Center',
    distance: '1.2 miles',
    emoji: '⚕️',
  },
  {
    id: '3',
    name: 'Community Health Clinic',
    coordinates: [-122.4094, 37.7854],
    type: 'Clinic',
    distance: '1.5 miles',
    emoji: '🏪',
  },
];

export default function MFMLayout() {
  const [searchQuery, setSearchQuery] = useState('');
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [showList, setShowList] = useState(false);

  Mapbox.setAccessToken(
    'pk.eyJ1IjoiODgxcmQ3d2MiLCJhIjoiY2x6NWczOTc1M3cxczJqcjRseWdtZGNxayJ9.Q7rT9130fic6rc8dNV9kNg'
  );

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

  const filteredFacilities = SAMPLE_FACILITIES.filter(facility =>
    facility.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={{ flex: 1 }}>
      <MapView 
        style={{ flex: 1 }}
        logoEnabled={false}
        compassEnabled
        scaleBarEnabled
      >
        {userLocation && (
          <Camera
            zoomLevel={14}
            centerCoordinate={[userLocation.longitude, userLocation.latitude]}
            animationDuration={0}
          />
        )}
        
        {filteredFacilities.map((facility) => (
          <PointAnnotation
            key={facility.id}
            id={facility.id}
            coordinate={facility.coordinates}
            onSelected={() => setSelectedFacility(facility)}
          >
            <View className="bg-white rounded-full p-2 shadow-lg border-2 border-blue-500">
              <Text style={{ fontSize: 24 }}>{facility.emoji}</Text>
            </View>
          </PointAnnotation>
        ))}
      </MapView>

      {/* Search Bar Overlay */}
      <View className="absolute top-4 left-4 right-4">
        <View className="flex-row items-center bg-white rounded-lg shadow-lg p-2">
          <Search size={20} className="text-gray-400 mx-2" />
          <TextInput
            className="flex-1 text-base text-gray-800 ml-2"
            placeholder="Search medical facilities..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* Selected Facility Info */}
      {selectedFacility && (
        <View className="absolute bottom-4 left-4 right-4 bg-white rounded-lg shadow-lg p-4">
          <View className="flex-row items-center">
            <Text style={{ fontSize: 24 }} className="mr-2">
              {selectedFacility.emoji}
            </Text>
            <Text className="text-lg font-semibold text-gray-900">
              {selectedFacility.name}
            </Text>
          </View>
          <Text className="text-gray-600 mt-1">
            {selectedFacility.type}
          </Text>
          <Text className="text-blue-600 mt-1">
            {selectedFacility.distance} away
          </Text>
          <TouchableOpacity 
            className="mt-3 bg-blue-500 py-2 px-4 rounded-lg"
            onPress={() => setShowList(!showList)}
          >
            <Text className="text-white text-center">
              {showList ? 'Hide List' : 'Show Nearby Facilities'}
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Facilities List */}
      {showList && (
        <ScrollView 
          className="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl shadow-lg"
          style={{ maxHeight: '50%' }}
        >
          <View className="p-4">
            <Text className="text-xl font-semibold text-gray-900 mb-4">
              Nearby Medical Facilities
            </Text>
            {filteredFacilities.map((facility) => (
              <TouchableOpacity
                key={facility.id}
                className="bg-gray-50 p-4 rounded-lg mb-2"
                onPress={() => {
                  setSelectedFacility(facility);
                  setShowList(false);
                }}
              >
                <View className="flex-row items-center">
                  <Text style={{ fontSize: 24 }} className="mr-2">
                    {facility.emoji}
                  </Text>
                  <View>
                    <Text className="text-lg font-medium text-gray-900">
                      {facility.name}
                    </Text>
                    <Text className="text-gray-600 mt-1">
                      {facility.type}
                    </Text>
                    <Text className="text-blue-600 mt-1">
                      {facility.distance} away
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      )}

      <Slot />
    </View>
  );
}
