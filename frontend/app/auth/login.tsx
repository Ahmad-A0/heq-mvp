import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import AuthMethodPicker from '../util/AuthMethodPicker';
import { useRouter } from 'expo-router';
import { useSession } from '../context/ctx';
import '../../global.css';
import PhoneNumberInput from '../util/PhoneNumberInput';

export default function Login() {
    const router = useRouter();
    const { signIn } = useSession();
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [usePhone, setUsePhone] = useState(true);

    return (
        <View className="flex-1 justify-center items-center bg-white p-6">
            <View className="w-full max-w-sm">
                <View className="mb-8">
                    <Text className="text-3xl font-bold text-center text-gray-900 mb-2">
                        Welcome Back
                    </Text>
                    <Text className="text-center text-gray-500">
                        Sign in to access your health account
                    </Text>
                </View>

                <View className="mb-8">
                    <AuthMethodPicker
                        usePhone={usePhone}
                        setUsePhone={setUsePhone}
                    />

                    <View className="mb-4">
                        {usePhone ? (
                            <>
                                <Text className="text-gray-700 mb-2">
                                    Phone Number
                                </Text>
                                <PhoneNumberInput
                                    value={phoneNumber}
                                    onChange={setPhoneNumber}
                                />
                            </>
                        ) : (
                            <>
                                <Text className="text-gray-700 mb-2">
                                    Email Address
                                </Text>
                                <View className="h-12 px-4 border border-gray-300 rounded-lg justify-center">
                                    <TextInput
                                        className="flex-1"
                                        placeholder="Enter your email"
                                        placeholderTextColor="#9CA3AF"
                                        value={email}
                                        onChangeText={setEmail}
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                    />
                                </View>
                            </>
                        )}
                    </View>

                    <View>
                        <Text className="text-gray-700 mb-2">Password</Text>
                        <View className="h-12 px-4 border border-gray-300 rounded-lg justify-center">
                            <TextInput
                                className="flex-1"
                                placeholder="Enter your password"
                                placeholderTextColor="#9CA3AF"
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry
                            />
                        </View>
                    </View>
                </View>

                <TouchableOpacity
                    className="h-12 bg-blue-600 rounded-lg items-center justify-center mb-8"
                    onPress={() => {
                        signIn(usePhone ? email : phoneNumber, password);
                        router.replace(
                            '/(tabs)/personalHealthVault' as string
                        );
                    }}
                >
                    <Text className="text-white font-semibold">Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    className="h-12 items-center justify-center"
                    onPress={() => router.push('/auth/signup')}
                >
                    <Text className="text-blue-600">
                        Don't have an account? Sign up
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
