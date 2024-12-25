import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { PointAnnotation } from '@rnmapbox/maps';
import { MapPin, Clock, Phone } from 'lucide-react-native';
import { Facility } from '../types';

interface MarkerWithInfoWindowProps {
  facility: Facility;
  onSelect: (facility: Facility) => void;
}

export function MarkerWithInfoWindow({ facility, onSelect }: MarkerWithInfoWindowProps) {
  const [showInfo, setShowInfo] = useState(false);

  const handleSelect = () => {
    setShowInfo(true);
  };

  const handleInfoPress = () => {
    onSelect(facility);
    setShowInfo(false);
  };

  return (
    <PointAnnotation
      key={facility.id}
      id={facility.id}
      coordinate={facility.coordinates}
      onSelected={handleSelect}
      onDeselected={() => setShowInfo(false)}
    >
      <View className="items-center">
        {showInfo && (
          <TouchableOpacity
            onPress={handleInfoPress}
            className="bg-white rounded-lg shadow-lg p-3 mb-2 w-48"
          >
            <View className="flex-row items-center mb-2">
              <Text style={{ fontSize: 20 }} className="mr-2">
                {facility.emoji}
              </Text>
              <View className="flex-1">
                <Text className="font-medium text-gray-900" numberOfLines={1}>
                  {facility.name}
                </Text>
                <Text className="text-gray-600 text-sm">{facility.type}</Text>
              </View>
            </View>

            <View className="flex-row items-center mb-1">
              <MapPin size={14} className="text-gray-600 mr-1" />
              <Text className="text-gray-600 text-sm flex-1" numberOfLines={1}>
                {facility.address}
              </Text>
            </View>

            <View className="flex-row items-center mb-1">
              <Phone size={14} className="text-gray-600 mr-1" />
              <Text className="text-gray-600 text-sm">
                {facility.contactPhone}
              </Text>
            </View>

            <View className="flex-row items-center">
              <Clock size={14} className="text-gray-600 mr-1" />
              <Text className="text-gray-600 text-sm">
                {facility.availableSlots.reduce(
                  (count, slot) =>
                    count + slot.slots.filter((s) => s.available).length,
                  0
                )}{' '}
                slots available
              </Text>
            </View>

            <Text className="text-blue-500 text-sm text-center mt-2">
              Tap for details & booking
            </Text>
          </TouchableOpacity>
        )}

        <View 
          className={`bg-white rounded-full p-2 shadow-lg border-2 ${
            showInfo ? 'border-blue-500' : 'border-gray-300'
          }`}
        >
          <Text style={{ fontSize: 24 }}>{facility.emoji}</Text>
        </View>
      </View>
    </PointAnnotation>
  );
}