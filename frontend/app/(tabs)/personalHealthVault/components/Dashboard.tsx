import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { UserObject, Encounter, Investigation, Treatment } from '../types';
import {
    Settings,
    FileText,
    Share2,
    Download,
    Shield,
    Stethoscope,
    Pill,
    ChevronUp,
    ChevronDown,
    LayoutGrid,
} from 'lucide-react-native';

interface DashboardProps {
    user: UserObject;
    onNavigate?: (tab: 'records' | 'sharing' | 'import' | 'settings') => void;
}

interface ActivityItem {
    id: string;
    title: string;
    date: string;
    type: 'encounter' | 'investigation' | 'treatment';
    details: {
        label: string;
        value: string;
    }[];
}

const getActivityDate = (
    item: Encounter | Investigation | Treatment
): string => {
    if ('encounter_date' in item) return item.encounter_date;
    if ('performed_date' in item) return item.performed_date;
    if ('start_date' in item) return item.start_date;
    return '';
};

const createActivityItem = (
    item: Encounter | Investigation | Treatment
): ActivityItem => {
    if ('encounter_type' in item) {
        return {
            id: item.encounter_id,
            title: `${item.encounter_type} Visit`,
            date: item.encounter_date,
            type: 'encounter',
            details: [
                { label: 'Provider', value: item.provider_id },
                { label: 'Chief Complaint', value: item.chief_complaint },
                { label: 'Priority', value: item.visit_priority },
                { label: 'Payment Type', value: item.payment_type },
                {
                    label: 'Cost',
                    value: `USh ${item.costAnalytics.payment_received}`,
                },
            ],
        };
    }
    if ('test_category' in item) {
        return {
            id: item.investigation_id,
            title: `${item.test_category} Test`,
            date: item.performed_date,
            type: 'investigation',
            details: [
                { label: 'Test Code', value: item.test_code },
                {
                    label: 'Result',
                    value: `${item.result_value} ${item.result_unit}`,
                },
                { label: 'Status', value: item.result_status },
                { label: 'Reference Range', value: item.reference_range },
            ],
        };
    }
    return {
        id: item.treatment_id,
        title: `${item.treatment_type} Treatment`,
        date: item.start_date,
        type: 'treatment',
        details: [
            {
                label: 'Medication',
                value: item.medicationDetails.drug_brand_name,
            },
            { label: 'Dosage', value: item.dosage },
            { label: 'Frequency', value: item.frequency },
            { label: 'Duration', value: item.duration },
            { label: 'Status', value: item.status },
        ],
    };
};

export const Dashboard: React.FC<DashboardProps> = ({ user, onNavigate }) => {
    const [expandedActivity, setExpandedActivity] = useState<string | null>(
        null
    );

    const recentActivity = [
        ...user.encounters,
        ...user.investigations,
        ...user.treatments,
    ]
        .sort((a, b) => {
            const dateA = new Date(getActivityDate(a));
            const dateB = new Date(getActivityDate(b));
            return dateB.getTime() - dateA.getTime();
        })
        .slice(0, 5)
        .map(createActivityItem);

    const healthSnapshot = [
        ['Total Encounters', user.encounters.length],
        [
            'Active Treatments',
            user.treatments.filter((t) => t.status === 'Active').length,
        ],
        [
            'Pending Investigations',
            user.investigations.filter((i) => i.result_status === 'Pending')
                .length,
        ],
        [
            'Upcoming Follow-ups',
            user.outcomes.filter(
                (o) => new Date(o.next_followup_date) > new Date()
            ).length,
        ],
    ];

    const quickActions = [
        {
            title: 'Health Records',
            icon: FileText,
            color: 'bg-blue-500',
            tab: 'records' as const,
        },
        {
            title: 'Data Sharing',
            icon: Share2,
            color: 'bg-green-500',
            tab: 'sharing' as const,
        },
        {
            title: 'Import Records',
            icon: Download,
            color: 'bg-purple-500',
            tab: 'import' as const,
        },
        {
            title: 'Diagnoses',
            icon: Stethoscope,
            color: 'bg-red-500',
            tab: 'records' as const,
        },
    ];

    const getActivityIcon = (
        type: 'encounter' | 'investigation' | 'treatment'
    ) => {
        switch (type) {
            case 'encounter':
                return Stethoscope;
            case 'investigation':
                return FileText;
            case 'treatment':
                return Pill;
        }
    };

    return (
        <ScrollView className="flex-1 bg-gray-50">
            {/* Profile Section */}
            <View className="bg-white p-6 shadow-sm">
                <View className="flex-row items-center justify-between">
                    <View>
                        <Text className="text-2xl font-bold text-gray-900">
                            Welcome Back
                        </Text>
                        <Text className="text-gray-600 mt-1">
                            Patient ID: {user.demographics.patient_id}
                        </Text>
                    </View>
                    <TouchableOpacity
                        className="bg-blue-500 rounded-full p-3"
                        onPress={() => onNavigate?.('settings')}
                    >
                        <Settings size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Quick Actions */}
            <View className="flex-row flex-wrap p-4">
                {quickActions.map((action) => (
                    <TouchableOpacity
                        key={action.title}
                        className="w-1/2 p-2"
                        onPress={() => onNavigate?.(action.tab)}
                    >
                        <View className={`${action.color} p-4 rounded-xl`}>
                            <action.icon size={24} color="white" />
                            <Text className="text-white font-medium mt-2">
                                {action.title}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Health Snapshot */}
            <View className="bg-white mx-4 rounded-xl p-4 shadow-sm">
                <Text className="text-xl font-bold text-gray-900 mb-4">
                    Health Snapshot
                </Text>
                <View className="flex-row flex-wrap">
                    {Object.values(healthSnapshot).map(
                        ([name, value], index) => (
                            <View key={index} className="w-1/2 mb-4">
                                <Text className="text-gray-500">
                                    {name}
                                </Text>
                                <Text className="text-2xl font-bold text-gray-900">
                                    {value}
                                </Text>
                            </View>
                        )
                    )}
                </View>
            </View>

            {/* Recent Activity */}
            <View className="bg-white mx-4 mt-4 rounded-xl p-4 shadow-sm mb-6">
                <Text className="text-xl font-bold text-gray-900 mb-4">
                    Recent Activity
                </Text>
                {recentActivity.map((activity) => {
                    const ActivityIcon = getActivityIcon(activity.type);
                    return (
                        <TouchableOpacity
                            key={activity.id}
                            onPress={() =>
                                setExpandedActivity(
                                    expandedActivity === activity.id
                                        ? null
                                        : activity.id
                                )
                            }
                            className="mb-3 last:mb-0"
                        >
                            <View className="flex-row items-center py-2 border-b border-gray-100">
                                <View className="bg-gray-100 rounded-full p-2 mr-3">
                                    <ActivityIcon size={20} color="#4B5563" />
                                </View>
                                <View className="flex-1">
                                    <Text className="font-medium text-gray-900">
                                        {activity.title}
                                    </Text>
                                    <Text className="text-gray-500 text-sm">
                                        {new Date(
                                            activity.date
                                        ).toLocaleDateString()}
                                    </Text>
                                </View>
                                {expandedActivity === activity.id ? (
                                    <ChevronUp size={20} color="#6B7280" />
                                ) : (
                                    <ChevronDown size={20} color="#6B7280" />
                                )}
                            </View>

                            {/* Expanded Details */}
                            {expandedActivity === activity.id && (
                                <View className="bg-gray-50 p-4 rounded-lg mt-2">
                                    {activity.details.map((detail, index) => (
                                        <View
                                            key={index}
                                            className="flex-row justify-between mb-2 last:mb-0"
                                        >
                                            <Text className="text-gray-600">
                                                {detail.label}:
                                            </Text>
                                            <Text className="text-gray-900 font-medium">
                                                {detail.value}
                                            </Text>
                                        </View>
                                    ))}
                                </View>
                            )}
                        </TouchableOpacity>
                    );
                })}
            </View>
        </ScrollView>
    );
};

export default Dashboard;
