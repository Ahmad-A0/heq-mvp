import '../global.css';
import { Stack, Redirect, Slot, useRouter } from 'expo-router';
import { SessionProvider, useSession } from './context/ctx';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function RootLayout() {
    const router = useRouter();

    React.useEffect(() => {
        router.replace('/auth/login');
    });

    return (
        <SessionProvider>
            <Stack>
                <Stack.Screen name="auth" options={{ headerShown: false }} />
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
        </SessionProvider>
    );
}
