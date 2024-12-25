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

export const KENYA_FACILITIES: Facility[] = 
[
  {
    "id": "kibera-health",
    "name": "Kibera Health Centre",
    "coordinates": [36.7881533, -1.306065],
    "type": "Health Centre",
    "levelOfCare": "Primary Care",
    "distance": "2.8 km",
    "emoji": "🏥",
    "address": "Kibera, Nairobi, Kenya",
    "contactPhone": "+254 728 545 123",
    "contactEmail": "kiberahc@example.com",
    "openingHours": [
      { "day": "Monday-Friday", "hours": "08:00 - 17:00" }
    ],
    "tags": ["Government Facility", "Outpatient"],
    "ratings": [
      { "userId": "user1", "rating": 4, "comment": "Conveniently located and provides basic services.", "createdAt": "2024-02-16T14:20:00Z" },
      { "userId": "user2", "rating": 3, "comment": "Limited services but helpful staff.", "createdAt": "2024-02-17T15:00:00Z" },
      { "userId": "user3", "rating": 5, "comment": "Clean and efficient services, great for emergencies.", "createdAt": "2024-02-18T10:00:00Z" }
    ],
    "averageRating": 4,
    "totalRatings": 3,
    "availableSlots": [
      {
        "date": "2024-02-20",
        "slots": [
          { "time": "09:00", "available": true },
          { "time": "11:00", "available": true },
          { "time": "14:00", "available": true }
        ]
      }
    ],
    "services": [
      { "id": "outpatient", "name": "Outpatient Services", "duration": 30, "price": 0 }
    ]
  },
  {
    "id": "prestige-medical",
    "name": "Prestige Medical Services",
    "coordinates": [36.7832273, -1.3108311],
    "type": "Medical Center",
    "levelOfCare": "Primary Care",
    "distance": "3.1 km",
    "emoji": "⚕️",
    "address": "Nairobi, Kenya",
    "contactPhone": "+254 728 549 832",
    "contactEmail": "prestigemed@example.com",
    "openingHours": [
      { "day": "Monday-Sunday", "hours": "24/7" }
    ],
    "tags": ["24/7 Service", "Emergency Care", "Family Planning", "Youth Services"],
    "ratings": [
      { "userId": "user4", "rating": 5, "comment": "Professional staff and comprehensive services.", "createdAt": "2024-02-17T15:30:00Z" },
      { "userId": "user5", "rating": 4, "comment": "Friendly staff and quick services.", "createdAt": "2024-02-18T12:00:00Z" },
      { "userId": "user6", "rating": 4, "comment": "State-of-the-art equipment and clean facilities.", "createdAt": "2024-02-19T11:00:00Z" }
    ],
    "averageRating": 4.33,
    "totalRatings": 3,
    "availableSlots": [
      {
        "date": "2024-02-20",
        "slots": [
          { "time": "09:00", "available": true },
          { "time": "11:00", "available": true },
          { "time": "14:00", "available": true },
          { "time": "16:00", "available": true },
          { "time": "20:00", "available": true }
        ]
      }
    ],
    "services": [
      { "id": "emergency", "name": "Emergency Care", "duration": 60, "price": 2500 },
      { "id": "family-planning", "name": "Family Planning", "duration": 45, "price": 1000 },
      { "id": "minor-surgery", "name": "Minor Surgery", "duration": 90, "price": 5000 }
    ]
  },
  {
    "id": "jagin-hospital-clinic",
    "name": "Jagin Hospital Clinic",
    "coordinates": [36.8711623, -1.2525719],
    "type": "Clinic",
    "levelOfCare": "Primary Care",
    "distance": "1.2 km",
    "emoji": "🏥",
    "address": "Jagin Hospital Road, Nairobi, Kenya",
    "contactPhone": "+254 722 345 678",
    "contactEmail": "jaginhospital@example.com",
    "openingHours": [
      { "day": "Monday-Sunday", "hours": "24/7" }
    ],
    "tags": ["Referral Hospital", "Advanced Medical Care", "Specialized Treatments"],
    "ratings": [
      { "userId": "user7", "rating": 5, "comment": "Exceptional care and state-of-the-art facilities.", "createdAt": "2024-02-15T14:00:00Z" },
      { "userId": "user8", "rating": 4, "comment": "Highly skilled doctors and nurses.", "createdAt": "2024-02-16T16:00:00Z" },
      { "userId": "user9", "rating": 4, "comment": "Clean and well-maintained facilities.", "createdAt": "2024-02-17T11:00:00Z" }
    ],
    "averageRating": 4.33,
    "totalRatings": 3,
    "availableSlots": [
      {
        "date": "2024-02-20",
        "slots": [
          { "time": "09:00", "available": true },
          { "time": "11:00", "available": true },
          { "time": "14:00", "available": true },
          { "time": "16:00", "available": true }
        ]
      }
    ],
    "services": [
      { "id": "advanced-diagnostics", "name": "Advanced Diagnostic Services", "duration": 120, "price": 5000 },
      { "id": "specialized-surgery", "name": "Specialized Surgical Procedures", "duration": 240, "price": 25000 }
    ]
  },
  {
    "id": "mombasa-coastal-clinic",
    "name": "Mombasa Coastal Clinic",
    "coordinates": [39.6667, -4.0435],
    "type": "Medical Center",
    "levelOfCare": "Secondary Care",
    "distance": "4.3 km",
    "emoji": "⚕️",
    "address": "Moi Avenue, Mombasa, Kenya",
    "contactPhone": "+254 721 234 567",
    "contactEmail": "mombasacoastal@example.com",
    "openingHours": [
      { "day": "Monday-Friday", "hours": "07:00 - 20:00" },
      { "day": "Saturday", "hours": "08:00 - 16:00" }
    ],
    "tags": ["Coastal Region", "Comprehensive Care", "Community Health"],
    "ratings": [
      { "userId": "user10", "rating": 4, "comment": "Good range of services and friendly staff.", "createdAt": "2024-02-18T12:00:00Z" },
      { "userId": "user11", "rating": 4, "comment": "Clean facilities and professional doctors.", "createdAt": "2024-02-19T10:00:00Z" },
      { "userId": "user12", "rating": 4, "comment": "Convenient location and affordable services.", "createdAt": "2024-02-20T11:00:00Z" }
    ],
    "averageRating": 4,
    "totalRatings": 3,
    "availableSlots": [
      {
        "date": "2024-02-20",
        "slots": [
          { "time": "09:00", "available": true },
          { "time": "11:00", "available": true },
          { "time": "14:00", "available": true }
        ]
      }
    ],
    "services": [
      { "id": "general-medicine", "name": "General Medical Consultation", "duration": 45, "price": 2000 },
      { "id": "pediatric-care", "name": "Pediatric Care", "duration": 60, "price": 3000 }
    ]
  },
  {
    "id": "jagin-hospital-clinic-2",
    "name": "Jagin Hospital Clinic",
    "coordinates": [36.8711623, -1.2525719],
    "type": "Clinic",
    "levelOfCare": "Primary Care",
    "distance": "1.2 km",
    "emoji": "🏥",
    "address": "Jagin Hospital Road, Nairobi, Kenya",
    "contactPhone": "+254 722 129 456",
    "contactEmail": "jaginhospital2@example.com",
    "openingHours": [
      { "day": "Monday-Wednesday", "hours": "08:00 - 20:30" }
    ],
    "tags": ["Private", "Medical Services"],
    "ratings": [
      { "userId": "user13", "rating": 4, "comment": "Clean and efficient services.", "createdAt": "2024-02-19T09:00:00Z" },
      { "userId": "user14", "rating": 4, "comment": "Friendly staff and comprehensive care.", "createdAt": "2024-02-20T12:00:00Z" },
      { "userId": "user15", "rating": 4, "comment": "State-of-the-art equipment and professional doctors.", "createdAt": "2024-02-21T11:00:00Z" }
    ],
    "averageRating": 4,
    "totalRatings": 3,
    "availableSlots": [
      {
        "date": "2024-02-20",
        "slots": [
          { "time": "09:00", "available": true },
          { "time": "11:00", "available": true },
          { "time": "14:00", "available": true },
          { "time": "16:00", "available": true },
          { "time": "18:00", "available": true }
        ]
      }
    ],
    "services": [
      { "id": "family-planning", "name": "Family Planning", "duration": 30, "price": 1000 },
      { "id": "malaria", "name": "Malaria Treatment", "duration": 60, "price": 2000 },
      { "id": "outpatient", "name": "Outpatient Services", "duration": 45, "price": 1500 }
    ]
  },
  {
    "id": "ngombeni-dispensary",
    "name": "Ngombeni Dispensary",
    "coordinates": [39.6323544, -4.1281527],
    "type": "Dispensary",
    "levelOfCare": "Primary Care",
    "distance": "2.5 km",
    "emoji": "🏥",
    "address": "Ngombeni Road, Mombasa, Kenya",
    "contactPhone": "+254 721 985 214",
    "contactEmail": "ngombenidispensary@example.com",
    "openingHours": [
      { "day": "Monday-Friday", "hours": "08:00 - 17:00" }
    ],
    "tags": ["Private", "Medical Services"],
    "ratings": [
      { "userId": "user16", "rating": 5, "comment": "Excellent care and quick service.", "createdAt": "2024-02-22T10:00:00Z" },
      { "userId": "user17", "rating": 4, "comment": "Friendly staff and affordable services.", "createdAt": "2024-02-23T12:00:00Z" },
      { "userId": "user18", "rating": 4, "comment": "Clean facilities and professional doctors.", "createdAt": "2024-02-24T11:00:00Z" }
    ],
    "averageRating": 4.33,
    "totalRatings": 3,
    "availableSlots": [
      {
        "date": "2024-02-20",
        "slots": [
          { "time": "09:00", "available": true },
          { "time": "11:00", "available": true },
          { "time": "14:00", "available": true },
          { "time": "16:00", "available": true },
          { "time": "18:00", "available": true }
        ]
      }
    ],
    "services": [
      { "id": "family-planning", "name": "Family Planning", "duration": 30, "price": 1000 },
      { "id": "malaria", "name": "Malaria Treatment", "duration": 60, "price": 2000 },
      { "id": "outpatient", "name": "Outpatient Services", "duration": 45, "price": 1500 }
    ]
  },
  {
    "id": "dg-peters-medical",
    "name": "DG Peter's Medical Center",
    "coordinates": [-1.663103, 37.4451453],
    "type": "Medical Center",
    "levelOfCare": "Primary Care",
    "distance": "3.5 km",
    "emoji": "⚕️",
    "address": "DG Peters Road, Nairobi, Kenya",
    "contactPhone": "+254 727 349 812",
    "contactEmail": "dgpetersmedical@example.com",
    "openingHours": [
      { "day": "Monday-Friday", "hours": "07:00 - 19:00" }
    ],
    "tags": ["Private", "Primary Care"],
    "ratings": [
      { "userId": "user19", "rating": 4, "comment": "Convenient for day services and friendly staff.", "createdAt": "2024-02-25T09:00:00Z" },
      { "userId": "user20", "rating": 4, "comment": "Clean facilities and affordable services.", "createdAt": "2024-02-26T11:00:00Z" },
      { "userId": "user21", "rating": 4, "comment": "Professional doctors and comprehensive care.", "createdAt": "2024-02-27T12:00:00Z" }
    ],
    "averageRating": 4,
    "totalRatings": 3,
    "availableSlots": [
      {
        "date": "2024-02-20",
        "slots": [
          { "time": "09:00", "available": true },
          { "time": "11:00", "available": true },
          { "time": "14:00", "available": true },
          { "time": "16:00", "available": true }
        ]
      }
    ],
    "services": [
      { "id": "family-planning", "name": "Family Planning", "duration": 30, "price": 0 },
      { "id": "general-medical", "name": "General Medical Services", "duration": 45, "price": 2000 },
      { "id": "immunizations", "name": "Vaccinations", "duration": 30, "price": 0 },
      { "id": "malaria-treatment", "name": "Malaria Treatment", "duration": 60, "price": 1000 }
    ]
  },
  {
    "id": "chepkechir-dispensary",
    "name": "Chepkechir Dispensary",
    "coordinates": [1.3690917, 35.12929],
    "type": "Dispensary",
    "levelOfCare": "Primary Care",
    "distance": "2.2 km",
    "emoji": "🏥",
    "address": "Chepkechir Road, Nakuru, Kenya",
    "contactPhone": "+254 721 985 654",
    "contactEmail": "chepkechirdispensary@example.com",
    "openingHours": [
      { "day": "Monday-Thursday", "hours": "08:00 - 17:00" },
      { "day": "Friday", "hours": "08:00 - 15:00" }
    ],
    "tags": ["Private", "Outpatient Services"],
    "ratings": [
      { "userId": "user22", "rating": 3, "comment": "Limited services but convenient location.", "createdAt": "2024-02-28T10:00:00Z" },
      { "userId": "user23", "rating": 3, "comment": "Friendly staff but facilities can be improved.", "createdAt": "2024-02-29T11:00:00Z" },
      { "userId": "user24", "rating": 3, "comment": "Clean facilities and professional doctors.", "createdAt": "2024-03-01T12:00:00Z" }
    ],
    "averageRating": 3,
    "totalRatings": 3,
    "availableSlots": [
      {
        "date": "2024-02-20",
        "slots": [
          { "time": "09:00", "available": true },
          { "time": "11:00", "available": true },
          { "time": "14:00", "available": true }
        ]
      }
    ],
    "services": [
      { "id": "family-planning", "name": "Family Planning", "duration": 30, "price": 0 },
      { "id": "malaria-treatment", "name": "Malaria Treatment", "duration": 60, "price": 1000 }
    ]
  },
  {
    "id": "mt-kenya-chemist",
    "name": "Mt. Kenya Chemist",
    "coordinates": [-1.3108793, 36.7883787],
    "type": "Pharmacy",
    "levelOfCare": "Primary Care",
    "distance": "1.5 km",
    "emoji": "⚕️",
    "address": "Mt. Kenya Road, Nairobi, Kenya",
    "contactPhone": "+254 722 985 421",
    "contactEmail": "mtkenyapharmacy@example.com",
    "openingHours": [
      { "day": "Monday-Sunday", "hours": "06:00 - 22:00" }
    ],
    "tags": ["Private", "Pharmacy"],
    "ratings": [
      { "userId": "user25", "rating": 5, "comment": "Ample stock and friendly staff.", "createdAt": "2024-02-24T09:00:00Z" },
      { "userId": "user26", "rating": 4, "comment": "Convenient location and affordable prices.", "createdAt": "2024-02-25T11:00:00Z" },
      { "userId": "user27", "rating": 4, "comment": "Clean facilities and professional pharmacists.", "createdAt": "2024-02-26T12:00:00Z" }
    ],
    "averageRating": 4.33,
    "totalRatings": 3,
    "availableSlots": [
      {
        "date": "2024-02-20",
        "slots": [
          { "time": "09:00", "available": true },
          { "time": "11:00", "available": true },
          { "time": "14:00", "available": true },
          { "time": "16:00", "available": true }
        ]
      }
    ],
    "services": [
      { "id": "family-planning", "name": "Family Planning", "duration": 30, "price": 0 },
      { "id": "pregnancy-test", "name": "Pregnancy Test", "duration": 15, "price": 2000 }
    ]
  },
  {
    "id": "urifold-clinic",
    "name": "Urifold Clinic",
    "coordinates": [-1.2604322, 36.8670035],
    "type": "Clinic",
    "levelOfCare": "Primary Care",
    "distance": "2.8 km",
    "emoji": "🏥",
    "address": "Urifold Road, Nairobi, Kenya",
    "contactPhone": "+254 727 985 123",
    "contactEmail": "urifoldclinic@example.com",
    "openingHours": [
      { "day": "Saturday-Thursday", "hours": "08:30 - 20:00" },
      { "day": "Friday", "hours": "08:30 - 15:30" }
    ],
    "tags": ["Private", "Comprehensive Care"],
    "ratings": [
      { "userId": "user28", "rating": 4, "comment": "Accessible and comprehensive care.", "createdAt": "2024-02-27T10:00:00Z" },
      { "userId": "user29", "rating": 4, "comment": "Friendly staff and clean facilities.", "createdAt": "2024-02-28T11:00:00Z" },
      { "userId": "user30", "rating": 4, "comment": "Professional doctors and affordable services.", "createdAt": "2024-02-29T12:00:00Z" }
    ],
    "averageRating": 4,
    "totalRatings": 3,
    "availableSlots": [
      {
        "date": "2024-02-20",
        "slots": [
          { "time": "09:00", "available": true },
          { "time": "11:00", "available": true },
          { "time": "14:00", "available": true },
          { "time": "16:00", "available": true }
        ]
      }
    ],
    "services": [
      { "id": "antenatal", "name": "Antenatal Care", "duration": 45, "price": 0 },
      { "id": "dental", "name": "Dental Services", "duration": 60, "price": 3000 },
      { "id": "family-planning", "name": "Family Planning", "duration": 30, "price": 0 },
      { "id": "immunization", "name": "Immunizations", "duration": 30, "price": 0 },
      { "id": "malaria", "name": "Malaria Treatment", "duration": 60, "price": 1000 },
      { "id": "minor-surgery", "name": "Minor Surgery", "duration": 90, "price": 5000 },
      { "id": "pregnancy-test", "name": "Pregnancy Test", "duration": 15, "price": 500 },
      { "id": "vct-hiv", "name": "VCT HIV Counselling Test", "duration": 30, "price": 0 }
    ]
  },
  {
    "id": "jaribu-herbs",
    "name": "Jaribu Herbs",
    "coordinates": [-1.3113121, 36.7874552],
    "type": "Herbal Clinic",
    "levelOfCare": "Primary Care",
    "distance": "1.2 km",
    "emoji": "🌿",
    "address": "Jaribu Herbs Road, Nairobi, Kenya",
    "contactPhone": "+254 722 985 567",
    "contactEmail": "jaribuhherbs@example.com",
    "openingHours": [
      { "day": "Monday-Saturday", "hours": "09:00 - 18:00" }
    ],
    "tags": ["Private", "Herbal Medicine"],
    "ratings": [
      { "userId": "user31", "rating": 5, "comment": "Effective herbal remedies.", "createdAt": "2024-02-25T11:00:00Z" },
      { "userId": "user32", "rating": 4, "comment": "Friendly staff and clean facilities.", "createdAt": "2024-02-26T12:00:00Z" },
      { "userId": "user33", "rating": 4, "comment": "Professional herbalists and affordable services.", "createdAt": "2024-02-27T11:00:00Z" }
    ],
    "averageRating": 4.33,
    "totalRatings": 3,
    "availableSlots": [
      {
        "date": "2024-02-20",
        "slots": [
          { "time": "09:00", "available": true },
          { "time": "11:00", "available": true },
          { "time": "14:00", "available": true },
          { "time": "16:00", "available": true }
        ]
      }
    ],
    "services": [
      { "id": "dental", "name": "Dental Services", "duration": 60, "price": 3000 },
      { "id": "malaria", "name": "Malaria Treatment", "duration": 60, "price": 2000 },
      { "id": "outpatient", "name": "Outpatient Services", "duration": 45, "price": 1500 }
    ]
  },
  {
    "id": "uzima-health",
    "name": "Uzima White Health Center",
    "coordinates": [-1.263545, 36.8600433],
    "type": "Clinic",
    "levelOfCare": "Primary Care",
    "distance": "2.5 km",
    "emoji": "🏥",
    "address": "Uzima Road, Nairobi, Kenya",
    "contactPhone": "+254 727 985 678",
    "contactEmail": "uzimawhitehealth@example.com",
    "openingHours": [
      { "day": "Monday-Friday", "hours": "08:00 - 18:00" }
    ],
    "tags": ["Private", "Medical Center"],
    "ratings": [
      { "userId": "user34", "rating": 4, "comment": "Comprehensive medical services.", "createdAt": "2024-02-28T10:00:00Z" },
      { "userId": "user35", "rating": 4, "comment": "Friendly staff and clean facilities.", "createdAt": "2024-02-29T11:00:00Z" },
      { "userId": "user36", "rating": 4, "comment": "Professional doctors and affordable services.", "createdAt": "2024-03-01T12:00:00Z" }
    ],
    "averageRating": 4,
    "totalRatings": 3,
    "availableSlots": [
      {
        "date": "2024-02-20",
        "slots": [
          { "time": "09:00", "available": true },
          { "time": "11:00", "available": true },
          { "time": "14:00", "available": true },
          { "time": "16:00", "available": true },
          { "time": "18:00", "available": true }
        ]
      }
    ],
    "services": [
      { "id": "family-planning", "name": "Family Planning", "duration": 30, "price": 1000 },
      { "id": "inpatient", "name": "Inpatient Services", "duration": 240, "price": 0 },
      { "id": "maternity", "name": "Maternity Care", "duration": 240, "price": 15000 },
      { "id": "outpatient", "name": "Outpatient Services", "duration": 60, "price": 1000 }
    ]
  }
]

