import React, { ReactNode } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';

interface BaseModalProps {
  visible: boolean;
  onClose: () => void;
  title: string | ReactNode;
  children: ReactNode;
  maxHeight?: string; // Optional max height class
}

export function BaseModal({ 
  visible, 
  onClose, 
  title,
  children,
  maxHeight = 'max-h-[100%]'
}: BaseModalProps) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-end">
        <View className={`bg-white rounded-t-3xl ${maxHeight}`}>
          <View className="flex-row justify-between items-center p-4 border-b border-gray-200">
            {typeof title === 'string' ? (
              <Text className="text-lg font-semibold">{title}</Text>
            ) : (
              title
            )}
            <TouchableOpacity onPress={onClose}>
              <Text className="text-blue-500 text-lg">Close</Text>
            </TouchableOpacity>
          </View>
          {children}
        </View>
      </View>
    </Modal>
  );
}