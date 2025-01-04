import { View, Text, ScrollView } from 'react-native';

export default function HealthSavingsAccount() {
    const isUganda = true;
    const currency = !isUganda ? "KSh" : "USh"

    return (
        <ScrollView className="flex-1 bg-gray-50">
            <View className="p-6 my-6">
                <View className="bg-white rounded-xl p-6 shadow-sm">
                    <Text className="text-2xl font-bold text-gray-900">
                        Health Savings Account
                    </Text>
                    <Text className="text-gray-500 mt-1">
                        Current Balance
                    </Text>
                    <Text className="text-3xl font-bold text-blue-600 mt-2">
                        {currency} 2,450.00
                    </Text>
                </View>

                <View className="my-4">
                    <Text className="text-xl font-semibold text-gray-900">
                        Recent Transactions
                    </Text>
                    {[1, 2, 3].map((i) => (
                        <View key={i} className="bg-white p-4 rounded-lg shadow-sm my-1">
                            <Text className="text-gray-900 font-medium">
                                Medical Checkup
                            </Text>
                            <Text className="text-gray-500 text-sm mt-1">
                                Dec {i}, 2024
                            </Text>
                            <Text className="text-blue-600 font-medium mt-2">
                                -{currency} 120.00
                            </Text>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}