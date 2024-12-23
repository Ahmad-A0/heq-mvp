import { Tabs } from 'expo-router';
import { BlurView } from 'expo-blur';
import { PiggyBank, MapPin, Lock } from 'lucide-react-native';
import { StyleSheet } from 'react-native';

export default function TabLayout() {
    const focusedStyling = 'text-2xl font-bold text-blue-600';
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: 'blue',
                // tabBarBackground: () => (
                //     <BlurView
                //         tint="light"
                //         intensity={100}
                //         style={StyleSheet.absoluteFillObject}
                //     />
                // ),
                animation: "shift",
            }}
            initialRouteName="healthSavingsAccount"
        >
            <Tabs.Screen
                name="personalHealthVault"
                options={{
                    title: 'Vault',
                    tabBarIcon: ({ color, focused }) => (
                        <Lock
                            size={28}
                            color={color}
                            className={focused ? focusedStyling : ''}
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
                            size={28}
                            color={color}
                            className={focused ? focusedStyling : ''}
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
                            size={28}
                            color={color}
                            className={focused ? focusedStyling : ''}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
