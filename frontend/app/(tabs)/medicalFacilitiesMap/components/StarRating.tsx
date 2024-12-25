import React from 'react';
import { View } from 'react-native';
import { Star } from 'lucide-react-native';

interface StarRatingProps {
  rating: number;
  size?: number;
  showEmpty?: boolean;
}

export function StarRating({ rating, size = 16, showEmpty = true }: StarRatingProps) {
  const starCount = showEmpty ? 5 : Math.round(rating);
  
  return (
    <View className="flex-row">
      {Array.from({ length: starCount }).map((_, index) => (
        <Star
          key={index}
          size={size}
          className={index < rating ? 'text-yellow-400' : 'text-gray-300'}
          fill={index < rating ? '#FBBF24' : 'none'}
        />
      ))}
    </View>
  );
}