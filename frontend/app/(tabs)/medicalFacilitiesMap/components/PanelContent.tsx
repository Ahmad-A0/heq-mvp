import { View, Text, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import { Phone, Mail, MapPin, Calendar, ArrowLeft } from 'lucide-react-native';
import { Facility, FacilitySearchFilters, BookingDetails } from '../types';
import { SearchFilters } from './SearchFilters';
import { TAB_BAR_HEIGHT } from '../constants';
import { BookingModal } from './BookingModal';
import { useState } from 'react';

interface PanelContentProps {
  selectedFacility: Facility | null;
  facilities: Facility[];
  searchFilters: FacilitySearchFilters;
  onSearchFiltersChange: (filters: FacilitySearchFilters) => void;
  onSearchFocus: () => void;
  onFacilitySelect: (facility: Facility) => void;
}

export function PanelContent({
  selectedFacility,
  facilities,
  searchFilters,
  onSearchFiltersChange,
  onSearchFocus,
  onFacilitySelect,
}: PanelContentProps) {
  return (
    <ScrollView 
      className="flex-1"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: TAB_BAR_HEIGHT }}
    >
      <SearchFilters
        filters={searchFilters}
        onFiltersChange={onSearchFiltersChange}
        onFocus={onSearchFocus}
      />

      {selectedFacility ? (
        <FacilityDetails facility={selectedFacility} />
      ) : (
        <FacilityList 
          facilities={facilities} 
          onFacilitySelect={onFacilitySelect} 
        />
      )}
    </ScrollView>
  );
}

interface FacilityDetailsProps {
  facility: Facility;
}

function FacilityDetails({ facility }: FacilityDetailsProps) {
  const [bookingModalVisible, setBookingModalVisible] = useState(false);

  const handleBooking = (bookingDetails: BookingDetails) => {
    // In a real app, this would make an API call to create the booking
    console.log('Booking details:', bookingDetails);
  };

  return (
    <View>
      <View className="flex-row items-center mb-4">
        <Text style={{ fontSize: 32 }} className="mr-3">
          {facility.emoji}
        </Text>
        <View className="flex-1">
          <Text className="text-xl font-semibold text-gray-900">
            {facility.name}
          </Text>
          <Text className="text-gray-600">
            {facility.type}
          </Text>
        </View>
      </View>

      <View className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <View className="flex-row items-center mb-3">
          <MapPin size={20} className="text-gray-600 mr-2" />
          <Text className="text-gray-800 flex-1">{facility.address}</Text>
          <Text className="text-blue-600 ml-2">{facility.distance} away</Text>
        </View>

        <TouchableOpacity className="flex-row items-center mb-3">
          <Phone size={20} className="text-gray-600 mr-2" />
          <Text className="text-blue-600">{facility.contactPhone}</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center">
          <Mail size={20} className="text-gray-600 mr-2" />
          <Text className="text-blue-600">{facility.contactEmail}</Text>
        </TouchableOpacity>
      </View>

      <View className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <Text className="text-lg font-semibold mb-3">Available Services</Text>
        {facility.services.map((service) => (
          <View
            key={service.id}
            className="flex-row justify-between items-center mb-2 last:mb-0"
          >
            <View>
              <Text className="text-gray-800 font-medium">{service.name}</Text>
              <Text className="text-gray-600">
                {service.duration} minutes
              </Text>
            </View>
            <Text className="text-gray-800">${service.price}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity
        className="bg-blue-500 rounded-lg p-4 flex-row justify-center items-center"
        onPress={() => setBookingModalVisible(true)}
      >
        <Calendar size={20} className="text-white mr-2" />
        <Text className="text-white font-semibold text-lg">
          Book Appointment
        </Text>
      </TouchableOpacity>

      <BookingModal
        facility={facility}
        visible={bookingModalVisible}
        onClose={() => setBookingModalVisible(false)}
        onSubmit={handleBooking}
      />
    </View>
  );
}

interface FacilityListProps {
  facilities: Facility[];
  onFacilitySelect: (facility: Facility) => void;
}

function FacilityList({ facilities, onFacilitySelect }: FacilityListProps) {
  return (
    <View>
      <Text className="text-lg font-semibold text-gray-900 mb-4">
        Nearby Medical Facilities
      </Text>
      {facilities.map((facility) => (
        <TouchableOpacity
          key={facility.id}
          className="bg-white shadow-sm rounded-lg p-4 mb-3"
          onPress={() => onFacilitySelect(facility)}
        >
          <View className="flex-row items-center mb-2">
            <Text style={{ fontSize: 24 }} className="mr-3">
              {facility.emoji}
            </Text>
            <View className="flex-1">
              <Text className="text-lg font-medium text-gray-900">
                {facility.name}
              </Text>
              <Text className="text-gray-600">
                {facility.type}
              </Text>
            </View>
            <Text className="text-blue-600">
              {facility.distance} away
            </Text>
          </View>

          <View className="flex-row items-center">
            <MapPin size={16} className="text-gray-600 mr-1" />
            <Text className="text-gray-600 flex-1">{facility.address}</Text>
          </View>

          <View className="flex-row mt-2">
            <Text className="text-gray-600">
              {facility.availableSlots.reduce(
                (count, slot) =>
                  count + slot.slots.filter((s) => s.available).length,
                0
              )}{' '}
              slots available
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}