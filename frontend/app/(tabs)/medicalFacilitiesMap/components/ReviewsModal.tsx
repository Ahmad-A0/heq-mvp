import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Rating } from '../types';
import { StarRating } from './StarRating';
import { BaseModal } from '../../../util/BaseModal';

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
  const title = (
    <View>
      <Text className="text-xl font-semibold">Reviews</Text>
      <View className="flex-row items-center mt-1">
        <StarRating rating={Math.round(averageRating)} size={16} />
        <Text className="text-gray-600 ml-2">
          {averageRating.toFixed(1)} ({totalRatings} reviews)
        </Text>
      </View>
    </View>
  );

  return (
    <BaseModal
      visible={visible}
      onClose={onClose}
      title={title}
      maxHeight="max-h-[80%]"
    >
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
    </BaseModal>
  );
}