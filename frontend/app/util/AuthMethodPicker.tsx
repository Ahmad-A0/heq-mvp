import { TouchableOpacity, Text, View } from 'react-native';

interface AuthMethodPickerProps {
  usePhone: boolean;
  setUsePhone: (usePhone: boolean) => void;
}

export default function AuthMethodPicker({ usePhone, setUsePhone }: AuthMethodPickerProps) {
  return (
    <View className="flex-row justify-center mb-4">
      <TouchableOpacity
        className={`px-4 py-2 rounded-l-lg ${
          usePhone ? 'bg-blue-600' : 'bg-gray-200'
        }`}
        onPress={() => setUsePhone(true)}
      >
        <Text className={`font-medium ${
          usePhone ? 'text-white' : 'text-gray-700'
        }`}>Phone</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className={`px-4 py-2 rounded-r-lg ${
          !usePhone ? 'bg-blue-600' : 'bg-gray-200'
        }`}
        onPress={() => setUsePhone(false)}
      >
        <Text className={`font-medium ${
          !usePhone ? 'text-white' : 'text-gray-700'
        }`}>Email</Text>
      </TouchableOpacity>
    </View>
  );
}