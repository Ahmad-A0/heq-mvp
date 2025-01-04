import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Filter } from 'lucide-react-native';
import { SearchBar } from './SearchBar';
import { FacilitySearchFilters } from '../types';
import { FACILITY_TYPES } from '../constants';

interface SearchFiltersProps {
  filters: FacilitySearchFilters;
  onFiltersChange: (filters: FacilitySearchFilters) => void;
  onFocus: () => void;
}

export function SearchFilters({ filters, onFiltersChange, onFocus }: SearchFiltersProps) {
  const [showFilters, setShowFilters] = useState(false);

  const handleTypeSelect = (type: string | null) => {
    onFiltersChange({
      ...filters,
      facilityType: filters.facilityType === type ? null : type,
    });
  };

  return (
    <View className="">
      <View className="flex-row items-stretch gap-2 my-2">
        <View className="flex-1">
          <SearchBar
            value={filters.query}
            onChangeText={(text) => onFiltersChange({ ...filters, query: text })}
            onFocus={onFocus}
          />
        </View>
        <TouchableOpacity
          className={`justify-center px-3 rounded-lg ${
            showFilters ? 'bg-blue-500' : 'bg-gray-100'
          }`}
          onPress={() => setShowFilters(!showFilters)}
        >
          <Filter
            size={20}
            className={showFilters ? 'text-white' : 'text-gray-600'}
          />
        </TouchableOpacity>
      </View>

      {showFilters && (
        <View className="bg-white rounded-lg shadow-sm mt-2">
          <View className="p-4">
            <Text className="text-lg font-semibold mb-3">Facility Type</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="flex-row"
            >
              {FACILITY_TYPES.map((type) => (
                <TouchableOpacity
                  key={type}
                  className={`px-4 py-2 rounded-full mr-2 ${
                    filters.facilityType === type
                      ? 'bg-blue-500'
                      : 'bg-gray-100'
                  }`}
                  onPress={() => handleTypeSelect(type)}
                >
                  <Text
                    className={
                      filters.facilityType === type
                        ? 'text-white'
                        : 'text-gray-800'
                    }
                  >
                    {type}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      )}
    </View>
  );
}