import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useFacility } from '../context/FacilityContext';
import { UserLocation } from '../types';
import { Cloud, AlertCircle } from 'lucide-react-native';

interface WeatherData {
  temp: number;
  condition: string;
  alert?: string;
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
      
      const weatherData: WeatherData = {
        temp: Math.round(data.main.temp),
        condition: data.weather[0].main,
      };

      if (data.weather[0].id >= 200 && data.weather[0].id < 800) {
        weatherData.alert = data.weather[0].description;
        setAlertVisible(true);
      }

      setWeather(weatherData);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  return (
    <TouchableOpacity className={className} onPress={() => alert && alert(weather?.alert)}>
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
          <Cloud size={24} color="#3B82F6" className="mr-2" />
          <Text className="text-base">
            {weather.temp}°C | {weather.condition}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
}