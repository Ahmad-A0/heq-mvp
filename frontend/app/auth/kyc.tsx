import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useSession } from '../context/ctx';
import { useState } from 'react';

export default function KYC() {
    const router = useRouter();
    const { completeKyc } = useSession();
    const [idUploaded, setIdUploaded] = useState(false);
    const [addressUploaded, setAddressUploaded] = useState(false);

    return (
        <View className="flex-1 justify-center items-center bg-white p-6">
            <View className="w-full max-w-sm mb-8">
                <View className="mb-2">
                    <Text className="text-3xl font-bold text-center text-gray-900 mb-2">
                        Verify Identity
                    </Text>
                    <Text className="text-center text-gray-500 mb-2">
                        We need to verify your identity to comply with healthcare regulations
                    </Text>
                </View>

                <View className="mb-4">
                    <View className="mb-4">
                        <Text className="text-gray-700 mb-2">Government ID</Text>
                        <TouchableOpacity 
                            className={`h-32 border-2 border-dashed rounded-lg items-center justify-center ${
                                idUploaded ? 'border-green-500 bg-green-50' : 'border-gray-300'
                            }`}
                            onPress={() => setIdUploaded(true)}
                        >
                            {idUploaded ? (
                                <View className="items-center mb-2">
                                    <Text className="text-green-600">✓ Document Uploaded</Text>
                                </View>
                            ) : (
                                <Text className="text-gray-500">Upload ID Document</Text>
                            )}
                        </TouchableOpacity>
                    </View>

                    <View className="mb-4">
                        <Text className="text-gray-700 mb-2">Proof of Address</Text>
                        <TouchableOpacity 
                            className={`h-32 border-2 border-dashed rounded-lg items-center justify-center ${
                                addressUploaded ? 'border-green-500 bg-green-50' : 'border-gray-300'
                            }`}
                            onPress={() => setAddressUploaded(true)}
                        >
                            {addressUploaded ? (
                                <View className="items-center mb-2">
                                    <Text className="text-green-600">✓ Document Uploaded</Text>
                                </View>
                            ) : (
                                <Text className="text-gray-500">Upload Address Document</Text>
                            )}
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity
                    className={`h-12 rounded-lg items-center justify-center ${
                        idUploaded && addressUploaded ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    disabled={!idUploaded || !addressUploaded}
                    onPress={() => {
                        completeKyc();
                        router.replace('/(tabs)/healthSavingsAccount');
                    }}
                >
                    <Text className={`font-semibold ${
                        idUploaded && addressUploaded ? 'text-white' : 'text-gray-500'
                    }`}>
                        Complete Verification
                    </Text>
                </TouchableOpacity>

                <Text className="text-center text-gray-500 text-sm mb-2">
                    Your documents are encrypted and securely stored
                </Text>
            </View>
        </View>
    );
}