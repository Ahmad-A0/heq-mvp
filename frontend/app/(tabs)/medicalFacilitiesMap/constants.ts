import { Dimensions, Platform } from 'react-native';
import { Facility } from './types';
import { ADDITIONAL_1, KENYA_FACILITIES, UGANDA_FACILITIES } from './facilities';

export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const TAB_BAR_HEIGHT = Platform.OS === 'ios' ? 85 : 65;
export const PANEL_MIN_HEIGHT = SCREEN_HEIGHT * 0.8;
export const PANEL_MAX_HEIGHT = 100;

export const MAPBOX_ACCESS_TOKEN =
    'pk.eyJ1IjoiODgxcmQ3d2MiLCJhIjoiY2x6NWczOTc1M3cxczJqcjRseWdtZGNxayJ9.Q7rT9130fic6rc8dNV9kNg';

export const FACILITY_TYPES = [
    'Hospital',
    'Medical Center',
    'Clinic',
    'Laboratory',
    'Pharmacy',
    'Dispensary',
    'Health Centre',
];

export const SAMPLE_FACILITIES: Facility[] = [
    ...KENYA_FACILITIES,
    ...UGANDA_FACILITIES,
    ...ADDITIONAL_1
];
