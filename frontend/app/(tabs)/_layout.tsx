import { Tabs } from 'expo-router';
import { BlurView } from 'expo-blur';
import { PiggyBank, MapPin, Lock, Vault } from 'lucide-react-native';
import { StyleSheet } from 'react-native';
import tw from 'twrnc';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#2563eb',
                tabBarInactiveTintColor: '#64748b',
                tabBarStyle: {
                    ...tw`mx-4 mb-4 rounded-full bg-white/90 shadow-md border border-gray-100`,
                    position: 'absolute',
                    bottom: 0,
                    height: 65,
                    paddingBottom: 10,
                    paddingTop: 6,
                },
                tabBarLabelStyle: tw`text-xs font-medium`,
                tabBarItemStyle: tw`mx-2`,
                headerShown: false,
                animation: "shift"
            }}
            initialRouteName="healthSavingsAccount"
        >
            <Tabs.Screen
                name="personalHealthVault"
                options={{
                    title: 'Vault',
                    tabBarIcon: ({ color, focused }) => (
                        <Vault
                            size={24}
                            color={color}
                            style={tw`${focused ? 'opacity-100' : 'opacity-70'}`}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="healthSavingsAccount"
                options={{
                    title: 'Savings',
                    tabBarIcon: ({ color, focused }) => (
                        <PiggyBank
                            size={24}
                            color={color}
                            style={tw`${focused ? 'opacity-100' : 'opacity-70'}`}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="medicalFacilitiesMap"
                options={{
                    title: 'Map',
                    tabBarIcon: ({ color, focused }) => (
                        <MapPin
                            size={24}
                            color={color}
                            style={tw`${focused ? 'opacity-100' : 'opacity-70'}`}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
