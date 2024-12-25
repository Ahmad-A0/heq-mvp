export interface Facility {
  id: string;
  name: string;
  coordinates: [number, number];
  type: string;
  distance: string;
  emoji: string;
  address: string;
  contactPhone: string;
  contactEmail: string;
  availableSlots: {
    date: string;
    slots: {
      time: string;
      available: boolean;
    }[];
  }[];
  services: {
    id: string;
    name: string;
    duration: number;
    price: number;
  }[];
}

export interface UserLocation {
  latitude: number;
  longitude: number;
}

export interface FacilitySearchFilters {
  query: string;
  facilityType: string | null;
  location: string | null;
}

export interface BookingDetails {
  facilityId: string;
  date: string;
  timeSlot: string;
  serviceId: string;
  patientName: string;
  contactInfo: string;
}