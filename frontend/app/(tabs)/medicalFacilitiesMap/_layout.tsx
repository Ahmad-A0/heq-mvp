import { useState, useEffect, useRef } from 'react';
import { Slot } from 'expo-router';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  Animated,
  PanResponder,
  Dimensions,
  Platform,
} from 'react-native';
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

const SAMPLE_FACILITIES: Facility[] = [
  {
    id: '1',
    name: 'City General Hospital',
    coordinates: [-122.4194, 37.7749],
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

const SCREEN_HEIGHT = Dimensions.get('window').height;
const TAB_BAR_HEIGHT = Platform.OS === 'ios' ? 85 : 65;
const PANEL_MIN_HEIGHT = SCREEN_HEIGHT * 0.8;
const PANEL_MAX_HEIGHT = 100;

export default function MFMLayout() {
  const [searchQuery, setSearchQuery] = useState('');
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const panelY = useRef(new Animated.Value(PANEL_MIN_HEIGHT)).current;
  const lastGestureY = useRef(0);

  Mapbox.setAccessToken(
    'pk.eyJ1IjoiODgxcmQ3d2MiLCJhIjoiY2x6NWczOTc1M3cxczJqcjRseWdtZGNxayJ9.Q7rT9130fic6rc8dNV9kNg'
  );

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: (_, { dy }) => Math.abs(dy) > 10,
    onPanResponderGrant: () => {
      lastGestureY.current = (panelY as any)._value;
    },
    onPanResponderMove: (_, { dy }) => {
      const newY = Math.max(PANEL_MAX_HEIGHT, Math.min(PANEL_MIN_HEIGHT, lastGestureY.current + dy));
      panelY.setValue(newY);
    },
    onPanResponderRelease: (_, { vy }) => {
      const currentY = (panelY as any)._value;
      const midPoint = (PANEL_MIN_HEIGHT + PANEL_MAX_HEIGHT) / 2;

      if (Math.abs(vy) >= 0.5) {
        // If velocity is high enough, move in direction of velocity
        Animated.spring(panelY, {
          toValue: vy > 0 ? PANEL_MIN_HEIGHT : PANEL_MAX_HEIGHT,
          useNativeDriver: false,
          tension: 50,
          friction: 12,
        }).start();
      } else {
        // If velocity is low, snap to nearest position
        Animated.spring(panelY, {
          toValue: currentY > midPoint ? PANEL_MIN_HEIGHT : PANEL_MAX_HEIGHT,
          useNativeDriver: false,
          tension: 50,
          friction: 12,
        }).start();
      }
    },
  });

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

  const handleMapPress = () => {
    setSelectedFacility(null);
    Animated.spring(panelY, {
      toValue: PANEL_MIN_HEIGHT,
      useNativeDriver: false,
      tension: 50,
      friction: 12,
    }).start();
  };

  const expandPanel = () => {
    Animated.spring(panelY, {
      toValue: PANEL_MAX_HEIGHT,
      useNativeDriver: false,
      tension: 50,
      friction: 12,
    }).start();
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        logoEnabled={false}
        compassEnabled
        scaleBarEnabled
        onPress={handleMapPress}
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
            onSelected={() => {
              setSelectedFacility(facility);
              expandPanel();
            }}
          >
            <View className="bg-white rounded-full p-2 shadow-lg border-2 border-blue-500">
              <Text style={{ fontSize: 24 }}>{facility.emoji}</Text>
            </View>
          </PointAnnotation>
        ))}
      </MapView>

      <Animated.View
        {...panResponder.panHandlers}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: Animated.subtract(SCREEN_HEIGHT, panelY),
          backgroundColor: 'white',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          zIndex: 1,
        }}
      >
        <View className="items-center pt-2 pb-4">
          <View className="w-10 h-1 rounded-full bg-gray-300" />
        </View>

        <View className="px-4">
          <View className="flex-row items-center bg-gray-100 rounded-lg p-2 mb-4">
            <Search size={20} className="text-gray-400 mx-2" />
            <TextInput
              className="flex-1 text-base text-gray-800"
              placeholder="Search medical facilities..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              onFocus={expandPanel}
            />
          </View>

          <ScrollView 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: TAB_BAR_HEIGHT }}
          >
            {selectedFacility ? (
              <View>
                <View className="flex-row items-center mb-4">
                  <Text style={{ fontSize: 32 }} className="mr-3">
                    {selectedFacility.emoji}
                  </Text>
                  <View>
                    <Text className="text-xl font-semibold text-gray-900">
                      {selectedFacility.name}
                    </Text>
                    <Text className="text-gray-600">
                      {selectedFacility.type}
                    </Text>
                  </View>
                </View>
                <Text className="text-blue-600 text-lg mb-2">
                  {selectedFacility.distance} away
                </Text>
              </View>
            ) : (
              <View>
                <Text className="text-lg font-semibold text-gray-900 mb-4">
                  Nearby Medical Facilities
                </Text>
                {filteredFacilities.map((facility) => (
                  <TouchableOpacity
                    key={facility.id}
                    className="flex-row items-center bg-gray-50 p-4 rounded-lg mb-2"
                    onPress={() => {
                      setSelectedFacility(facility);
                      expandPanel();
                    }}
                  >
                    <Text style={{ fontSize: 24 }} className="mr-3">
                      {facility.emoji}
                    </Text>
                    <View>
                      <Text className="text-lg font-medium text-gray-900">
                        {facility.name}
                      </Text>
                      <Text className="text-gray-600">
                        {facility.type}
                      </Text>
                      <Text className="text-blue-600">
                        {facility.distance} away
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </ScrollView>
        </View>
      </Animated.View>

      <Slot />
    </View>
  );
}
