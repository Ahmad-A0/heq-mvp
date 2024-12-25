import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Star } from 'lucide-react-native';
import { RatingSubmission } from '../types';
import { BaseModal } from '../../../util/BaseModal';

interface RatingModalProps {
  facilityId: string;
  visible: boolean;
  onClose: () => void;
  onSubmit: (rating: RatingSubmission) => void;
}

export function RatingModal({ facilityId, visible, onClose, onSubmit }: RatingModalProps) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    if (rating === 0) return;

    onSubmit({
      facilityId,
      rating,
      comment: comment.trim() || undefined,
    });

    // Reset form
    setRating(0);
    setComment('');
    onClose();
  };

  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => setRating(index + 1)}
        className="mx-1"
      >
        <Star
          size={32}
          className={index < rating ? 'text-yellow-400' : 'text-gray-300'}
          fill={index < rating ? '#FBBF24' : 'none'}
        />
      </TouchableOpacity>
    ));
  };

  return (
    <BaseModal
      visible={visible}
      onClose={onClose}
      title="Rate this Facility"
    >
      <View className="p-4">
        <View className="flex-row justify-center items-center mb-6">
          {renderStars()}
        </View>

        <View className="mb-6">
          <Text className="text-gray-700 text-lg mb-2">Comments (optional)</Text>
          <TextInput
            className="bg-gray-50 rounded-lg p-3 text-gray-800"
            placeholder="Share your experience..."
            multiline
            numberOfLines={4}
            value={comment}
            onChangeText={setComment}
            textAlignVertical="top"
          />
        </View>

        <TouchableOpacity
          className={`p-4 rounded-lg ${
            rating === 0 ? 'bg-gray-300' : 'bg-blue-500'
          }`}
          onPress={handleSubmit}
          disabled={rating === 0}
        >
          <Text className="text-white text-center font-semibold text-lg">
            Submit Rating
          </Text>
        </TouchableOpacity>
      </View>
    </BaseModal>
  );
}