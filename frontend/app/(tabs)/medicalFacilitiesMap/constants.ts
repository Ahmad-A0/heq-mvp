import { Dimensions, Platform } from 'react-native';
import { Facility } from './types';

export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const TAB_BAR_HEIGHT = Platform.OS === 'ios' ? 85 : 65;
export const PANEL_MIN_HEIGHT = SCREEN_HEIGHT * 0.8;
export const PANEL_MAX_HEIGHT = 100;

export const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiODgxcmQ3d2MiLCJhIjoiY2x6NWczOTc1M3cxczJqcjRseWdtZGNxayJ9.Q7rT9130fic6rc8dNV9kNg';

export const FACILITY_TYPES = [
  'Hospital',
  'Medical Center',
  'Clinic',
  'Specialist',
  'Laboratory'
];

export const SAMPLE_FACILITIES: Facility[] = [
  {
    id: '1',
    name: 'City General Hospital',
    coordinates: [-122.4194, 37.7749],
    type: 'Hospital',
    distance: '0.8 miles',
    emoji: '🏥',
    address: '123 Healthcare Ave, San Francisco, CA 94103',
    contactPhone: '(415) 555-0123',
    contactEmail: 'appointments@citygeneral.com',
    ratings: [
      {
        userId: 'user1',
        rating: 4,
        comment: 'Great service and professional staff',
        createdAt: '2024-02-19T10:00:00Z'
      },
      {
        userId: 'user2',
        rating: 5,
        comment: 'Excellent facilities and care',
        createdAt: '2024-02-18T15:30:00Z'
      }
    ],
    averageRating: 4.5,
    totalRatings: 2,
    availableSlots: [
      {
        date: '2024-02-20',
        slots: [
          { time: '09:00', available: true },
          { time: '10:00', available: true },
          { time: '11:00', available: false },
          { time: '14:00', available: true },
          { time: '15:00', available: true }
        ]
      },
      {
        date: '2024-02-21',
        slots: [
          { time: '09:00', available: true },
          { time: '10:00', available: false },
          { time: '11:00', available: true },
          { time: '14:00', available: true },
          { time: '15:00', available: true }
        ]
      }
    ],
    services: [
      {
        id: 'gen-checkup',
        name: 'General Checkup',
        duration: 30,
        price: 150
      },
      {
        id: 'spec-consult',
        name: 'Specialist Consultation',
        duration: 45,
        price: 200
      }
    ]
  },
  {
    id: '2',
    name: 'Downtown Medical Center',
    coordinates: [-122.4124, 37.7884],
    type: 'Medical Center',
    distance: '1.2 miles',
    emoji: '⚕️',
    address: '456 Medical Plaza, San Francisco, CA 94102',
    contactPhone: '(415) 555-0456',
    contactEmail: 'care@downtownmed.com',
    ratings: [
      {
        userId: 'user3',
        rating: 5,
        comment: 'Modern facilities and caring doctors',
        createdAt: '2024-02-17T09:15:00Z'
      }
    ],
    averageRating: 5,
    totalRatings: 1,
    availableSlots: [
      {
        date: '2024-02-20',
        slots: [
          { time: '09:30', available: true },
          { time: '10:30', available: false },
          { time: '11:30', available: true },
          { time: '14:30', available: true }
        ]
      },
      {
        date: '2024-02-21',
        slots: [
          { time: '09:30', available: true },
          { time: '10:30', available: true },
          { time: '11:30', available: true },
          { time: '14:30', available: false }
        ]
      }
    ],
    services: [
      {
        id: 'urgent-care',
        name: 'Urgent Care Visit',
        duration: 60,
        price: 175
      },
      {
        id: 'phys-exam',
        name: 'Physical Examination',
        duration: 45,
        price: 125
      }
    ]
  },
  {
    id: '3',
    name: 'Community Health Clinic',
    coordinates: [-122.4094, 37.7854],
    type: 'Clinic',
    distance: '1.5 miles',
    emoji: '🏪',
    address: '789 Community Lane, San Francisco, CA 94109',
    contactPhone: '(415) 555-0789',
    contactEmail: 'info@communityclinic.com',
    ratings: [
      {
        userId: 'user4',
        rating: 4,
        comment: 'Friendly staff and reasonable prices',
        createdAt: '2024-02-16T14:20:00Z'
      },
      {
        userId: 'user5',
        rating: 3,
        comment: 'Good service but long wait times',
        createdAt: '2024-02-15T16:45:00Z'
      }
    ],
    averageRating: 3.5,
    totalRatings: 2,
    availableSlots: [
      {
        date: '2024-02-20',
        slots: [
          { time: '10:00', available: true },
          { time: '11:00', available: true },
          { time: '13:00', available: true },
          { time: '14:00', available: false }
        ]
      },
      {
        date: '2024-02-21',
        slots: [
          { time: '10:00', available: true },
          { time: '11:00', available: false },
          { time: '13:00', available: true },
          { time: '14:00', available: true }
        ]
      }
    ],
    services: [
      {
        id: 'basic-checkup',
        name: 'Basic Health Checkup',
        duration: 30,
        price: 75
      },
      {
        id: 'vacc',
        name: 'Vaccination',
        duration: 15,
        price: 50
      }
    ]
  }
];