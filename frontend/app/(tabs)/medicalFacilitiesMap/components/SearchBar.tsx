import { View, TextInput } from 'react-native';
import { Search } from 'lucide-react-native';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  onFocus: () => void;
}

export function SearchBar({ value, onChangeText, onFocus }: SearchBarProps) {
  return (
    <View className="flex-row items-center bg-white rounded-lg p-2 shadow-sm">
      <Search size={20} className="text-gray-400" />
      <TextInput
        className="flex-1 text-base text-gray-800 mx-2"
        placeholder="Search medical facilities..."
        value={value}
        onChangeText={onChangeText}
        onFocus={onFocus}
      />
    </View>
  );
}