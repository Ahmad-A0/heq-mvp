import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { Facility, BookingDetails } from '../types';

interface BookingModalProps {
  facility: Facility;
  visible: boolean;
  onClose: () => void;
  onSubmit: (bookingDetails: BookingDetails) => void;
}

export function BookingModal({ facility, visible, onClose, onSubmit }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [patientName, setPatientName] = useState('');
  const [contactInfo, setContactInfo] = useState('');

  const resetForm = () => {
    setStep(1);
    setSelectedDate('');
    setSelectedTime('');
    setSelectedService('');
    setPatientName('');
    setContactInfo('');
  };

  const handleSubmit = () => {
    onSubmit({
      facilityId: facility.id,
      date: selectedDate,
      timeSlot: selectedTime,
      serviceId: selectedService,
      patientName,
      contactInfo,
    });
    resetForm();
    onClose();
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <View className="p-4">
            <Text className="text-xl font-semibold mb-4">Select Date</Text>
            <ScrollView className="max-h-64">
              {facility.availableSlots.map((slot) => (
                <TouchableOpacity
                  key={slot.date}
                  className={`p-4 border rounded-lg mb-2 ${
                    selectedDate === slot.date ? 'bg-blue-100 border-blue-500' : 'border-gray-200'
                  }`}
                  onPress={() => setSelectedDate(slot.date)}
                >
                  <Text className="text-lg">
                    {new Date(slot.date).toLocaleDateString()}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        );

      case 2:
        const dateSlots = facility.availableSlots.find(
          (slot) => slot.date === selectedDate
        )?.slots || [];

        return (
          <View className="p-4">
            <Text className="text-xl font-semibold mb-4">Select Time</Text>
            <ScrollView className="max-h-64">
              {dateSlots.map((slot) => (
                <TouchableOpacity
                  key={slot.time}
                  className={`p-4 border rounded-lg mb-2 ${
                    !slot.available
                      ? 'bg-gray-100 opacity-50'
                      : selectedTime === slot.time
                      ? 'bg-blue-100 border-blue-500'
                      : 'border-gray-200'
                  }`}
                  onPress={() => slot.available && setSelectedTime(slot.time)}
                  disabled={!slot.available}
                >
                  <Text className="text-lg">{slot.time}</Text>
                  {!slot.available && (
                    <Text className="text-sm text-gray-500">Not available</Text>
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        );

      case 3:
        return (
          <View className="p-4">
            <Text className="text-xl font-semibold mb-4">Select Service</Text>
            <ScrollView className="max-h-64">
              {facility.services.map((service) => (
                <TouchableOpacity
                  key={service.id}
                  className={`p-4 border rounded-lg mb-2 ${
                    selectedService === service.id
                      ? 'bg-blue-100 border-blue-500'
                      : 'border-gray-200'
                  }`}
                  onPress={() => setSelectedService(service.id)}
                >
                  <Text className="text-lg font-medium">{service.name}</Text>
                  <Text className="text-gray-600">
                    Duration: {service.duration} minutes
                  </Text>
                  <Text className="text-gray-600">
                    Price: ${service.price}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        );

      case 4:
        return (
          <View className="p-4">
            <Text className="text-xl font-semibold mb-4">Confirm Booking</Text>
            <View className="bg-gray-50 p-4 rounded-lg mb-4">
              <Text className="text-lg mb-2">
                {facility.name}
              </Text>
              <Text className="text-gray-600 mb-1">
                Date: {new Date(selectedDate).toLocaleDateString()}
              </Text>
              <Text className="text-gray-600 mb-1">
                Time: {selectedTime}
              </Text>
              <Text className="text-gray-600 mb-1">
                Service: {facility.services.find(s => s.id === selectedService)?.name}
              </Text>
            </View>
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-end">
        <View className="bg-white rounded-t-3xl">
          <View className="flex-row justify-between items-center p-4 border-b border-gray-200">
            <Text className="text-xl font-semibold">
              Book Appointment - Step {step}/4
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Text className="text-blue-500 text-lg">Close</Text>
            </TouchableOpacity>
          </View>

          {renderStep()}

          <View className="flex-row justify-between p-4 border-t border-gray-200">
            {step > 1 && (
              <TouchableOpacity
                className="px-6 py-3 bg-gray-200 rounded-lg"
                onPress={() => setStep(step - 1)}
              >
                <Text className="text-gray-800">Back</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              className="px-6 py-3 bg-blue-500 rounded-lg ml-auto"
              onPress={() => {
                if (step < 4) {
                  setStep(step + 1);
                } else {
                  handleSubmit();
                }
              }}
            >
              <Text className="text-white">
                {step === 4 ? 'Confirm Booking' : 'Next'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}