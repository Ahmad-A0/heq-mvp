import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Phone, Mail, MapPin, Calendar, ArrowLeft, ChevronRight } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { BookingDetails } from './types';
import { BookingModal } from './components/BookingModal';
import { RatingModal } from './components/RatingModal';
import { ReviewsModal } from './components/ReviewsModal';
import { StarRating } from './components/StarRating';
import { TAB_BAR_HEIGHT } from './constants';
import { useFacility } from './context/FacilityContext';

export default function FacilityDetailsScreen() {
  const router = useRouter();
  const { selectedFacility, onFacilitySelect, onRatingSubmit } = useFacility();
  const [bookingModalVisible, setBookingModalVisible] = useState(false);
  const [ratingModalVisible, setRatingModalVisible] = useState(false);
  const [reviewsModalVisible, setReviewsModalVisible] = useState(false);
  
  if (!selectedFacility) {
    router.back();
    return null;
  }

  const handleBack = () => {
    onFacilitySelect(null);
    router.back();
  };

  const handleBooking = (bookingDetails: BookingDetails) => {
    // In a real app, this would make an API call to create the booking
    console.log('Booking details:', bookingDetails);
  };

  return (
    <ScrollView
      className="flex-1"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: TAB_BAR_HEIGHT }}
    >
      <TouchableOpacity
        onPress={handleBack}
        className="flex-row items-center py-4"
      >
        <ArrowLeft size={24} className="text-blue-500" />
        <Text className="text-blue-500 text-lg ml-3">Back</Text>
      </TouchableOpacity>

      <View>
        <View className="flex-row items-center mb-4">
          <Text style={{ fontSize: 32 }} className="mr-3">
            {selectedFacility.emoji}
          </Text>
          <View className="flex-1">
            <Text className="text-xl font-semibold text-gray-900">
              {selectedFacility.name}
            </Text>
            <Text className="text-gray-600">
              {selectedFacility.type}
            </Text>
          </View>
        </View>

        <View className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <View className="flex-row items-center justify-between mb-2">
            <TouchableOpacity 
              className="flex-row items-center flex-1"
              onPress={() => setReviewsModalVisible(true)}
            >
              <StarRating rating={Math.round(selectedFacility.averageRating)} size={16} />
              <Text className="text-blue-500 ml-2">
                {selectedFacility.averageRating.toFixed(1)} ({selectedFacility.totalRatings} reviews)
              </Text>
              <ChevronRight size={16} className="text-blue-500 ml-1" />
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-blue-100 rounded-lg px-3 py-1"
              onPress={() => setRatingModalVisible(true)}
            >
              <Text className="text-blue-500">Rate</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row items-center mb-3">
            <MapPin size={20} className="text-gray-600 mr-2" />
            <Text className="text-gray-800 flex-1 ml-2">{selectedFacility.address}</Text>
            <Text className="text-blue-600 ml-2">{selectedFacility.distance} away</Text>
          </View>

          <TouchableOpacity className="flex-row items-center mb-3">
            <Phone size={20} className="text-gray-600 mr-2" />
            <Text className="text-blue-600 ml-2">{selectedFacility.contactPhone}</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center">
            <Mail size={20} className="text-gray-600 mr-2" />
            <Text className="text-blue-600 ml-2">{selectedFacility.contactEmail}</Text>
          </TouchableOpacity>
        </View>

        <View className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <Text className="text-lg font-semibold mb-3">Available Services</Text>
          {selectedFacility.services.map((service) => (
            <View
              key={service.id}
              className="flex-row justify-between items-center my-2 last:mb-0"
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
          <Text className="text-white font-semibold text-lg ml-2">
            Book Appointment
          </Text>
        </TouchableOpacity>

        <BookingModal
          facility={selectedFacility}
          visible={bookingModalVisible}
          onClose={() => setBookingModalVisible(false)}
          onSubmit={handleBooking}
        />

        <RatingModal
          facilityId={selectedFacility.id}
          visible={ratingModalVisible}
          onClose={() => setRatingModalVisible(false)}
          onSubmit={onRatingSubmit}
        />

        <ReviewsModal
          visible={reviewsModalVisible}
          onClose={() => setReviewsModalVisible(false)}
          ratings={selectedFacility.ratings}
          averageRating={selectedFacility.averageRating}
          totalRatings={selectedFacility.totalRatings}
        />
      </View>
    </ScrollView>
  );
}