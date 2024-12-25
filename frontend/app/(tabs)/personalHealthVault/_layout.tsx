import { View, Text, ScrollView } from 'react-native';

export default function PersonalHealthVault() {
    return (
        <ScrollView className="flex-1 bg-gray-50">
            <View className="p-6 my-6">
                <View className="bg-white rounded-xl p-6 shadow-sm">
                    <Text className="text-2xl font-bold text-gray-900">
                        Personal Health Vault
                    </Text>
                    <Text className="text-gray-500 mt-1">
                        Your secure health information storage
                    </Text>
                </View>

                <View className="my-4">
                    <Text className="text-xl font-semibold text-gray-900">
                        Health Records
                    </Text>
                    
                    {[
                        {
                            title: 'Medical History',
                            date: 'Last updated Dec 1, 2023',
                            icon: '📋',
                        },
                        {
                            title: 'Prescriptions',
                            date: 'Last updated Dec 5, 2023',
                            icon: '💊',
                        },
                        {
                            title: 'Lab Results',
                            date: 'Last updated Dec 10, 2023',
                            icon: '🔬',
                        },
                        {
                            title: 'Immunizations',
                            date: 'Last updated Nov 28, 2023',
                            icon: '💉',
                        },
                    ].map((record, i) => (
                        <View key={i} className="bg-white p-4 rounded-lg shadow-sm flex-row items-center my-1">
                            <Text className="text-2xl mr-3">{record.icon}</Text>
                            <View>
                                <Text className="text-gray-900 font-medium">
                                    {record.title}
                                </Text>
                                <Text className="text-gray-500 text-sm mt-1">
                                    {record.date}
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}