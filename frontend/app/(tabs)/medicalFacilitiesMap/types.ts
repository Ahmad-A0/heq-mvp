export interface Rating {
  userId: string;
  rating: number;
  comment?: string;
  createdAt: string;
}

export interface Facility {
  id: string;
  name: string;
  coordinates: [number, number];
  type: string;
  levelOfCare: string;
  distance: string;
  emoji: string;
  address: string;
  contactPhone: string;
  contactEmail: string;
  ratings: Rating[];
  averageRating: number;
  totalRatings: number;
  openingHours: {
    day: string;
    hours: string;
  }[];
  tags: string[];
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
  doctors?: {
    id: string;
    name: string;
    specialty: string;
    available: boolean;
  }[];
  specialists?: {
    id: string;
    name: string;
    specialty: string;
    available: boolean;
  }[];
  diagnosticTests?: {
    id: string;
    name: string;
    price: number;
    turnaroundTime: string;
  }[];
  medications?: {
    id: string;
    name: string;
    price: number;
    inStock: boolean;
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

export interface RatingSubmission {
  facilityId: string;
  rating: number;
  comment?: string;
}