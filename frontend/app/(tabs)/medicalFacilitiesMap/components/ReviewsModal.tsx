import React from 'react';
import { View, Text, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { Rating } from '../types';
import { StarRating } from './StarRating';

interface ReviewsModalProps {
  visible: boolean;
  onClose: () => void;
  ratings: Rating[];
  averageRating: number;
  totalRatings: number;
}

export function ReviewsModal({ 
  visible, 
  onClose, 
  ratings,
  averageRating,
  totalRatings,
}: ReviewsModalProps) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-end">
        <View className="bg-white rounded-t-3xl max-h-[80%]">
          <View className="flex-row justify-between items-center p-4 border-b border-gray-200">
            <View>
              <Text className="text-xl font-semibold">Reviews</Text>
              <View className="flex-row items-center mt-1">
                <StarRating rating={Math.round(averageRating)} size={16} />
                <Text className="text-gray-600 ml-2">
                  {averageRating.toFixed(1)} ({totalRatings} reviews)
                </Text>
              </View>
            </View>
            <TouchableOpacity onPress={onClose}>
              <Text className="text-blue-500 text-lg">Close</Text>
            </TouchableOpacity>
          </View>

          <ScrollView className="p-4">
            {ratings.slice().reverse().map((rating, index) => (
              <View 
                key={index} 
                className="mb-4 pb-4 border-b border-gray-100 last:border-b-0 last:mb-0 last:pb-0"
              >
                <View className="flex-row items-center mb-2">
                  <StarRating rating={rating.rating} size={14} showEmpty={false} />
                  <Text className="text-gray-500 text-sm ml-2">
                    {new Date(rating.createdAt).toLocaleDateString()}
                  </Text>
                </View>
                {rating.comment && (
                  <Text className="text-gray-700">{rating.comment}</Text>
                )}
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}