import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { currentUser } from './constants';
import Dashboard from './components/Dashboard';
import HealthRecords from './components/HealthRecords';
import DataSharing from './components/DataSharing';
import RecordImport from './components/RecordImport';

type Screen = 'dashboard' | 'records' | 'sharing' | 'import' | 'settings';

interface ScreenConfig {
    title: string;
    component: React.ReactNode;
}

export default function PersonalHealthVault() {
    const [activeScreen, setActiveScreen] = useState<Screen>('dashboard');

    const screens: Record<Screen, ScreenConfig> = {
        dashboard: {
            title: 'Personal Health Vault',
            component: <Dashboard user={currentUser} onNavigate={setActiveScreen} />
        },
        records: {
            title: 'Health Records',
            component: <HealthRecords user={currentUser} />
        },
        sharing: {
            title: 'Data Sharing',
            component: <DataSharing user={currentUser} />
        },
        import: {
            title: 'Import Records',
            component: <RecordImport user={currentUser} />
        },
        settings: {
            title: 'Settings',
            component: <Dashboard user={currentUser} onNavigate={setActiveScreen} />
        }
    };

    const currentScreen = screens[activeScreen];

    return (
        <View className="flex-1 bg-gray-50">
            {/* Header */}
            <View className="bg-white shadow-sm">
                <View className="flex-row items-center p-4">
                    {activeScreen !== 'dashboard' && (
                        <TouchableOpacity
                            onPress={() => setActiveScreen('dashboard')}
                            className="mr-3"
                        >
                            <ArrowLeft size={24} color="#4B5563" />
                        </TouchableOpacity>
                    )}
                    <Text className="text-xl font-bold text-gray-900">
                        {currentScreen.title}
                    </Text>
                </View>
            </View>

            {/* Content Area */}
            <View className="flex-1">
                {currentScreen.component}
            </View>

            <View className='my-8' />
        </View>
    );
}