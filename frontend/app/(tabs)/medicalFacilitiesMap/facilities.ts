import { Facility } from './types';

export const FACILITY_TYPES = [
    'Hospital',
    'Medical Center',
    'Clinic',
    'Laboratory',
    'Pharmacy',
    'Dispensary',
    'Health Centre',
];

const example_ratings = (
    number: number
): {
    userId: string;
    rating: number;
    comment: string;
    createdAt: string;
}[] => {
    const examples = [
        {
            userId: 'user1',
            rating: 4,
            comment: 'Conveniently located and provides basic services.',
            createdAt: '2024-02-16T14:20:00Z',
        },
        {
            userId: 'user2',
            rating: 3,
            comment: 'Limited services but helpful staff.',
            createdAt: '2024-02-17T15:00:00Z',
        },
        {
            userId: 'user3',
            rating: 5,
            comment: 'Clean and efficient services, great for emergencies.',
            createdAt: '2024-02-18T10:00:00Z',
        },

        {
            userId: 'user4',
            rating: 5,
            comment: 'Professional staff and comprehensive services.',
            createdAt: '2024-02-17T15:30:00Z',
        },
        {
            userId: 'user5',
            rating: 4,
            comment: 'Friendly staff and quick services.',
            createdAt: '2024-02-18T12:00:00Z',
        },
        {
            userId: 'user6',
            rating: 4,
            comment: 'State-of-the-art equipment and clean facilities.',
            createdAt: '2024-02-19T11:00:00Z',
        },

        {
            userId: 'user19',
            rating: 4,
            comment: 'Convenient for day services and friendly staff.',
            createdAt: '2024-02-25T09:00:00Z',
        },
        {
            userId: 'user20',
            rating: 4,
            comment: 'Clean facilities and affordable services.',
            createdAt: '2024-02-26T11:00:00Z',
        },
        {
            userId: 'user21',
            rating: 4,
            comment: 'Professional doctors and comprehensive care.',
            createdAt: '2024-02-27T12:00:00Z',
        },
    ];
    const ret = [];
    for (let i = 0; i < number; i++) {
        const index = Math.floor(Math.random() * examples.length);
        ret.push(examples[index]);
        examples.splice(index, 1);
    }
    return ret;
};

export const KENYA_FACILITIES: Facility[] = [
    {
        id: 'kibera-hospital',
        name: 'Kibera Hospital',
        coordinates: [36.7881533, -1.306065],
        type: 'Hospital',
        kenya: {
            levelOfCare: 2,
            shaServiceCategories: ['Preventive and Promotive'],
            acceptsSHIF: false,
        },
        distance: '2.8 km',
        emoji: '🏥',
        address: 'Kibera, Nairobi, Kenya',
        contactPhone: '+254 728 545 123',
        contactEmail: 'kiberahc@example.com',
        openingHours: [{ day: 'Monday-Friday', hours: '08:00 - 17:00' }],
        tags: ['Government Facility', 'Outpatient'],
        ratings: [
            {
                userId: 'user1',
                rating: 4,
                comment: 'Conveniently located and provides basic services.',
                createdAt: '2024-02-16T14:20:00Z',
            },
            {
                userId: 'user2',
                rating: 3,
                comment: 'Limited services but helpful staff.',
                createdAt: '2024-02-17T15:00:00Z',
            },
            {
                userId: 'user3',
                rating: 5,
                comment: 'Clean and efficient services, great for emergencies.',
                createdAt: '2024-02-18T10:00:00Z',
            },
        ],
        averageRating: 4,
        totalRatings: 3,
        availableSlots: [
            {
                date: '2024-02-20',
                slots: [
                    { time: '09:00', available: true },
                    { time: '11:00', available: true },
                    { time: '14:00', available: true },
                ],
            },
        ],
        services: [
            {
                id: 'outpatient',
                name: 'Outpatient Services',
                duration: 30,
                price: 0,
            },
        ],
    },
    {
        id: 'prestige-medical',
        name: 'Prestige Medical Services',
        coordinates: [36.7832273, -1.3108311],
        type: 'Medical Center',
        kenya: {
            levelOfCare: 3,
            shaServiceCategories: ['Emergency, Chronic, and Critical'],
            acceptsSHIF: true,
        },
        distance: '3.1 km',
        emoji: '⚕️',
        address: 'Nairobi, Kenya',
        contactPhone: '+254 728 549 832',
        contactEmail: 'prestigemed@example.com',
        openingHours: [{ day: 'Monday-Sunday', hours: '24/7' }],
        tags: [
            '24/7 Service',
            'Emergency Care',
            'Family Planning',
            'Youth Services',
        ],
        ratings: example_ratings(3),
        averageRating: 4.33,
        totalRatings: 3,
        availableSlots: [
            {
                date: '2024-02-20',
                slots: [
                    { time: '09:00', available: true },
                    { time: '11:00', available: true },
                    { time: '14:00', available: true },
                    { time: '16:00', available: true },
                    { time: '20:00', available: true },
                ],
            },
        ],
        services: [
            {
                id: 'emergency',
                name: 'Emergency Care',
                duration: 60,
                price: 2500,
            },
            {
                id: 'family-planning',
                name: 'Family Planning',
                duration: 45,
                price: 1000,
            },
            {
                id: 'minor-surgery',
                name: 'Minor Surgery',
                duration: 90,
                price: 5000,
            },
        ],
    },
    {
        id: 'jagin-hospital-clinic',
        name: 'Jagin Hospital Clinic',
        coordinates: [36.8711623, -1.2525719],
        type: 'Clinic',
        kenya: {
            levelOfCare: 4,
            shaServiceCategories: ['Curative', 'Rehabilitative'],
            acceptsSHIF: true,
        },
        distance: '1.2 km',
        emoji: '🏥',
        address: 'Jagin Hospital Road, Nairobi, Kenya',
        contactPhone: '+254 722 345 678',
        contactEmail: 'jaginhospital@example.com',
        openingHours: [{ day: 'Monday-Sunday', hours: '24/7' }],
        tags: [
            'Referral Hospital',
            'Advanced Medical Care',
            'Specialized Treatments',
        ],
        ratings: [
            {
                userId: 'user7',
                rating: 5,
                comment: 'Exceptional care and state-of-the-art facilities.',
                createdAt: '2024-02-15T14:00:00Z',
            },
            {
                userId: 'user8',
                rating: 4,
                comment: 'Highly skilled doctors and nurses.',
                createdAt: '2024-02-16T16:00:00Z',
            },
            {
                userId: 'user9',
                rating: 4,
                comment: 'Clean and well-maintained facilities.',
                createdAt: '2024-02-17T11:00:00Z',
            },
        ],
        averageRating: 4.33,
        totalRatings: 3,
        availableSlots: [
            {
                date: '2024-02-20',
                slots: [
                    { time: '09:00', available: true },
                    { time: '11:00', available: true },
                    { time: '14:00', available: true },
                    { time: '16:00', available: true },
                ],
            },
        ],
        services: [
            {
                id: 'advanced-diagnostics',
                name: 'Advanced Diagnostic Services',
                duration: 120,
                price: 5000,
            },
            {
                id: 'specialized-surgery',
                name: 'Specialized Surgical Procedures',
                duration: 240,
                price: 25000,
            },
        ],
    },
    {
        id: 'mombasa-coastal-lab',
        name: 'Mombasa Coastal Laboratory',
        coordinates: [39.6572, -4.0342],
        type: 'Laboratory',
        kenya: {
            levelOfCare: 3,
            shaServiceCategories: ['Preventive and Promotive', 'Curative'],
            acceptsSHIF: false,
        },
        distance: '4.3 km',
        emoji: '🔬',
        address: 'Moi Avenue, Mombasa, Kenya',
        contactPhone: '+254 721 234 567',
        contactEmail: 'mombasalab@example.com',
        openingHours: [
            { day: 'Monday-Friday', hours: '07:00 - 20:00' },
            { day: 'Saturday', hours: '08:00 - 16:00' },
        ],
        tags: ['Coastal Region', 'Comprehensive Care', 'Community Health'],
        ratings: example_ratings(3),
        averageRating: 4,
        totalRatings: 3,
        availableSlots: [
            {
                date: '2024-02-20',
                slots: [
                    { time: '09:00', available: true },
                    { time: '11:00', available: true },
                    { time: '14:00', available: true },
                ],
            },
        ],
        services: [
            {
                id: 'general-medicine',
                name: 'General Medical Consultation',
                duration: 45,
                price: 2000,
            },
            {
                id: 'pediatric-care',
                name: 'Pediatric Care',
                duration: 60,
                price: 3000,
            },
        ],
    },
    {
        id: 'dg-peters-pharmacy',
        name: "DG Peter's Pharmacy",
        coordinates: [36.821886, -1.292064],
        type: 'Pharmacy',
        kenya: {
            levelOfCare: 3,
            shaServiceCategories: ['Preventive and Promotive', 'Curative'],
            acceptsSHIF: true,
        },
        distance: '3.5 km',
        emoji: '💊',
        address: 'DG Peters Road, Nairobi, Kenya',
        contactPhone: '+254 727 349 812',
        contactEmail: 'dgpeterspharmacy@example.com',
        openingHours: [{ day: 'Monday-Friday', hours: '07:00 - 19:00' }],
        tags: ['Private', 'Primary Care'],
        ratings: [],
        averageRating: 4,
        totalRatings: 3,
        availableSlots: [
            {
                date: '2024-02-20',
                slots: [
                    { time: '09:00', available: true },
                    { time: '11:00', available: true },
                    { time: '14:00', available: true },
                    { time: '16:00', available: true },
                ],
            },
        ],
        services: [
            {
                id: 'family-planning',
                name: 'Family Planning',
                duration: 30,
                price: 0,
            },
            {
                id: 'general-medical',
                name: 'General Medical Services',
                duration: 45,
                price: 2000,
            },
            {
                id: 'immunizations',
                name: 'Vaccinations',
                duration: 30,
                price: 0,
            },
            {
                id: 'malaria-treatment',
                name: 'Malaria Treatment',
                duration: 60,
                price: 1000,
            },
        ],
    },
    {
        id: 'cheborge-dispensary',
        name: 'Cheborge Dispensary',
        coordinates: [36.12929, 0.3690917],
        type: 'Dispensary',
        kenya: {
            levelOfCare: 2,
            shaServiceCategories: ['Preventive and Promotive'],
            acceptsSHIF: false,
        },
        distance: '2.2 km',
        emoji: '🏥',
        address: 'Cheborge Road, Nakuru, Kenya',
        contactPhone: '+254 721 985 654',
        contactEmail: 'cheborgedispensary@example.com',
        openingHours: [
            { day: 'Monday-Thursday', hours: '08:00 - 17:00' },
            { day: 'Friday', hours: '08:00 - 15:00' },
        ],
        tags: ['Private', 'Outpatient Services'],
        ratings: example_ratings(3),
        averageRating: 3,
        totalRatings: 3,
        availableSlots: [
            {
                date: '2024-02-20',
                slots: [
                    { time: '09:00', available: true },
                    { time: '11:00', available: true },
                    { time: '14:00', available: true },
                ],
            },
        ],
        services: [
            {
                id: 'family-planning',
                name: 'Family Planning',
                duration: 30,
                price: 0,
            },
            {
                id: 'malaria-treatment',
                name: 'Malaria Treatment',
                duration: 60,
                price: 1000,
            },
        ],
    },
    {
        id: 'naivasha-health-centre',
        name: 'Naivasha Health Centre',
        coordinates: [36.4333333, -0.7166667],
        type: 'Health Centre',
        kenya: {
            levelOfCare: 4,
            shaServiceCategories: ['Curative', 'Rehabilitative'],
            acceptsSHIF: true,
        },
        distance: '1.5 km',
        emoji: '🏥',
        address: 'Naivasha, Kenya',
        contactPhone: '+254 722 985 421',
        contactEmail: 'naivashahealthcentre@example.com',
        openingHours: [{ day: 'Monday-Sunday', hours: '06:00 - 22:00' }],
        tags: ['Private', 'Pharmacy'],
        ratings: [
            {
                userId: 'user25',
                rating: 5,
                comment: 'Ample stock and friendly staff.',
                createdAt: '2024-02-24T09:00:00Z',
            },
            {
                userId: 'user26',
                rating: 4,
                comment: 'Convenient location and affordable prices.',
                createdAt: '2024-02-25T11:00:00Z',
            },
            {
                userId: 'user27',
                rating: 4,
                comment: 'Clean facilities and professional pharmacists.',
                createdAt: '2024-02-26T12:00:00Z',
            },
        ],
        averageRating: 4.33,
        totalRatings: 3,
        availableSlots: [
            {
                date: '2024-02-20',
                slots: [
                    { time: '09:00', available: true },
                    { time: '11:00', available: true },
                    { time: '14:00', available: true },
                    { time: '16:00', available: true },
                ],
            },
        ],
        services: [
            {
                id: 'family-planning',
                name: 'Family Planning',
                duration: 30,
                price: 0,
            },
            {
                id: 'pregnancy-test',
                name: 'Pregnancy Test',
                duration: 15,
                price: 2000,
            },
        ],
    },
    {
        id: 'mt-kenya-chemist',
        name: 'Mt. Kenya Chemist',
        coordinates: [36.7883787, -1.3108793],
        type: 'Pharmacy',
        kenya: {
            levelOfCare: 2,
            shaServiceCategories: ['Preventive and Promotive'],
            acceptsSHIF: false,
        },
        distance: '1.5 km',
        emoji: '💊',
        address: 'Mt. Kenya Road, Nairobi, Kenya',
        contactPhone: '+254 722 985 421',
        contactEmail: 'mtkenyachemist@example.com',
        openingHours: [{ day: 'Monday-Sunday', hours: '06:00 - 22:00' }],
        tags: ['Private', 'Pharmacy'],
        ratings: [
            {
                userId: 'user25',
                rating: 5,
                comment: 'Ample stock and friendly staff.',
                createdAt: '2024-02-24T09:00:00Z',
            },
            {
                userId: 'user26',
                rating: 4,
                comment: 'Convenient location and affordable prices.',
                createdAt: '2024-02-25T11:00:00Z',
            },
            {
                userId: 'user27',
                rating: 4,
                comment: 'Clean facilities and professional pharmacists.',
                createdAt: '2024-02-26T12:00:00Z',
            },
        ],
        averageRating: 4.33,
        totalRatings: 3,
        availableSlots: [
            {
                date: '2024-02-20',
                slots: [
                    { time: '09:00', available: true },
                    { time: '11:00', available: true },
                    { time: '14:00', available: true },
                    { time: '16:00', available: true },
                ],
            },
        ],
        services: [
            {
                id: 'family-planning',
                name: 'Family Planning',
                duration: 30,
                price: 0,
            },
            {
                id: 'pregnancy-test',
                name: 'Pregnancy Test',
                duration: 15,
                price: 2000,
            },
        ],
    },
    {
        id: 'urifold-clinic',
        name: 'Urifold Clinic',
        coordinates: [36.8670035, -1.2604322],
        type: 'Clinic',
        kenya: {
            levelOfCare: 3,
            shaServiceCategories: ['Curative', 'Rehabilitative'],
            acceptsSHIF: true,
        },
        distance: '2.8 km',
        emoji: '🏥',
        address: 'Urifold Road, Nairobi, Kenya',
        contactPhone: '+254 727 985 123',
        contactEmail: 'urifoldclinic@example.com',
        openingHours: [
            { day: 'Saturday-Thursday', hours: '08:30 - 20:00' },
            { day: 'Friday', hours: '08:30 - 15:30' },
        ],
        tags: ['Private', 'Comprehensive Care'],
        ratings: [
            {
                userId: 'user28',
                rating: 4,
                comment: 'Accessible and comprehensive care.',
                createdAt: '2024-02-27T10:00:00Z',
            },
            {
                userId: 'user29',
                rating: 4,
                comment: 'Friendly staff and clean facilities.',
                createdAt: '2024-02-28T11:00:00Z',
            },
            {
                userId: 'user30',
                rating: 4,
                comment: 'Professional doctors and affordable services.',
                createdAt: '2024-02-29T12:00:00Z',
            },
        ],
        averageRating: 4,
        totalRatings: 3,
        availableSlots: [
            {
                date: '2024-02-20',
                slots: [
                    { time: '09:00', available: true },
                    { time: '11:00', available: true },
                    { time: '14:00', available: true },
                    { time: '16:00', available: true },
                ],
            },
        ],
        services: [
            { id: 'antenatal', name: 'Antenatal Care', duration: 45, price: 0 },
            {
                id: 'dental',
                name: 'Dental Services',
                duration: 60,
                price: 3000,
            },
            {
                id: 'family-planning',
                name: 'Family Planning',
                duration: 30,
                price: 0,
            },
            {
                id: 'immunization',
                name: 'Immunizations',
                duration: 30,
                price: 0,
            },
            {
                id: 'malaria',
                name: 'Malaria Treatment',
                duration: 60,
                price: 1000,
            },
            {
                id: 'minor-surgery',
                name: 'Minor Surgery',
                duration: 90,
                price: 5000,
            },
            {
                id: 'pregnancy-test',
                name: 'Pregnancy Test',
                duration: 15,
                price: 500,
            },
            {
                id: 'vct-hiv',
                name: 'VCT HIV Counselling Test',
                duration: 30,
                price: 0,
            },
        ],
    },
    {
        id: 'kakamega-pharmacy',
        name: 'Kakamega Pharmacy',
        coordinates: [34.75, 0.2833333],
        type: 'Pharmacy',
        kenya: {
            levelOfCare: 2,
            shaServiceCategories: ['Preventive and Promotive'],
            acceptsSHIF: false,
        },
        distance: '1.2 km',
        emoji: '💊',
        address: 'Kakamega, Kenya',
        contactPhone: '+254 727 349 812',
        contactEmail: 'kakamegapharmacy@example.com',
        openingHours: [{ day: 'Monday-Friday', hours: '07:00 - 19:00' }],
        tags: ['Private', 'Primary Care'],
        ratings: [
            {
                userId: 'user31',
                rating: 4,
                comment: 'Convenient for day services and friendly staff.',
                createdAt: '2024-02-25T09:00:00Z',
            },
            {
                userId: 'user32',
                rating: 4,
                comment: 'Clean facilities and affordable services.',
                createdAt: '2024-02-26T11:00:00Z',
            },
            {
                userId: 'user33',
                rating: 4,
                comment: 'Professional doctors and comprehensive care.',
                createdAt: '2024-02-27T12:00:00Z',
            },
        ],
        averageRating: 4,
        totalRatings: 3,
        availableSlots: [
            {
                date: '2024-02-20',
                slots: [
                    { time: '09:00', available: true },
                    { time: '11:00', available: true },
                    { time: '14:00', available: true },
                    { time: '16:00', available: true },
                ],
            },
        ],
        services: [
            {
                id: 'family-planning',
                name: 'Family Planning',
                duration: 30,
                price: 0,
            },
            {
                id: 'general-medical',
                name: 'General Medical Services',
                duration: 45,
                price: 2000,
            },
            {
                id: 'immunizations',
                name: 'Vaccinations',
                duration: 30,
                price: 0,
            },
            {
                id: 'malaria-treatment',
                name: 'Malaria Treatment',
                duration: 60,
                price: 1000,
            },
        ],
    },
];

export const UGANDA_FACILITIES: Facility[] = [
    {
        id: 'kampala-hospital',
        name: 'Kampala Hospital',
        coordinates: [32.5833333, 0.3166667],
        type: 'Hospital',
        distance: '2.1 km',
        emoji: '🏥',
        address: 'Kampala, Uganda',
        contactPhone: '+256 414 233 333',
        contactEmail: 'kampalahospital@example.com',
        openingHours: [{ day: 'Monday-Friday', hours: '08:00 - 18:00' }],
        tags: ['Private', 'Comprehensive Care'],
        ratings: [
            {
                userId: 'user37',
                rating: 4,
                comment: 'Accessible and comprehensive care.',
                createdAt: '2024-02-27T10:00:00Z',
            },
            {
                userId: 'user38',
                rating: 4,
                comment: 'Friendly staff and clean facilities.',
                createdAt: '2024-02-28T11:00:00Z',
            },
            {
                userId: 'user39',
                rating: 4,
                comment: 'Professional doctors and affordable services.',
                createdAt: '2024-02-29T12:00:00Z',
            },
        ],
        averageRating: 4,
        totalRatings: 3,
        availableSlots: [
            {
                date: '2024-02-20',
                slots: [
                    { time: '09:00', available: true },
                    { time: '11:00', available: true },
                    { time: '14:00', available: true },
                ],
            },
        ],
        services: [
            {
                id: 'general-medicine',
                name: 'General Medical Consultation',
                duration: 45,
                price: 2000,
            },
            {
                id: 'pediatric-care',
                name: 'Pediatric Care',
                duration: 60,
                price: 3000,
            },
        ],
    },
    {
        id: 'entebbe-medical-center',
        name: 'Entebbe Medical Center',
        coordinates: [32.4666667, 0.0666667],
        type: 'Medical Center',
        distance: '4.3 km',
        emoji: '⚕️',
        address: 'Entebbe, Uganda',
        contactPhone: '+256 414 321 123',
        contactEmail: 'entebbemedical@example.com',
        openingHours: [{ day: 'Monday-Friday', hours: '07:00 - 19:00' }],
        tags: ['Private', 'Primary Care'],
        ratings: [
            {
                userId: 'user40',
                rating: 4,
                comment: 'Convenient for day services and friendly staff.',
                createdAt: '2024-02-25T09:00:00Z',
            },
            {
                userId: 'user41',
                rating: 4,
                comment: 'Clean facilities and affordable services.',
                createdAt: '2024-02-26T11:00:00Z',
            },
            {
                userId: 'user42',
                rating: 4,
                comment: 'Professional doctors and comprehensive care.',
                createdAt: '2024-02-27T12:00:00Z',
            },
        ],
        averageRating: 4,
        totalRatings: 3,
        availableSlots: [
            {
                date: '2024-02-20',
                slots: [
                    { time: '09:00', available: true },
                    { time: '11:00', available: true },
                    { time: '14:00', available: true },
                    { time: '16:00', available: true },
                ],
            },
        ],
        services: [
            {
                id: 'family-planning',
                name: 'Family Planning',
                duration: 30,
                price: 0,
            },
            {
                id: 'general-medical',
                name: 'General Medical Services',
                duration: 45,
                price: 2000,
            },
            {
                id: 'immunizations',
                name: 'Vaccinations',
                duration: 30,
                price: 0,
            },
            {
                id: 'malaria-treatment',
                name: 'Malaria Treatment',
                duration: 60,
                price: 1000,
            },
        ],
    },
    {
        id: 'fort-portal-hospital',
        name: 'Fort Portal Hospital',
        coordinates: [30.2666667, 0.6333333],
        type: 'Hospital',
        distance: '2.8 km',
        emoji: '🏥',
        address: 'Fort Portal, Uganda',
        contactPhone: '+256 483 422 422',
        contactEmail: 'fortportalhospital@example.com',
        openingHours: [{ day: 'Monday-Friday', hours: '08:00 - 17:00' }],
        tags: ['Private', 'Comprehensive Care'],
        ratings: [
            {
                userId: 'user43',
                rating: 4,
                comment: 'Accessible and comprehensive care.',
                createdAt: '2024-02-27T10:00:00Z',
            },
            {
                userId: 'user44',
                rating: 4,
                comment: 'Friendly staff and clean facilities.',
                createdAt: '2024-02-28T11:00:00Z',
            },
            {
                userId: 'user45',
                rating: 4,
                comment: 'Professional doctors and affordable services.',
                createdAt: '2024-02-29T12:00:00Z',
            },
        ],
        averageRating: 4,
        totalRatings: 3,
        availableSlots: [
            {
                date: '2024-02-20',
                slots: [
                    { time: '09:00', available: true },
                    { time: '11:00', available: true },
                    { time: '14:00', available: true },
                ],
            },
        ],
        services: [
            {
                id: 'family-planning',
                name: 'Family Planning',
                duration: 30,
                price: 0,
            },
            {
                id: 'antenatal',
                name: 'Antenatal Care',
                duration: 45,
                price: 1000,
            },
        ],
    },
    {
        id: 'mbarara-merciful-clinic',
        name: 'Mbarara Merciful Clinic',
        coordinates: [30.65, -0.6166667],
        type: 'Clinic',
        distance: '1.5 km',
        emoji: '🏥',
        address: 'Mbarara, Uganda',
        contactPhone: '+256 485 420 420',
        contactEmail: 'mbararamerciful@example.com',
        openingHours: [{ day: 'Monday-Friday', hours: '08:00 - 18:00' }],
        tags: ['Private', 'Comprehensive Care'],
        ratings: [
            {
                userId: 'user46',
                rating: 4,
                comment: 'Accessible and comprehensive care.',
                createdAt: '2024-02-27T10:00:00Z',
            },
            {
                userId: 'user47',
                rating: 4,
                comment: 'Friendly staff and clean facilities.',
                createdAt: '2024-02-28T11:00:00Z',
            },
            {
                userId: 'user48',
                rating: 4,
                comment: 'Professional doctors and affordable services.',
                createdAt: '2024-02-29T12:00:00Z',
            },
        ],
        averageRating: 4,
        totalRatings: 3,
        availableSlots: [
            {
                date: '2024-02-20',
                slots: [
                    { time: '09:00', available: true },
                    { time: '11:00', available: true },
                    { time: '14:00', available: true },
                ],
            },
        ],
        services: [
            {
                id: 'family-planning',
                name: 'Family Planning',
                duration: 30,
                price: 0,
            },
            {
                id: 'general-medical',
                name: 'General Medical Services',
                duration: 45,
                price: 2000,
            },
        ],
    },
    {
        id: 'kabale-laboratory',
        name: 'Kabale Laboratory',
        coordinates: [30.9833333, -0.4166667],
        type: 'Laboratory',
        distance: '2.5 km',
        emoji: '🔬',
        address: 'Kabale, Uganda',
        contactPhone: '+256 774 567 890',
        contactEmail: 'kabalelab@example.com',
        openingHours: [{ day: 'Monday-Friday', hours: '08:00 - 17:00' }],
        tags: ['Private', 'Lab Services'],
        ratings: [
            {
                userId: 'user49',
                rating: 4,
                comment: 'Accurate and reliable lab results.',
                createdAt: '2024-02-27T10:00:00Z',
            },
            {
                userId: 'user50',
                rating: 4,
                comment: 'Friendly staff and clean facilities.',
                createdAt: '2024-02-28T11:00:00Z',
            },
            {
                userId: 'user51',
                rating: 4,
                comment:
                    'Professional lab technicians and affordable services.',
                createdAt: '2024-02-29T12:00:00Z',
            },
        ],
        averageRating: 4,
        totalRatings: 3,
        availableSlots: [
            {
                date: '2024-02-20',
                slots: [
                    { time: '09:00', available: true },
                    { time: '11:00', available: true },
                    { time: '14:00', available: true },
                ],
            },
        ],
        services: [
            {
                id: 'lab-tests',
                name: 'Lab Tests',
                duration: 30,
                price: 5000,
            },
        ],
    },
    {
        id: 'mbale-dispensary',
        name: 'Mbale Dispensary',
        coordinates: [34.1666667, 0.5333333],
        type: 'Dispensary',
        distance: '1.2 km',
        emoji: '🏥',
        address: 'Mbale, Uganda',
        contactPhone: '+256 774 567 890',
        contactEmail: 'mbaledispensary@example.com',
        openingHours: [{ day: 'Monday-Friday', hours: '08:00 - 17:00' }],
        tags: ['Private', 'Outpatient Services'],
        ratings: [
            {
                userId: 'user52',
                rating: 3,
                comment: 'Limited services but convenient location.',
                createdAt: '2024-02-28T10:00:00Z',
            },
            {
                userId: 'user53',
                rating: 3,
                comment: 'Friendly staff but facilities can be improved.',
                createdAt: '2024-02-29T11:00:00Z',
            },
            {
                userId: 'user54',
                rating: 3,
                comment: 'Clean facilities and professional doctors.',
                createdAt: '2024-03-01T12:00:00Z',
            },
        ],
        averageRating: 3,
        totalRatings: 3,
        availableSlots: [
            {
                date: '2024-02-20',
                slots: [
                    { time: '09:00', available: true },
                    { time: '11:00', available: true },
                    { time: '14:00', available: true },
                ],
            },
        ],
        services: [
            {
                id: 'family-planning',
                name: 'Family Planning',
                duration: 30,
                price: 0,
            },
            {
                id: 'malaria-treatment',
                name: 'Malaria Treatment',
                duration: 60,
                price: 1000,
            },
        ],
    },
    {
        id: 'jinja-health-centre',
        name: 'Jinja Health Centre',
        coordinates: [33.2, 0.45],
        type: 'Health Centre',
        distance: '2.8 km',
        emoji: '🏥',
        address: 'Jinja, Uganda',
        contactPhone: '+256 774 567 890',
        contactEmail: 'jinjahc@example.com',
        openingHours: [{ day: 'Monday-Friday', hours: '08:00 - 17:00' }],
        tags: ['Private', 'Comprehensive Care'],
        ratings: [
            {
                userId: 'user55',
                rating: 4,
                comment: 'Accessible and comprehensive care.',
                createdAt: '2024-02-27T10:00:00Z',
            },
            {
                userId: 'user56',
                rating: 4,
                comment: 'Friendly staff and clean facilities.',
                createdAt: '2024-02-28T11:00:00Z',
            },
            {
                userId: 'user57',
                rating: 4,
                comment: 'Professional doctors and affordable services.',
                createdAt: '2024-02-29T12:00:00Z',
            },
        ],
        averageRating: 4,
        totalRatings: 3,
        availableSlots: [
            {
                date: '2024-02-20',
                slots: [
                    { time: '09:00', available: true },
                    { time: '11:00', available: true },
                    { time: '14:00', available: true },
                ],
            },
        ],
        services: [
            {
                id: 'family-planning',
                name: 'Family Planning',
                duration: 30,
                price: 0,
            },
            {
                id: 'general-medical',
                name: 'General Medical Services',
                duration: 45,
                price: 2000,
            },
        ],
    },
    {
        id: 'gulu-pharmacy',
        name: 'Gulu Pharmacy',
        coordinates: [32.3, 2.7666667],
        type: 'Pharmacy',
        distance: '1.5 km',
        emoji: '💊',
        address: 'Gulu, Uganda',
        contactPhone: '+256 774 567 890',
        contactEmail: 'gulupharmacy@example.com',
        openingHours: [{ day: 'Monday-Friday', hours: '07:00 - 19:00' }],
        tags: ['Private', 'Primary Care'],
        ratings: [
            {
                userId: 'user58',
                rating: 4,
                comment: 'Convenient for day services and friendly staff.',
                createdAt: '2024-02-25T09:00:00Z',
            },
            {
                userId: 'user59',
                rating: 4,
                comment: 'Clean facilities and affordable services.',
                createdAt: '2024-02-26T11:00:00Z',
            },
            {
                userId: 'user60',
                rating: 4,
                comment: 'Professional pharmacists and comprehensive care.',
                createdAt: '2024-02-27T12:00:00Z',
            },
        ],
        averageRating: 4,
        totalRatings: 3,
        availableSlots: [
            {
                date: '2024-02-20',
                slots: [
                    { time: '09:00', available: true },
                    { time: '11:00', available: true },
                    { time: '14:00', available: true },
                    { time: '16:00', available: true },
                ],
            },
        ],
        services: [
            {
                id: 'family-planning',
                name: 'Family Planning',
                duration: 30,
                price: 0,
            },
            {
                id: 'general-medical',
                name: 'General Medical Services',
                duration: 45,
                price: 2000,
            },
            {
                id: 'immunizations',
                name: 'Vaccinations',
                duration: 30,
                price: 0,
            },
            {
                id: 'malaria-treatment',
                name: 'Malaria Treatment',
                duration: 60,
                price: 1000,
            },
        ],
    },
    {
        id: 'adyel-health-centre-ii',
        name: 'Adyel Health Centre II',
        coordinates: [32.883653, 2.2670493],
        type: 'Clinic',
        distance: '2 km',
        emoji: '🏥',
        address: 'Adyel, Gulu, Uganda',
        contactPhone: '+256 777 123 456',
        contactEmail: 'adyelclinic@example.com',
        ratings: [
            {
                userId: 'user1',
                rating: 4,
                comment: 'Good service, always available.',
                createdAt: '2024-02-28T08:00:00Z',
            },
            {
                userId: 'user2',
                rating: 5,
                comment: 'Very helpful staff and clean facilities.',
                createdAt: '2024-02-28T10:00:00Z',
            },
        ],
        averageRating: 4.5,
        totalRatings: 2,
        openingHours: [
            {
                day: 'Monday-Sunday',
                hours: '24/7',
            },
        ],
        tags: ['Public', 'Primary Care', 'Emergency'],
        availableSlots: [
            {
                date: '2024-03-05',
                slots: [
                    {
                        time: '09:00',
                        available: true,
                    },
                    {
                        time: '10:00',
                        available: true,
                    },
                    {
                        time: '11:00',
                        available: true,
                    },
                    {
                        time: '14:00',
                        available: true,
                    },
                    {
                        time: '15:00',
                        available: true,
                    },
                ],
            },
            {
                date: '2024-03-06',
                slots: [
                    {
                        time: '09:00',
                        available: true,
                    },
                    {
                        time: '10:00',
                        available: true,
                    },
                    {
                        time: '11:00',
                        available: true,
                    },
                    {
                        time: '14:00',
                        available: true,
                    },
                    {
                        time: '15:00',
                        available: true,
                    },
                ],
            },
        ],
        services: [
            {
                id: 'physical-consultation',
                name: 'Physical Consultation',
                duration: 30,
                price: 5000,
            },
            {
                id: 'telemedical-consultation',
                name: 'Telemedical Consultation',
                duration: 20,
                price: 3000,
            },
            {
                id: 'mobile-clinic-consultation',
                name: 'Mobile Clinic Consultation',
                duration: 45,
                price: 7000,
            },
            {
                id: 'malaria-treatment',
                name: 'Malaria Treatment',
                duration: 60,
                price: 1000,
            },
        ],
        doctors: [
            {
                id: 'doc1',
                name: 'Dr. Jane Doe',
                specialty: 'General Physician',
                available: true,
            },
            {
                id: 'doc2',
                name: 'Dr. John Smith',
                specialty: 'Obstetrics',
                available: true,
            },
        ],
        specialists: [
            {
                id: 'spec1',
                name: 'Nurse Mary',
                specialty: 'Family Planning',
                available: true,
            },
        ],
        diagnosticTests: [
            {
                id: 'test1',
                name: 'Malaria Test',
                price: 1500,
                turnaroundTime: '30 minutes',
            },
            {
                id: 'test2',
                name: 'Blood Test',
                price: 2000,
                turnaroundTime: '1 hour',
            },
        ],
        medications: [
            {
                id: 'med1',
                name: 'Paracetamol',
                price: 500,
                inStock: true,
            },
            {
                id: 'med2',
                name: 'Anti-Malarials',
                price: 1000,
                inStock: true,
            },
        ],
    },
];

export const ADDITIONAL_1: Facility[] = [
  {
    "id": "5639737538",
    "name": "Alleluia Clinic",
    "coordinates": [
      30.783745,
      1.187835
    ],
    "type": "pharmacy",
    "distance": "10 km",
    "emoji": "🏥",
    "address": "Block 29, Kyangwali, Hoima",
    "contactPhone": "0123456789",
    "contactEmail": "alleluiaclinic@example.com",
    "ratings": [
      {
        "userId": "user1",
        "rating": 5,
        "comment": "Excellent service",
        "createdAt": "2022-01-01T00:00:00.000Z"
      },
      {
        "userId": "user2",
        "rating": 4,
        "comment": "Good experience",
        "createdAt": "2022-01-15T00:00:00.000Z"
      }
    ],
    "averageRating": 4.5,
    "totalRatings": 2,
    "openingHours": [
      {
        "day": "Monday",
        "hours": "07:00-20:00"
      },
      {
        "day": "Tuesday",
        "hours": "07:00-20:00"
      },
      {
        "day": "Wednesday",
        "hours": "07:00-20:00"
      },
      {
        "day": "Thursday",
        "hours": "07:00-20:00"
      },
      {
        "day": "Friday",
        "hours": "07:00-20:00"
      },
      {
        "day": "Saturday",
        "hours": "07:00-20:00"
      },
      {
        "day": "Sunday",
        "hours": "07:00-20:00"
      }
    ],
    "tags": [
      "pharmacy",
      "healthcare"
    ],
    "availableSlots": [
      {
        "date": "2024-09-16",
        "slots": [
          {
            "time": "09:00",
            "available": true
          },
          {
            "time": "10:00",
            "available": true
          },
          {
            "time": "11:00",
            "available": true
          }
        ]
      },
      {
        "date": "2024-09-17",
        "slots": [
          {
            "time": "09:00",
            "available": true
          },
          {
            "time": "10:00",
            "available": true
          },
          {
            "time": "11:00",
            "available": true
          }
        ]
      }
    ],
    "services": [
      {
        "id": "service1",
        "name": "Consultation",
        "duration": 30,
        "price": 100
      },
      {
        "id": "service2",
        "name": "Medication",
        "duration": 15,
        "price": 50
      }
    ],
    "doctors": [
      {
        "id": "doctor1",
        "name": "John Doe",
        "specialty": "General Practice",
        "available": true
      }
    ],
    "specialists": [
      {
        "id": "specialist1",
        "name": "Jane Smith",
        "specialty": "Cardiology",
        "available": true
      }
    ],
    "diagnosticTests": [
      {
        "id": "test1",
        "name": "Blood Test",
        "price": 200,
        "turnaroundTime": "1 day"
      }
    ],
    "medications": [
      {
        "id": "med1",
        "name": "Paracetamol",
        "price": 10,
        "inStock": true
      }
    ]
  },
  {
    "id": "801508972",
    "name": "Mbale Epicentre Health Centre II",
    "coordinates": [
      34.1672732,
      0.97075
    ],
    "type": "hospital",
    "distance": "5 km",
    "emoji": "🏥",
    "address": "Mbale Tororo Road, Mbale",
    "contactPhone": "0432123456",
    "contactEmail": "mbaleepicentre@example.com",
    "ratings": [
      {
        "userId": "user3",
        "rating": 5,
        "comment": "Excellent service",
        "createdAt": "2022-02-01T00:00:00.000Z"
      },
      {
        "userId": "user4",
        "rating": 4,
        "comment": "Good experience",
        "createdAt": "2022-02-15T00:00:00.000Z"
      }
    ],
    "averageRating": 4.5,
    "totalRatings": 2,
    "openingHours": [
      {
        "day": "Monday",
        "hours": "08:00-18:00"
      },
      {
        "day": "Tuesday",
        "hours": "08:00-18:00"
      },
      {
        "day": "Wednesday",
        "hours": "08:00-18:00"
      },
      {
        "day": "Thursday",
        "hours": "08:00-18:00"
      },
      {
        "day": "Friday",
        "hours": "08:00-18:00"
      },
      {
        "day": "Saturday",
        "hours": "08:00-18:00"
      },
      {
        "day": "Sunday",
        "hours": "08:00-18:00"
      }
    ],
    "tags": [
      "hospital",
      "healthcare"
    ],
    "availableSlots": [
      {
        "date": "2024-09-16",
        "slots": [
          {
            "time": "09:00",
            "available": true
          },
          {
            "time": "10:00",
            "available": true
          },
          {
            "time": "11:00",
            "available": true
          }
        ]
      },
      {
        "date": "2024-09-17",
        "slots": [
          {
            "time": "09:00",
            "available": true
          },
          {
            "time": "10:00",
            "available": true
          },
          {
            "time": "11:00",
            "available": true
          }
        ]
      }
    ],
    "services": [
      {
        "id": "service3",
        "name": "Surgery",
        "duration": 60,
        "price": 500
      },
      {
        "id": "service4",
        "name": "Consultation",
        "duration": 30,
        "price": 100
      }
    ],
    "doctors": [
      {
        "id": "doctor2",
        "name": "Jane Doe",
        "specialty": "General Surgery",
        "available": true
      }
    ],
    "specialists": [
      {
        "id": "specialist2",
        "name": "Bob Smith",
        "specialty": "Cardiology",
        "available": true
      }
    ],
    "diagnosticTests": [
      {
        "id": "test2",
        "name": "X-ray",
        "price": 300,
        "turnaroundTime": "2 days"
      }
    ],
    "medications": [
      {
        "id": "med2",
        "name": "Ibuprofen",
        "price": 15,
        "inStock": true
      }
    ]
  },
  {
    "id": "5639737531",
    "name": "Ngruwe Health Centre",
    "coordinates": [
      30.7500733,
      1.1965333
    ],
    "type": "clinic",
    "distance": "15 km",
    "emoji": "🏥",
    "address": "Block 15, Kyangwali, Hoima",
    "contactPhone": "0123456789",
    "contactEmail": "ngruwehealthcentre@example.com",
    "ratings": [
      {
        "userId": "user5",
        "rating": 5,
        "comment": "Excellent service",
        "createdAt": "2022-03-01T00:00:00.000Z"
      },
      {
        "userId": "user6",
        "rating": 4,
        "comment": "Good experience",
        "createdAt": "2022-03-15T00:00:00.000Z"
      }
    ],
    "averageRating": 4.5,
    "totalRatings": 2,
    "openingHours": [
      {
        "day": "Monday",
        "hours": "07:00-20:00"
      },
      {
        "day": "Tuesday",
        "hours": "07:00-20:00"
      },
      {
        "day": "Wednesday",
        "hours": "07:00-20:00"
      },
      {
        "day": "Thursday",
        "hours": "07:00-20:00"
      },
      {
        "day": "Friday",
        "hours": "07:00-20:00"
      },
      {
        "day": "Saturday",
        "hours": "07:00-20:00"
      },
      {
        "day": "Sunday",
        "hours": "07:00-20:00"
      }
    ],
    "tags": [
      "clinic",
      "healthcare"
    ],
    "availableSlots": [
      {
        "date": "2024-09-16",
        "slots": [
          {
            "time": "09:00",
            "available": true
          },
          {
            "time": "10:00",
            "available": true
          },
          {
            "time": "11:00",
            "available": true
          }
        ]
      },
      {
        "date": "2024-09-17",
        "slots": [
          {
            "time": "09:00",
            "available": true
          },
          {
            "time": "10:00",
            "available": true
          },
          {
            "time": "11:00",
            "available": true
          }
        ]
      }
    ],
    "services": [
      {
        "id": "service5",
        "name": "Vaccination",
        "duration": 15,
        "price": 50
      },
      {
        "id": "service6",
        "name": "Consultation",
        "duration": 30,
        "price": 100
      }
    ],
    "doctors": [
      {
        "id": "doctor3",
        "name": "Alice Johnson",
        "specialty": "Pediatrics",
        "available": true
      }
    ],
    "specialists": [
      {
        "id": "specialist3",
        "name": "Mike Brown",
        "specialty": "Dermatology",
        "available": true
      }
    ],
    "diagnosticTests": [
      {
        "id": "test3",
        "name": "Blood Test",
        "price": 200,
        "turnaroundTime": "1 day"
      }
    ],
    "medications": [
      {
        "id": "med3",
        "name": "Paracetamol",
        "price": 10,
        "inStock": true
      }
    ]
  },
  {
    "id": "5639737532",
    "name": "John Ruvanga James Nyama Drug Shop",
    "coordinates": [
      30.7840286,
      1.185362
    ],
    "type": "pharmacy",
    "distance": "10 km",
    "emoji": "🏥",
    "address": "Block 01, Kyangwali, Hoima",
    "contactPhone": "0123456789",
    "contactEmail": "johnruvangajamesnyama@example.com",
    "ratings": [
      {
        "userId": "user7",
        "rating": 5,
        "comment": "Excellent service",
        "createdAt": "2022-04-01T00:00:00.000Z"
      },
      {
        "userId": "user8",
        "rating": 4,
        "comment": "Good experience",
        "createdAt": "2022-04-15T00:00:00.000Z"
      }
    ],
    "averageRating": 4.5,
    "totalRatings": 2,
    "openingHours": [
      {
        "day": "Monday",
        "hours": "07:00-20:00"
      },
      {
        "day": "Tuesday",
        "hours": "07:00-20:00"
      },
      {
        "day": "Wednesday",
        "hours": "07:00-20:00"
      },
      {
        "day": "Thursday",
        "hours": "07:00-20:00"
      },
      {
        "day": "Friday",
        "hours": "07:00-20:00"
      },
      {
        "day": "Saturday",
        "hours": "07:00-20:00"
      },
      {
        "day": "Sunday",
        "hours": "07:00-20:00"
      }
    ],
    "tags": [
      "pharmacy",
      "healthcare"
    ],
    "availableSlots": [
      {
        "date": "2024-09-16",
        "slots": [
          {
            "time": "09:00",
            "available": true
          },
          {
            "time": "10:00",
            "available": true
          },
          {
            "time": "11:00",
            "available": true
          }
        ]
      },
      {
        "date": "2024-09-17",
        "slots": [
          {
            "time": "09:00",
            "available": true
          },
          {
            "time": "10:00",
            "available": true
          },
          {
            "time": "11:00",
            "available": true
          }
        ]
      }
    ],
    "services": [
      {
        "id": "service7",
        "name": "Medication",
        "duration": 15,
        "price": 50
      },
      {
        "id": "service8",
        "name": "Consultation",
        "duration": 30,
        "price": 100
      }
    ],
    "doctors": [
      {
        "id": "doctor4",
        "name": "Emma Taylor",
        "specialty": "General Practice",
        "available": true
      }
    ],
    "specialists": [
      {
        "id": "specialist4",
        "name": "Oliver Lee",
        "specialty": "Cardiology",
        "available": true
      }
    ],
    "diagnosticTests": [
      {
        "id": "test4",
        "name": "X-ray",
        "price": 300,
        "turnaroundTime": "2 days"
      }
    ],
    "medications": [
      {
        "id": "med4",
        "name": "Ibuprofen",
        "price": 15,
        "inStock": true
      }
    ]
  },
  {
    "id": "10583475412",
    "name": "Parl Medical Clinic",
    "coordinates": [
      31.3393699,
      1.4198698
    ],
    "type": "clinic",
    "distance": "20 km",
    "emoji": "🏥",
    "address": "Busiisi West, Hoima",
    "contactPhone": "0432123456",
    "contactEmail": "parlmedicalclinic@example.com",
    "ratings": [
      {
        "userId": "user9",
        "rating": 5,
        "comment": "Excellent service",
        "createdAt": "2022-05-01T00:00:00.000Z"
      },
      {
        "userId": "user10",
        "rating": 4,
        "comment": "Good experience",
        "createdAt": "2022-05-15T00:00:00.000Z"
      }
    ],
    "averageRating": 4.5,
    "totalRatings": 2,
    "openingHours": [
      {
        "day": "Monday",
        "hours": "08:00-18:00"
      },
      {
        "day": "Tuesday",
        "hours": "08:00-18:00"
      },
      {
        "day": "Wednesday",
        "hours": "08:00-18:00"
      },
      {
        "day": "Thursday",
        "hours": "08:00-18:00"
      },
      {
        "day": "Friday",
        "hours": "08:00-18:00"
      },
      {
        "day": "Saturday",
        "hours": "08:00-18:00"
      },
      {
        "day": "Sunday",
        "hours": "08:00-18:00"
      }
    ],
    "tags": [
      "clinic",
      "healthcare"
    ],
    "availableSlots": [
      {
        "date": "2024-09-16",
        "slots": [
          {
            "time": "09:00",
            "available": true
          },
          {
            "time": "10:00",
            "available": true
          },
          {
            "time": "11:00",
            "available": true
          }
        ]
      },
      {
        "date": "2024-09-17",
        "slots": [
          {
            "time": "09:00",
            "available": true
          },
          {
            "time": "10:00",
            "available": true
          },
          {
            "time": "11:00",
            "available": true
          }
        ]
      }
    ],
    "services": [
      {
        "id": "service9",
        "name": "Surgery",
        "duration": 60,
        "price": 500
      },
      {
        "id": "service10",
        "name": "Consultation",
        "duration": 30,
        "price": 100
      }
    ],
    "doctors": [
      {
        "id": "doctor5",
        "name": "David Kim",
        "specialty": "General Surgery",
        "available": true
      }
    ],
    "specialists": [
      {
        "id": "specialist5",
        "name": "Sophia Patel",
        "specialty": "Cardiology",
        "available": true
      }
    ],
    "diagnosticTests": [
      {
        "id": "test5",
        "name": "Blood Test",
        "price": 200,
        "turnaroundTime": "1 day"
      }
    ],
    "medications": [
      {
        "id": "med5",
        "name": "Paracetamol",
        "price": 10,
        "inStock": true
      }
    ]
  }
]
