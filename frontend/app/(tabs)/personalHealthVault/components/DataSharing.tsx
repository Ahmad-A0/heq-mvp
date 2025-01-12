import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { UserObject, Provider_Registry, Consent_Management } from '../types';
import {
  User,
  CalendarCheck,
  Stethoscope,
  Pill,
  FileText,
  UserCheck,
  UserPlus,
  Clock,
  Link
} from 'lucide-react-native';

interface DataSharingProps {
  user: UserObject;
}

type DataCategory = 'demographics' | 'encounters' | 'diagnoses' | 'treatments' | 'investigations';
type AccessDuration = '24h' | '7d' | '30d' | 'custom';

interface ProviderAccess extends Provider_Registry {
  consent?: Consent_Management;
  accessCategories: DataCategory[];
}

export const DataSharing: React.FC<DataSharingProps> = ({ user }) => {
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);

  const providers: ProviderAccess[] = user.providerRegistry.map(provider => ({
    ...provider,
    consent: user.consentManagement.find(c => c.provider_id === provider.provider_id),
    accessCategories: ['demographics', 'encounters'],
  }));

  const dataCategories: Array<{
    id: DataCategory;
    label: string;
    icon: React.FC<any>;
  }> = [
    { id: 'demographics', label: 'Demographics', icon: User },
    { id: 'encounters', label: 'Encounters', icon: CalendarCheck },
    { id: 'diagnoses', label: 'Diagnoses', icon: Stethoscope },
    { id: 'treatments', label: 'Treatments', icon: Pill },
    { id: 'investigations', label: 'Investigations', icon: FileText },
  ];

  const accessDurations: Array<{ id: AccessDuration; label: string }> = [
    { id: '24h', label: '24 Hours' },
    { id: '7d', label: '7 Days' },
    { id: '30d', label: '30 Days' },
    { id: 'custom', label: 'Custom' },
  ];

  const renderProviderCard = (provider: ProviderAccess) => {
    const isSelected = selectedProvider === provider.provider_id;
    const hasActiveConsent = provider.consent && new Date(provider.consent.expiration_date) > new Date();

    return (
      <TouchableOpacity
        key={provider.provider_id}
        onPress={() => setSelectedProvider(isSelected ? null : provider.provider_id)}
        className={`bg-white rounded-lg shadow-sm mb-3 overflow-hidden ${
          isSelected ? 'border-2 border-blue-500' : ''
        }`}
      >
        <View className="p-4">
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center">
              <View className="bg-blue-100 rounded-full p-2">
                <UserCheck size={24} color="#3B82F6" />
              </View>
              <View className="ml-3">
                <Text className="text-lg font-semibold text-gray-900">{provider.name}</Text>
                <Text className="text-gray-500 text-sm">Last access: {new Date(provider.last_access).toLocaleDateString()}</Text>
              </View>
            </View>
            <Switch
              value={hasActiveConsent}
              onValueChange={() => {/* Toggle consent */}}
            />
          </View>

          {isSelected && (
            <View className="mt-4">
              <Text className="text-gray-700 font-medium mb-2">Data Access</Text>
              <View className="flex-row flex-wrap">
                {dataCategories.map(category => {
                  const CategoryIcon = category.icon;
                  return (
                    <TouchableOpacity
                      key={category.id}
                      className="bg-gray-100 rounded-full px-3 py-1 mr-2 mb-2 flex-row items-center"
                    >
                      <CategoryIcon size={16} color="#4B5563" />
                      <Text className="text-gray-700 ml-1">{category.label}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>

              <Text className="text-gray-700 font-medium mt-4 mb-2">Access Duration</Text>
              <View className="flex-row flex-wrap">
                {accessDurations.map(duration => (
                  <TouchableOpacity
                    key={duration.id}
                    className="bg-gray-100 rounded-full px-4 py-2 mr-2 mb-2"
                  >
                    <Text className="text-gray-700">{duration.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              <View className="mt-4">
                <TouchableOpacity
                  className="bg-blue-500 rounded-lg py-2 px-4 flex-row items-center justify-center"
                  onPress={() => {/* Generate sharing link */}}
                >
                  <Link size={20} color="white" />
                  <Text className="text-white font-medium ml-2">Generate Sharing Link</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>

        {/* Access Events */}
        {isSelected && (
          <View className="bg-gray-50 p-4 border-t border-gray-200">
            <Text className="text-gray-700 font-medium mb-2">Recent Access Events</Text>
            {user.dataProvenance
              .filter(event => event.modified_by === provider.provider_id)
              .slice(0, 3)
              .map((event, index) => (
                <View key={index} className="flex-row items-center py-2">
                  <Clock size={16} color="#6B7280" />
                  <Text className="text-gray-600 ml-2">
                    Accessed {event.source} on {new Date(event.modification_date).toLocaleDateString()}
                  </Text>
                </View>
              ))}
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-4">
        {/* Header */}
        <View className="bg-white rounded-xl p-4 shadow-sm mb-4">
          <Text className="text-xl font-bold text-gray-900">Connected Providers</Text>
          <Text className="text-gray-500 mt-1">
            Manage your data sharing preferences
          </Text>
        </View>

        {/* Add New Provider Button */}
        <TouchableOpacity
          className="bg-white rounded-lg shadow-sm p-4 mb-4 flex-row items-center justify-center"
          onPress={() => {/* Open add provider modal */}}
        >
          <UserPlus size={24} color="#3B82F6" />
          <Text className="text-blue-500 font-medium ml-2">Add New Provider</Text>
        </TouchableOpacity>

        {/* Provider List */}
        {providers.map(renderProviderCard)}
      </View>
    </ScrollView>
  );
};

export default DataSharing;