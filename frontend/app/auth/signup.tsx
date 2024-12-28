import React, { useState } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useSession } from '../context/ctx';
import PhoneNumberInput from '../util/PhoneNumberInput';

type SignupStep = 'verification' | 'basic' | 'personal' | 'medical' | 'kyc';

export default function Signup() {
    const router = useRouter();
    const { signUp } = useSession();
    const [currentStep, setCurrentStep] = useState<SignupStep>('verification');

    // Verification
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [isVerified, setIsVerified] = useState(false);
    const [useEmail, setUseEmail] = useState(false);

    // Basic Info
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');

    // Personal Details
    const [dateOfBirth, setDateOfBirth] = useState('');

    // Medical Info
    const [insuranceProvider, setInsuranceProvider] = useState('');
    const [insuranceNumber, setInsuranceNumber] = useState('');
    const [emergencyName, setEmergencyName] = useState('');
    const [emergencyRelation, setEmergencyRelation] = useState('');
    const [emergencyPhone, setEmergencyPhone] = useState('');

    // KYC
    const [idUploaded, setIdUploaded] = useState(false);
    const [addressUploaded, setAddressUploaded] = useState(false);

    const handleSendVerification = async () => {
        if (useEmail && !email) {
            alert('Please enter your email address');
            return;
        }
        if (!useEmail && !phoneNumber) {
            alert('Please enter your phone number');
            return;
        }
        
        // TODO: Implement verification code sending
        console.log('Verification code sent to', useEmail ? email : phoneNumber);
    };

    const handleVerifyCode = async () => {
        if (!verificationCode) {
            alert('Please enter the verification code');
            return;
        }
        
        // TODO: Implement verification code validation
        setIsVerified(true);
        setCurrentStep('basic');
        console.log(useEmail ? 'Email' : 'Phone number', 'verified');
    };

    const handleNext = () => {
        switch (currentStep) {
            case 'verification':
                if (!isVerified) {
                    alert('Please verify your phone number first');
                    return;
                }
                setCurrentStep('basic');
                break;
            case 'basic':
                setCurrentStep('personal');
                break;
            case 'personal':
                setCurrentStep('medical');
                break;
            case 'medical':
                setCurrentStep('kyc');
                break;
            case 'kyc':
                signUp({
                    firstName,
                    lastName,
                    email: useEmail ? email : undefined,
                    phone: !useEmail ? phoneNumber : undefined,
                    dateOfBirth,
                    insuranceProvider,
                    insuranceNumber,
                    emergencyContact: {
                        name: emergencyName,
                        relationship: emergencyRelation,
                        phone: emergencyPhone,
                    },
                });
                router.replace('/(tabs)/healthSavingsAccount');
                break;
        }
    };

    const handleBack = () => {
        switch (currentStep) {
            case 'basic':
                setCurrentStep('verification');
                break;
            case 'personal':
                setCurrentStep('basic');
                break;
            case 'medical':
                setCurrentStep('personal');
                break;
            case 'kyc':
                setCurrentStep('medical');
                break;
            default:
                router.back();
                break;
        }
    };

    const renderVerification = () => (
        <>
            <View className="mb-4">
                <Text className="text-3xl font-bold text-center text-gray-900 mb-2">
                    Verify Your {useEmail ? 'Email' : 'Phone'}
                </Text>
                <Text className="text-center text-gray-500 mb-2">
                    We'll send a verification code to your {useEmail ? 'email' : 'phone'}
                </Text>
            </View>

            <View className="mb-4">
                <View className="flex-row justify-center mb-4">
                    <TouchableOpacity
                        className={`px-4 py-2 rounded-l-lg ${
                            useEmail ? 'bg-blue-600' : 'bg-gray-200'
                        }`}
                        onPress={() => setUseEmail(true)}
                    >
                        <Text className={`font-medium ${
                            useEmail ? 'text-white' : 'text-gray-700'
                        }`}>Email</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className={`px-4 py-2 rounded-r-lg ${
                            !useEmail ? 'bg-blue-600' : 'bg-gray-200'
                        }`}
                        onPress={() => setUseEmail(false)}
                    >
                        <Text className={`font-medium ${
                            !useEmail ? 'text-white' : 'text-gray-700'
                        }`}>Phone</Text>
                    </TouchableOpacity>
                </View>

                <View className="mb-4">
                    {useEmail ? (
                        <>
                            <Text className="text-gray-700 mb-2">Email Address</Text>
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
                    ) : (
                        <>
                            <Text className="text-gray-700 mb-2">Phone Number</Text>
                            <PhoneNumberInput
                                value={phoneNumber}
                                onChange={setPhoneNumber}
                            />
                        </>
                    )}
                    <TouchableOpacity
                        className="h-10 bg-blue-600 rounded-lg items-center justify-center mt-2"
                        onPress={handleSendVerification}
                    >
                        <Text className="text-white font-semibold">Send Verification Code</Text>
                    </TouchableOpacity>
                </View>

                {!isVerified && (
                    <View className="mb-4">
                        <Text className="text-gray-700 mb-2">Verification Code</Text>
                        <View className="h-12 px-4 border border-gray-300 rounded-lg justify-center">
                            <TextInput
                                className="flex-1"
                                placeholder="Enter verification code"
                                placeholderTextColor="#9CA3AF"
                                value={verificationCode}
                                onChangeText={setVerificationCode}
                                keyboardType="number-pad"
                            />
                        </View>
                        <TouchableOpacity
                            className="h-10 bg-blue-600 rounded-lg items-center justify-center mt-2"
                            onPress={handleVerifyCode}
                        >
                            <Text className="text-white font-semibold">Verify Code</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </>
    );

    const renderBasicInfo = () => (
        <>
            <View className="mb-4">
                <Text className="text-3xl font-bold text-center text-gray-900 mb-2">
                    Create Account
                </Text>
                <Text className="text-center text-gray-500 mb-2">
                    Let's start with your basic information
                </Text>
            </View>

            <View className="mb-4">
                <View className="mb-4">
                    <Text className="text-gray-700 mb-2">First Name</Text>
                    <View className="h-12 px-4 border border-gray-300 rounded-lg justify-center">
                        <TextInput
                            className="flex-1"
                            placeholder="Enter your first name"
                            placeholderTextColor="#9CA3AF"
                            value={firstName}
                            onChangeText={setFirstName}
                            autoCapitalize="words"
                        />
                    </View>
                </View>

                <View className="mb-4">
                    <Text className="text-gray-700 mb-2">Last Name</Text>
                    <View className="h-12 px-4 border border-gray-300 rounded-lg justify-center">
                        <TextInput
                            className="flex-1"
                            placeholder="Enter your last name"
                            placeholderTextColor="#9CA3AF"
                            value={lastName}
                            onChangeText={setLastName}
                            autoCapitalize="words"
                        />
                    </View>
                </View>

                <View className="mb-4">
                    <Text className="text-gray-700 mb-2">Password</Text>
                    <View className="h-12 px-4 border border-gray-300 rounded-lg justify-center">
                        <TextInput
                            className="flex-1"
                            placeholder="Choose a password"
                            placeholderTextColor="#9CA3AF"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                    </View>
                </View>
            </View>
        </>
    );

    const renderPersonalDetails = () => (
        <>
            <View className="mb-4">
                <Text className="text-3xl font-bold text-center text-gray-900 mb-2">
                    Personal Details
                </Text>
                <Text className="text-center text-gray-500 mb-2">
                    Tell us a bit more about yourself
                </Text>
            </View>

            <View className="mb-4">
                <View className="mb-4">
                    <Text className="text-gray-700 mb-2">Date of Birth</Text>
                    <View className="h-12 px-4 border border-gray-300 rounded-lg justify-center">
                        <TextInput
                            className="flex-1"
                            placeholder="MM/DD/YYYY"
                            placeholderTextColor="#9CA3AF"
                            value={dateOfBirth}
                            onChangeText={setDateOfBirth}
                            keyboardType="numeric"
                        />
                    </View>
                </View>
            </View>
        </>
    );

    const renderMedicalInfo = () => (
        <>
            <View className="mb-4">
                <Text className="text-3xl font-bold text-center text-gray-900 mb-2">
                    Medical Information
                </Text>
                <Text className="text-center text-gray-500 mb-2">
                    Add your insurance and emergency contact details
                </Text>
            </View>

            <View className="mb-4">
                <View className="mb-4">
                    <Text className="text-gray-700 mb-2">Insurance Provider</Text>
                    <View className="h-12 px-4 border border-gray-300 rounded-lg justify-center">
                        <TextInput
                            className="flex-1"
                            placeholder="Enter insurance provider"
                            placeholderTextColor="#9CA3AF"
                            value={insuranceProvider}
                            onChangeText={setInsuranceProvider}
                        />
                    </View>
                </View>

                <View className="mb-4">
                    <Text className="text-gray-700 mb-2">Insurance Number</Text>
                    <View className="h-12 px-4 border border-gray-300 rounded-lg justify-center">
                        <TextInput
                            className="flex-1"
                            placeholder="Enter insurance number"
                            placeholderTextColor="#9CA3AF"
                            value={insuranceNumber}
                            onChangeText={setInsuranceNumber}
                        />
                    </View>
                </View>

                <View className="mb-4">
                    <Text className="text-gray-700 font-medium mb-2">Emergency Contact</Text>
                    <View className="mb-4">
                        <View className="mb-4">
                            <Text className="text-gray-700 mb-2">Name</Text>
                            <View className="h-12 px-4 border border-gray-300 rounded-lg justify-center">
                                <TextInput
                                    className="flex-1"
                                    placeholder="Contact name"
                                    placeholderTextColor="#9CA3AF"
                                    value={emergencyName}
                                    onChangeText={setEmergencyName}
                                />
                            </View>
                        </View>

                        <View className="mb-4">
                            <Text className="text-gray-700 mb-2">Relationship</Text>
                            <View className="h-12 px-4 border border-gray-300 rounded-lg justify-center">
                                <TextInput
                                    className="flex-1"
                                    placeholder="e.g., Spouse, Parent"
                                    placeholderTextColor="#9CA3AF"
                                    value={emergencyRelation}
                                    onChangeText={setEmergencyRelation}
                                />
                            </View>
                        </View>

                        <View className="mb-4">
                            <Text className="text-gray-700 mb-2">Phone Number</Text>
                            <View className="h-12 px-4 border border-gray-300 rounded-lg justify-center">
                                <TextInput
                                    className="flex-1"
                                    placeholder="Contact phone number"
                                    placeholderTextColor="#9CA3AF"
                                    value={emergencyPhone}
                                    onChangeText={setEmergencyPhone}
                                    keyboardType="phone-pad"
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );

    const renderKYC = () => (
        <>
            <View className="mb-4">
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
                            idUploaded
                                ? 'border-green-500 bg-green-50'
                                : 'border-gray-300'
                        }`}
                        onPress={() => setIdUploaded(true)}
                    >
                        {idUploaded ? (
                            <View className="items-center mb-2">
                                <Text className="text-green-600">
                                    ✓ Document Uploaded
                                </Text>
                            </View>
                        ) : (
                            <Text className="text-gray-500">
                                Upload ID Document
                            </Text>
                        )}
                    </TouchableOpacity>
                </View>

                <View className="mb-4">
                    <Text className="text-gray-700 mb-2">Proof of Address</Text>
                    <TouchableOpacity
                        className={`h-32 border-2 border-dashed rounded-lg items-center justify-center ${
                            addressUploaded
                                ? 'border-green-500 bg-green-50'
                                : 'border-gray-300'
                        }`}
                        onPress={() => setAddressUploaded(true)}
                    >
                        {addressUploaded ? (
                            <View className="items-center mb-2">
                                <Text className="text-green-600">
                                    ✓ Document Uploaded
                                </Text>
                            </View>
                        ) : (
                            <Text className="text-gray-500">
                                Upload Address Document
                            </Text>
                        )}
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );

    const renderCurrentStep = () => {
        switch (currentStep) {
            case 'verification':
                return renderVerification();
            case 'basic':
                return renderBasicInfo();
            case 'personal':
                return renderPersonalDetails();
            case 'medical':
                return renderMedicalInfo();
            case 'kyc':
                return renderKYC();
        }
    };

    const getButtonText = () => {
        switch (currentStep) {
            case 'kyc':
                return 'Complete Signup';
            default:
                return 'Continue';
        }
    };

    const isNextDisabled = () => {
        switch (currentStep) {
            case 'verification':
                return !isVerified;
            case 'basic':
                return !firstName || !lastName || !password;
            case 'personal':
                return !dateOfBirth;
            case 'medical':
                return !emergencyName || !emergencyRelation || !emergencyPhone;
            case 'kyc':
                return !idUploaded || !addressUploaded;
            default:
                return false;
        }
    };

    return <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1 bg-white"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
        <ScrollView
            className="flex-1"
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
        >
            <View className="flex-1 px-6 justify-center">
                <View className="w-full max-w-sm mx-auto">
                    {renderCurrentStep()}

                    {currentStep !== 'verification' && (
                        <>
                            <TouchableOpacity
                                className={`h-12 rounded-lg items-center justify-center ${
                                    isNextDisabled() ? 'bg-gray-300' : 'bg-blue-600'
                                }`}
                                onPress={handleNext}
                                disabled={isNextDisabled()}
                            >
                                <Text
                                    className={`font-semibold ${
                                        isNextDisabled()
                                            ? 'text-gray-500'
                                            : 'text-white'
                                    }`}
                                >
                                    {getButtonText()}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                className="h-12 items-center justify-center"
                                onPress={handleBack}
                            >
                                <Text className="text-blue-600">
                                    {currentStep === 'basic'
                                        ? 'Already have an account? Log in'
                                        : 'Back'}
                                </Text>
                            </TouchableOpacity>
                        </>
                    )}

                    <View className="flex-row justify-center mt-2">
                        {['verification', 'basic', 'personal', 'medical', 'kyc'].map((step, index) => (
                            <View
                                key={index}
                                className={`w-2 h-2 rounded-full mx-2 ${
                                    currentStep === step
                                        ? 'bg-blue-600'
                                        : 'bg-gray-300'
                                }`}
                            />
                        ))}
                    </View>
                </View>
            </View>
        </ScrollView>
    </KeyboardAvoidingView>;
}
