import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { UserObject } from '../types';
import {
  Search,
  History,
  ArrowDown,
  ArrowUp,
  Plus,
  Stethoscope,
  TestTubes,
  Pill,
  Image as ImageIcon,
  ClipboardList,
  DollarSign
} from 'lucide-react-native';

interface HealthRecordsProps {
  user: UserObject;
}

type RecordCategory = 'diagnoses' | 'lab' | 'medication' | 'imaging' | 'clinical' | 'cost';
type SortOrder = 'asc' | 'desc';

export const HealthRecords: React.FC<HealthRecordsProps> = ({ user }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<RecordCategory>('diagnoses');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

  const categories = [
    { id: 'diagnoses' as const, label: 'Diagnoses', icon: Stethoscope },
    { id: 'lab' as const, label: 'Lab Results', icon: TestTubes },
    { id: 'medication' as const, label: 'Medications', icon: Pill },
    { id: 'imaging' as const, label: 'Imaging', icon: ImageIcon },
    { id: 'clinical' as const, label: 'Clinical Notes', icon: ClipboardList },
    { id: 'cost' as const, label: 'Costs', icon: DollarSign },
  ];

  const getCategoryData = (category: RecordCategory) => {
    switch (category) {
      case 'diagnoses':
        return user.diagnoses;
      case 'lab':
        return user.investigations.filter(inv => inv.test_category === 'Blood Test' || inv.test_category === 'Lab');
      case 'medication':
        return user.treatments.filter(t => t.treatment_type === 'Medication');
      case 'imaging':
        return user.investigations.filter(inv => inv.test_category === 'Imaging' || inv.test_category === 'X-Ray');
      case 'clinical':
        return user.encounters;
      case 'cost':
        return user.encounters.map(e => e.costAnalytics);
      default:
        return [];
    }
  };

  const renderRecord = (record: any) => {
    let title = '';
    let date = '';
    let details = '';
    let colloquial = '';

    if ('diagnosis_code' in record) {
      colloquial = record.diagnosis_code == "J45" ? "Asthma (J45)" : "Infectious gastroenteritis and colitis (A09)"
      // title = `Diagnosis: ${record.diagnosis_code}`;
      title = `Diagnosis: ${colloquial}`;
      date = record.onset_date;
      details = `Type: ${record.diagnosis_type} | Severity: ${record.severity} | Certainty: ${record.certainty}`;
    } else if ('test_category' in record) {
      title = `${record.test_category}`;
      date = record.performed_date;
      details = `Result: ${record.result_value} ${record.result_unit}`;
    } else if ('treatment_type' in record) {
      title = record.medicationDetails?.drug_brand_name || record.treatment_type;
      date = record.start_date;
      details = `${record.dosage} - ${record.frequency}`;
    } else if ('encounter_type' in record) {
      title = record.encounter_type;
      date = record.encounter_date;
      details = record.chief_complaint;
    } else if ('procedure_cost' in record) {
      title = 'Cost Summary';
      date = record.payment_date;
      details = `Total: USh ${record.payment_received}`;
    }

    return (
      <View className="bg-white p-4 rounded-lg shadow-sm mb-2">
        <Text className="text-lg font-semibold text-gray-900">{title}</Text>
        <Text className="text-gray-600">{details}</Text>
        <View className="flex-row justify-between items-center mt-2">
          <Text className="text-gray-500 text-sm">
            {new Date(date).toLocaleDateString()}
          </Text>
          <TouchableOpacity 
            className="flex-row items-center"
            onPress={() => {/* Show version history */}}
          >
            <History size={16} color="#6B7280" />
            <Text className="text-gray-500 text-sm ml-1">History</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const filteredData = getCategoryData(selectedCategory)
    .filter(record => {
      const searchLower = searchQuery.toLowerCase();
      return Object.values(record).some(value => 
        value && typeof value === 'string' && value.toLowerCase().includes(searchLower)
      );
    })
    .sort((a: any, b: any) => {
      const dateA = new Date(a.onset_date || a.performed_date || a.start_date || a.encounter_date || a.payment_date);
      const dateB = new Date(b.onset_date || b.performed_date || b.start_date || b.encounter_date || b.payment_date);
      return sortOrder === 'desc' ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime();
    });

  return (
    <ScrollView className="flex-1 bg-gray-50">
      {/* Search Bar */}
      <View className="p-4">
        <View className="bg-white rounded-lg flex-row items-center px-4 py-2">
          <Search size={20} color="#9CA3AF" />
          <TextInput
            className="flex-1 ml-2 text-gray-900"
            placeholder="Search records..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* Category Tabs */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        className="px-4"
      >
        {categories.map(category => {
          const CategoryIcon = category.icon;
          return (
            <TouchableOpacity
              key={category.id}
              onPress={() => setSelectedCategory(category.id)}
              className={`mr-2 px-4 py-2 rounded-full flex-row items-center ${
                selectedCategory === category.id ? 'bg-blue-500' : 'bg-gray-200'
              }`}
            >
              <CategoryIcon 
                size={16} 
                color={selectedCategory === category.id ? 'white' : '#4B5563'} 
              />
              <Text
                className={`ml-2 ${
                  selectedCategory === category.id ? 'text-white' : 'text-gray-600'
                }`}
              >
                {category.label}
              </Text>
            </TouchableOpacity>
          );
        })}
        <View className="w-4" />
      </ScrollView>

      {/* Sort Control */}
      <View className="flex-row justify-between items-center px-4 py-2">
        <Text className="text-gray-600">
          {filteredData.length} Records
        </Text>
        <TouchableOpacity
          onPress={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
          className="flex-row items-center"
        >
          {sortOrder === 'desc' ? (
            <ArrowDown size={16} color="#4B5563" />
          ) : (
            <ArrowUp size={16} color="#4B5563" />
          )}
          <Text className="text-gray-600 ml-1">
            {sortOrder === 'desc' ? 'Newest First' : 'Oldest First'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Records List */}
      <View className="p-4">
        {filteredData.map((record, index) => (
          <View key={index}>
            {renderRecord(record)}
          </View>
        ))}
      </View>

      {/* Add Record FAB */}
      {/* <TouchableOpacity className="absolute bottom-6 right-6 bg-blue-500 w-14 h-14 rounded-full items-center justify-center shadow-lg" onPress={() => Open add record modal} > <Plus size={24} color="white" /> </TouchableOpacity> */}
    </ScrollView>
  );
};

export default HealthRecords;