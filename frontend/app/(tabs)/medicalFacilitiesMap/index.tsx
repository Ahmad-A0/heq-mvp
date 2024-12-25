import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { MapPin, Clock, Building } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { SearchFilters } from './components/SearchFilters';
import { StarRating } from './components/StarRating';
import { TAB_BAR_HEIGHT } from './constants';
import { useFacility } from './context/FacilityContext';
import { Facility } from './types';

export default function FacilityListScreen() {
    const {
        facilities,
        searchFilters,
        onSearchFiltersChange,
        onSearchFocus,
        onFacilitySelect,
    } = useFacility();
    const router = useRouter();

    const handleFacilitySelect = (facility: Facility) => {
        onFacilitySelect(facility);
        router.push({
            pathname: '/medicalFacilitiesMap/facility',
            params: { selectedFacility: JSON.stringify(facility) },
        });
    };

    return (
        <ScrollView
            className="flex-1"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: TAB_BAR_HEIGHT,
            }}
        >
            <SearchFilters
                filters={searchFilters}
                onFiltersChange={onSearchFiltersChange}
                onFocus={onSearchFocus}
            />

            <View>
                <Text className="text-lg font-semibold text-gray-900 mb-4">
                    Nearby Medical Facilities
                </Text>
                {facilities.map((facility) => (
                    <TouchableOpacity
                        key={facility.id}
                        className="bg-white shadow-sm rounded-lg p-4 mb-3"
                        onPress={() => handleFacilitySelect(facility)}
                    >
                        {/* Header with emoji and name */}
                        <View className="flex-row items-start mb-3">
                            <Text style={{ fontSize: 24 }} className="mr-3">
                                {facility.emoji}
                            </Text>
                            <View className="flex-1">
                                <Text className="text-lg font-medium text-gray-900 mb-1">
                                    {facility.name}
                                </Text>
                                <View className="flex-row items-center">
                                    <StarRating
                                        rating={Math.round(
                                            facility.averageRating
                                        )}
                                        size={14}
                                    />
                                    <Text className="text-gray-600 ml-2">
                                        ({facility.totalRatings})
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <View className="flex-row items-center mb-2">
                            {/* <Building size={16} className="text-gray-600" /> */}
                            <Text className="text-gray-600 text-sm mr-1 ml-0">
                                {facility.type} - 
                            </Text>
                            <Text className="text-blue-600">
                                {facility.distance} away
                            </Text>
                        </View>

                        {/* Address */}
                        <View className="flex-row items-center mb-2">
                            <MapPin size={16} className="text-gray-600" />
                            <Text
                                className="text-gray-600 flex-1 ml-2"
                                numberOfLines={1}
                            >
                                {facility.address}
                            </Text>
                        </View>

                        {/* Available slots */}
                        <View className="flex-row items-center">
                            <Clock size={16} className="text-gray-600" />
                            <Text className="text-gray-600 ml-2">
                                {facility.availableSlots.reduce(
                                    (count, slot) =>
                                        count +
                                        slot.slots.filter((s) => s.available)
                                            .length,
                                    0
                                )}{' '}
                                slots available
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
}
