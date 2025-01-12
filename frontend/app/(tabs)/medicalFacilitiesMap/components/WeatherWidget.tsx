import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useFacility } from '../context/FacilityContext';
import { UserLocation } from '../types';
import {
    Cloud,
    AlertCircle,
    Sun,
    CloudRain,
    CloudSnow,
    CloudLightning,
} from 'lucide-react-native';

interface WeatherData {
    temp: number;
    feelsLike: number;
    condition: string;
    humidity: number;
    windSpeed: number;
    alerts?: string[];
}

interface WeatherWidgetProps {
    userLocation: UserLocation | null;
    className?: string;
}

export function WeatherWidget({ userLocation, className }: WeatherWidgetProps) {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [alertVisible, setAlertVisible] = useState(false);

    useEffect(() => {
        if (userLocation) {
            fetchWeather(userLocation.latitude, userLocation.longitude);
        }
    }, [userLocation]);

    const fetchWeather = async (lat: number, lon: number) => {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=34f123866423555abc4c56a78ab3240c&units=metric`
            );
            const data = await response.json();
            console.info(data);

            const feelsLike = Math.round(data.main.feels_like);
            const weatherData: WeatherData = {
                temp: Math.round(data.main.temp),
                feelsLike: feelsLike,
                condition: data.weather[0].main,
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                alerts: [],
            };

            // Set weather condition alerts
            if (data.weather[0].id >= 200 && data.weather[0].id < 800) {
                weatherData.alerts?.push(data.weather[0].description);
                setAlertVisible(true);
            }

            // Set temperature alerts based on feels_like temperature
            if (feelsLike >= 25 && feelsLike <= 32) {
                weatherData.alerts?.push('Awareness - Possible fatigue with prolonged exposure to heat');
                setAlertVisible(true);
            } else if (feelsLike > 32 && feelsLike <= 39) {
                weatherData.alerts?.push('Caution - Heat cramps and heat exhaustion possible');
                setAlertVisible(true);
            } else if (feelsLike > 39) {
                weatherData.alerts?.push('Extreme Caution - Heatstroke possible with prolonged exposure to heat');
                setAlertVisible(true);
            }

            setWeather(weatherData);
        } catch (error) {
            console.error('Error fetching weather:', error);
        }
    };

    const getWeatherIcon = (condition: string, className?: string) => {
        switch (condition) {
            case 'Clear':
                return <Sun size={24} color="#FFD700" className={className} />;
            case 'Clouds':
                return (
                    <Cloud size={24} color="#9CB4CC" className={className} />
                );
            case 'Rain':
                return (
                    <CloudRain
                        size={24}
                        color="#3B82F6"
                        className={className}
                    />
                );
            case 'Snow':
                return (
                    <CloudSnow
                        size={24}
                        color="#E0F2F1"
                        className={className}
                    />
                );
            case 'Thunderstorm':
                return (
                    <CloudLightning
                        size={24}
                        color="#A855F7"
                        className={className}
                    />
                );
            default:
                return (
                    <Cloud size={24} color="#3B82F6" className={className} />
                );
        }
    };

    return (
        <TouchableOpacity
            className={className}
            onPress={() => alertVisible && alert(weather?.alerts?.join('\n'))}
        >
            {weather && (
                <View className="bg-white rounded-lg p-3 shadow-md flex-row items-center">
                    {alertVisible && (
                        <TouchableOpacity
                            className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1"
                            onPress={() => setAlertVisible(false)}
                        >
                            <AlertCircle size={16} color="white" />
                        </TouchableOpacity>
                    )}
                    {getWeatherIcon(weather.condition)}
                    <View className="ml-3">
                        <Text className="text-base">
                            {weather.temp}°C | {weather.condition}
                        </Text>
                        {weather.feelsLike != weather.temp ? (
                            <Text className="text-xs text-gray-500">
                                Feels like: {weather.feelsLike}°C
                            </Text>
                        ) : null}
                        <Text className="text-xs text-gray-500">
                            Wind: {weather.windSpeed} m/s
                        </Text>
                        <Text className="text-xs text-gray-500">
                            Humidity: {weather.humidity}%
                        </Text>
                    </View>
                </View>
            )}
        </TouchableOpacity>
    );
}
