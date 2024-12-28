import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface Country {
    code: string;
    name: string;
    flag: string;
    dialCode: string;
}

const COUNTRIES: Country[] = [
    { code: 'KE', name: 'Kenya', flag: '🇰🇪', dialCode: '+254' },
    { code: 'UG', name: 'Uganda', flag: '🇺🇬', dialCode: '+256' },
    { code: 'GB', name: 'United Kingdom', flag: '🇬🇧', dialCode: '+44' },
    { code: 'NG', name: 'Nigeria', flag: '🇳🇬', dialCode: '+234' },
    { code: 'ZA', name: 'South Africa', flag: '🇿🇦', dialCode: '+27' },
    { code: 'TZ', name: 'Tanzania', flag: '🇹🇿', dialCode: '+255' },
];

interface PhoneNumberInputProps {
    value: string;
    onChange: (phoneNumber: string) => void;
    onCountryChange?: (country: Country) => void;
}

export default function PhoneNumberInput({
    value,
    onChange,
    onCountryChange,
}: PhoneNumberInputProps) {
    const [selectedCountry, setSelectedCountry] = useState<Country>(
        COUNTRIES[0]
    );
    const [phoneNumber, setPhoneNumber] = useState(value);

    const handleCountryChange = (countryCode: string) => {
        const country = COUNTRIES.find((c) => c.code === countryCode);
        if (country) {
            setSelectedCountry(country);
            onCountryChange?.(country);
        }
    };

    const handlePhoneNumberChange = (text: string) => {
        const cleanedNumber = text.replace(/[^0-9]/g, '');
        setPhoneNumber(cleanedNumber);
        onChange(`${selectedCountry.dialCode}${cleanedNumber}`);
    };

    return (
        <View className="flex-row items-center">
            <View className="mr-2 w-32">
                <Picker
                    className="h-12 w-full"
                    selectedValue={selectedCountry.code}
                    onValueChange={handleCountryChange}
                >
                    {COUNTRIES.map((country) => (
                        <Picker.Item
                            key={country.code}
                            label={`${country.flag} ${country.dialCode}`}
                            value={country.code}
                        />
                    ))}
                </Picker>
            </View>

            <TextInput
                className="flex-1 h-12 px-4 border border-gray-300 rounded-lg"
                placeholder="Phone number"
                placeholderTextColor="#9CA3AF"
                value={phoneNumber}
                onChangeText={handlePhoneNumberChange}
                keyboardType="phone-pad"
                maxLength={15}
            />
        </View>
    );
}
