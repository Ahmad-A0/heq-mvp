import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { UserObject } from '../types';
import Icon from '../../../util/Icon';
import { icons } from 'lucide-react-native';

interface RecordImportProps {
  user: UserObject;
}

type ImportMethod = 'provider' | 'scan' | 'upload';
type ImportStatus = 'pending' | 'processing' | 'completed' | 'failed';

interface ImportHistory {
  id: string;
  method: ImportMethod;
  source: string;
  date: string;
  status: ImportStatus;
  details: string;
}

export const RecordImport: React.FC<RecordImportProps> = ({ user }) => {
  const [selectedMethod, setSelectedMethod] = useState<ImportMethod | null>(null);
  
  // Mock import history - in real app this would come from backend
  const importHistory: ImportHistory[] = [
    {
      id: '1',
      method: 'provider',
      source: 'Kampala General Hospital',
      date: '2024-02-15T09:30:00Z',
      status: 'completed',
      details: 'Successfully imported 5 records',
    },
    {
      id: '2',
      method: 'scan',
      source: 'Lab Report Scan',
      date: '2024-02-10T14:20:00Z',
      status: 'completed',
      details: 'Blood test results imported',
    },
    {
      id: '3',
      method: 'upload',
      source: 'Medical Records.pdf',
      date: '2024-02-05T11:15:00Z',
      status: 'failed',
      details: 'Invalid file format',
    },
  ];

  const importMethods: Array<{
    id: ImportMethod;
    title: string;
    description: string;
    icon: keyof typeof icons;
  }> = [
    {
      id: 'provider',
      title: 'Connect Provider',
      description: 'Import directly from healthcare providers',
      icon: 'Building',
    },
    {
      id: 'scan',
      title: 'Scan Document',
      description: 'Scan physical documents using camera',
      icon: 'Camera',
    },
    {
      id: 'upload',
      title: 'Upload File',
      description: 'Upload digital health records',
      icon: 'Upload',
    },
  ];

  const getStatusColor = (status: ImportStatus) => {
    switch (status) {
      case 'completed':
        return 'text-green-600';
      case 'failed':
        return 'text-red-600';
      case 'processing':
        return 'text-blue-600';
      default:
        return 'text-gray-600';
    }
  };

  const getStatusIcon = (status: ImportStatus): keyof typeof icons => {
    switch (status) {
      case 'completed':
        return 'Check';
      case 'failed':
        return 'X';
      case 'processing':
        return 'Loader';
      default:
        return 'Clock';
    }
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-4">
        {/* Header */}
        <View className="bg-white rounded-xl p-4 shadow-sm mb-4">
          <Text className="text-xl font-bold text-gray-900">Import Records</Text>
          <Text className="text-gray-500 mt-1">
            Choose a method to import your health records
          </Text>
        </View>

        {/* Import Methods */}
        <View className="mb-6">
          {importMethods.map(method => (
            <TouchableOpacity
              key={method.id}
              onPress={() => setSelectedMethod(method.id)}
              className={`bg-white rounded-lg shadow-sm p-4 mb-3 flex-row items-center ${
                selectedMethod === method.id ? 'border-2 border-blue-500' : ''
              }`}
            >
              <View className="bg-blue-100 rounded-full p-3">
                <Icon name={method.icon} size={24} color="#3B82F6" />
              </View>
              <View className="ml-4 flex-1">
                <Text className="text-lg font-semibold text-gray-900">{method.title}</Text>
                <Text className="text-gray-500">{method.description}</Text>
              </View>
              <Icon name="ChevronRight" size={24} color="#9CA3AF" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Import History */}
        <View className="bg-white rounded-xl p-4 shadow-sm">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-semibold text-gray-900">Import History</Text>
            <TouchableOpacity className="flex-row items-center">
              <Icon name="Filter" size={16} color="#6B7280" />
              <Text className="text-gray-600 ml-1">Filter</Text>
            </TouchableOpacity>
          </View>

          {importHistory.map(item => (
            <View
              key={item.id}
              className="border-b border-gray-100 py-3 last:border-b-0"
            >
              <View className="flex-row justify-between items-start">
                <View className="flex-1">
                  <Text className="font-medium text-gray-900">{item.source}</Text>
                  <Text className="text-gray-500 text-sm mt-1">{item.details}</Text>
                  <Text className="text-gray-400 text-sm mt-1">
                    {new Date(item.date).toLocaleDateString()}
                  </Text>
                </View>
                <View className="flex-row items-center">
                  <Icon 
                    name={getStatusIcon(item.status)} 
                    size={16} 
                    color={item.status === 'completed' ? '#059669' : 
                           item.status === 'failed' ? '#DC2626' : '#3B82F6'} 
                  />
                  <Text className={`ml-1 ${getStatusColor(item.status)}`}>
                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Import Progress Indicator - Show when import is in progress */}
      {selectedMethod && (
        <View className="absolute bottom-6 left-4 right-4 bg-white rounded-lg shadow-lg p-4">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="font-medium text-gray-900">Importing Records...</Text>
            <TouchableOpacity>
              <Icon name="X" size={20} color="#6B7280" />
            </TouchableOpacity>
          </View>
          <View className="bg-gray-200 rounded-full h-2 mb-1">
            <View className="bg-blue-500 rounded-full h-2 w-3/4" />
          </View>
          <Text className="text-gray-500 text-sm">75% Complete</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default RecordImport;