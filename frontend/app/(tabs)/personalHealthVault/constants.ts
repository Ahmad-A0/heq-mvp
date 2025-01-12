import { UserObject } from './types';

export const currentUser: UserObject = {
    demographics: {
        patient_id: "uuid-uganda-001",
        facility_id: "uuid-facility-001",
        registration_date: "2024-01-10T08:45:00Z",
        birth_year: 1990,
        gender: "Male",
        location_code: "loc-uganda-001",
        socioeconomic_status: "Middle class",
        occupation_category: "Agriculture",
        updated_at: "2024-12-09T14:30:00Z",
        is_active: true,
    },
    location: {
        location_code: "loc-uganda-001",
        latitude: 1.373333,
        longitude: 32.290275,
        administrative_level1: "Central Region",
        administrative_level2: "Kampala",
        catchment_area: "Makindye Division",
    },
    encounters: [
        {
            encounter_id: "enc-uganda-001",
            patient_id: "uuid-uganda-001",
            facility_id: "uuid-facility-001",
            encounter_date: "2024-02-15T09:30:00Z",
            encounter_type: "Inpatient",
            provider_id: "prov-uganda-001",
            chief_complaint: "Persistent cough",
            visit_priority: "High",
            encounter_status: "Completed",
            payment_type: "National Health Insurance",
            created_at: "2024-02-15T09:00:00Z",
            costAnalytics: {
                encounter_id: "enc-uganda-001",
                procedure_cost: 100.00,
                supplies_cost: 25.00,
                personnel_cost: 75.00,
                payment_received: 200.00,
                payment_date: "2024-02-16T11:00:00Z",
            },
            resourceUsage: [
                {
                    encounter_id: "enc-uganda-001",
                    resource_type: "X-Ray Machine",
                    quantity_used: 1,
                    unit_cost: 50.00,
                    total_cost: 50.00,
                    reimbursement_status: "Pending",
                },
            ],
            qualityMetrics: [
                {
                    encounter_id: "enc-uganda-001",
                    metric_type: "Patient Satisfaction",
                    metric_value: 4.5,
                    benchmark_value: 4.0,
                    compliance_status: "Above Average",
                    measurement_date: "2024-02-15T10:00:00Z",
                },
            ],
        },
        // Additional historical encounters
        {
            encounter_id: "enc-uganda-002",
            patient_id: "uuid-uganda-001",
            facility_id: "uuid-facility-002",
            encounter_date: "2023-12-10T11:00:00Z",
            encounter_type: "Outpatient",
            provider_id: "prov-uganda-002",
            chief_complaint: "Fever and fatigue",
            visit_priority: "Medium",
            encounter_status: "Completed",
            payment_type: "Self-pay",
            created_at: "2023-12-10T10:30:00Z",
            costAnalytics: {
                encounter_id: "enc-uganda-002",
                procedure_cost: 50.00,
                supplies_cost: 15.00,
                personnel_cost: 35.00,
                payment_received: 100.00,
                payment_date: "2023-12-15T12:00:00Z",
            },
            resourceUsage: [
                {
                    encounter_id: "enc-uganda-002",
                    resource_type: "Blood Test Kit",
                    quantity_used: 1,
                    unit_cost: 10.00,
                    total_cost: 10.00,
                    reimbursement_status: "Completed",
                },
            ],
            qualityMetrics: [
                {
                    encounter_id: "enc-uganda-002",
                    metric_type: "Timeliness of Care",
                    metric_value: 5.0,
                    benchmark_value: 4.3,
                    compliance_status: "Above Benchmark",
                    measurement_date: "2023-12-10T11:30:00Z",
                },
            ],
        },
    ],
    diagnoses: [
        {
            diagnosis_id: "diag-uganda-001",
            encounter_id: "enc-uganda-001",
            diagnosis_code: "J45",
            diagnosis_system: "ICD-10",
            diagnosis_type: "Primary",
            certainty: "Confirmed",
            severity: "Moderate",
            onset_date: "2024-02-10",
        },
        {
            diagnosis_id: "diag-uganda-002",
            encounter_id: "enc-uganda-002",
            diagnosis_code: "A09",
            diagnosis_system: "ICD-10",
            diagnosis_type: "Primary",
            certainty: "Probable",
            severity: "Mild",
            onset_date: "2023-12-05",
        },
    ],
    treatments: [
        {
            treatment_id: "treat-uganda-001",
            encounter_id: "enc-uganda-001",
            treatment_type: "Medication",
            treatment_code: "R03",
            dosage: "100mg",
            frequency: "Twice daily",
            duration: "7 days",
            start_date: "2024-02-15",
            end_date: "2024-02-22",
            status: "Completed",
            medicationDetails: {
                treatment_id: "treat-uganda-001",
                drug_brand_name: "Salbutamol",
                generic_name: "Salbutamol Sulphate",
                manufacturer: "Aspen Pharmacare",
                batch_number: "BATCH-UG-001",
                adverse_effects: "None reported",
                effectiveness_score: 4,
            },
            medicalDevices: [],
        },
        {
            treatment_id: "treat-uganda-002",
            encounter_id: "enc-uganda-002",
            treatment_type: "Medication",
            treatment_code: "B02",
            dosage: "500mg",
            frequency: "Once daily",
            duration: "5 days",
            start_date: "2023-12-10",
            end_date: "2023-12-15",
            status: "Completed",
            medicationDetails: {
                treatment_id: "treat-uganda-002",
                drug_brand_name: "Paracetamol",
                generic_name: "Acetaminophen",
                manufacturer: "Cipla Quality Chemical Industries",
                batch_number: "BATCH-UG-002",
                adverse_effects: "None reported",
                effectiveness_score: 3,
            },
            medicalDevices: [],
        },
    ],
    investigations: [
        {
            investigation_id: "invest-uganda-001",
            encounter_id: "enc-uganda-001",
            test_code: "L46",
            test_category: "Blood Test",
            result_value: "5.0",
            result_unit: "mg/L",
            reference_range: "4.0 - 6.0 mg/L",
            result_status: "Normal",
            performed_date: "2024-02-15T11:00:00Z",
            reported_date: "2024-02-16T09:00:00Z",
        },
        {
            investigation_id: "invest-uganda-002",
            encounter_id: "enc-uganda-002",
            test_code: "T65",
            test_category: "Full Blood Count",
            result_value: "Normal",
            result_unit: "",
            reference_range: "Normal range",
            result_status: "Normal",
            performed_date: "2023-12-10T14:00:00Z",
            reported_date: "2023-12-11T10:00:00Z",
        },
    ],
    outcomes: [
        {
            outcome_id: "outcome-uganda-001",
            encounter_id: "enc-uganda-001",
            outcome_type: "Symptom Relief",
            outcome_value: "Improved",
            measurement_date: "2024-02-22",
            next_followup_date: "2024-03-22",
            notes: "Patient reports significant improvement in breathing.",
        },
        {
            outcome_id: "outcome-uganda-002",
            encounter_id: "enc-uganda-002",
            outcome_type: "Recovery",
            outcome_value: "Full recovery",
            measurement_date: "2023-12-20",
            next_followup_date: "2024-01-20",
            notes: "Complete recovery from fever and fatigue.",
        },
    ],
    socialDeterminants: {
        patient_id: "uuid-uganda-001",
        assessment_date: "2024-01-09",
        housing_status: "Owned house",
        transportation_access: "Public transport",
        food_security: "Food secure",
        support_network: "Moderate",
        education_level: "High school",
        updated_at: "2024-01-10T12:00:00Z",
    },
    consentManagement: [
        {
            consent_id: "consent-uganda-001",
            patient_id: "uuid-uganda-001",
            provider_id: "prov-uganda-001",
            permission_level: "Full",
            granted_date: "2024-01-10T08:00:00Z",
            expiration_date: "2025-01-10T08:00:00Z",
        },
    ],
    providerRegistry: [
        {
            provider_id: "prov-uganda-001",
            name: "Dr. John Kato",
            digital_certificate: "cert-uganda-001",
            preferred_data_formats: ["FHIR", "HL7"],
            last_access: "2024-02-15T10:00:00Z",
        },
        {
            provider_id: "prov-uganda-002",
            name: "Dr. Mary Nansubuga",
            digital_certificate: "cert-uganda-002",
            preferred_data_formats: ["HL7"],
            last_access: "2023-12-10T12:00:00Z",
        },
    ],
    dataProvenance: [
        {
            data_id: "data-uganda-001",
            source: "Kampala General Hospital",
            modification_date: "2024-02-15T11:30:00Z",
            modified_by: "prov-uganda-001",
            verification_status: "Verified",
        },
        {
            data_id: "data-uganda-002",
            source: "Mulago Hospital",
            modification_date: "2023-12-10T15:00:00Z",
            modified_by: "prov-uganda-002",
            verification_status: "Verified",
        },
    ],
    history: {
        clinicalEncounters: [
            // Repeating current and historical encounters here for the patient's full history
            {
                encounter_id: "enc-uganda-001",
                patient_id: "uuid-uganda-001",
                facility_id: "uuid-facility-001",
                encounter_date: "2024-02-15T09:30:00Z",
                encounter_type: "Inpatient",
                provider_id: "prov-uganda-001",
                chief_complaint: "Persistent cough",
                visit_priority: "High",
                encounter_status: "Completed",
                payment_type: "National Health Insurance",
                created_at: "2024-02-15T09:00:00Z",
                costAnalytics: {
                    encounter_id: "enc-uganda-001",
                    procedure_cost: 100.00,
                    supplies_cost: 25.00,
                    personnel_cost: 75.00,
                    payment_received: 200.00,
                    payment_date: "2024-02-16T11:00:00Z",
                },
                resourceUsage: [
                    {
                        encounter_id: "enc-uganda-001",
                        resource_type: "X-Ray Machine",
                        quantity_used: 1,
                        unit_cost: 50.00,
                        total_cost: 50.00,
                        reimbursement_status: "Pending",
                    },
                ],
                qualityMetrics: [
                    {
                        encounter_id: "enc-uganda-001",
                        metric_type: "Patient Satisfaction",
                        metric_value: 4.5,
                        benchmark_value: 4.0,
                        compliance_status: "Above Average",
                        measurement_date: "2024-02-15T10:00:00Z",
                    },
                ],
            },
            {
                encounter_id: "enc-uganda-002",
                patient_id: "uuid-uganda-001",
                facility_id: "uuid-facility-002",
                encounter_date: "2023-12-10T11:00:00Z",
                encounter_type: "Outpatient",
                provider_id: "prov-uganda-002",
                chief_complaint: "Fever and fatigue",
                visit_priority: "Medium",
                encounter_status: "Completed",
                payment_type: "Self-pay",
                created_at: "2023-12-10T10:30:00Z",
                costAnalytics: {
                    encounter_id: "enc-uganda-002",
                    procedure_cost: 50.00,
                    supplies_cost: 15.00,
                    personnel_cost: 35.00,
                    payment_received: 100.00,
                    payment_date: "2023-12-15T12:00:00Z",
                },
                resourceUsage: [
                    {
                        encounter_id: "enc-uganda-002",
                        resource_type: "Blood Test Kit",
                        quantity_used: 1,
                        unit_cost: 10.00,
                        total_cost: 10.00,
                        reimbursement_status: "Completed",
                    },
                ],
                qualityMetrics: [
                    {
                        encounter_id: "enc-uganda-002",
                        metric_type: "Timeliness of Care",
                        metric_value: 5.0,
                        benchmark_value: 4.3,
                        compliance_status: "Above Benchmark",
                        measurement_date: "2023-12-10T11:30:00Z",
                    },
                ],
            },
        ],
        diagnosisHistory: [
            {
                diagnosis_id: "diag-uganda-001",
                encounter_id: "enc-uganda-001",
                diagnosis_code: "J45",
                diagnosis_system: "ICD-10",
                diagnosis_type: "Primary",
                certainty: "Confirmed",
                severity: "Moderate",
                onset_date: "2024-02-10",
            },
            {
                diagnosis_id: "diag-uganda-002",
                encounter_id: "enc-uganda-002",
                diagnosis_code: "A09",
                diagnosis_system: "ICD-10",
                diagnosis_type: "Primary",
                certainty: "Probable",
                severity: "Mild",
                onset_date: "2023-12-05",
            },
        ],
        treatmentHistory: [
            {
                treatment_id: "treat-uganda-001",
                encounter_id: "enc-uganda-001",
                treatment_type: "Medication",
                treatment_code: "R03",
                dosage: "100mg",
                frequency: "Twice daily",
                duration: "7 days",
                start_date: "2024-02-15",
                end_date: "2024-02-22",
                status: "Completed",
                medicationDetails: {
                    treatment_id: "treat-uganda-001",
                    drug_brand_name: "Salbutamol",
                    generic_name: "Salbutamol Sulphate",
                    manufacturer: "Aspen Pharmacare",
                    batch_number: "BATCH-UG-001",
                    adverse_effects: "None reported",
                    effectiveness_score: 4,
                },
                medicalDevices: [],
            },
            {
                treatment_id: "treat-uganda-002",
                encounter_id: "enc-uganda-002",
                treatment_type: "Medication",
                treatment_code: "B02",
                dosage: "500mg",
                frequency: "Once daily",
                duration: "5 days",
                start_date: "2023-12-10",
                end_date: "2023-12-15",
                status: "Completed",
                medicationDetails: {
                    treatment_id: "treat-uganda-002",
                    drug_brand_name: "Paracetamol",
                    generic_name: "Acetaminophen",
                    manufacturer: "Cipla Quality Chemical Industries",
                    batch_number: "BATCH-UG-002",
                    adverse_effects: "None reported",
                    effectiveness_score: 3,
                },
                medicalDevices: [],
            },
        ],
        investigationHistory: [
            {
                investigation_id: "invest-uganda-001",
                encounter_id: "enc-uganda-001",
                test_code: "L46",
                test_category: "Blood Test",
                result_value: "5.0",
                result_unit: "mg/L",
                reference_range: "4.0 - 6.0 mg/L",
                result_status: "Normal",
                performed_date: "2024-02-15T11:00:00Z",
                reported_date: "2024-02-16T09:00:00Z",
            },
            {
                investigation_id: "invest-uganda-002",
                encounter_id: "enc-uganda-002",
                test_code: "T65",
                test_category: "Full Blood Count",
                result_value: "Normal",
                result_unit: "",
                reference_range: "Normal range",
                result_status: "Normal",
                performed_date: "2023-12-10T14:00:00Z",
                reported_date: "2023-12-11T10:00:00Z",
            },
        ],
        outcomeHistory: [
            {
                outcome_id: "outcome-uganda-001",
                encounter_id: "enc-uganda-001",
                outcome_type: "Symptom Relief",
                outcome_value: "Improved",
                measurement_date: "2024-02-22",
                next_followup_date: "2024-03-22",
                notes: "Patient reports significant improvement in breathing.",
            },
            {
                outcome_id: "outcome-uganda-002",
                encounter_id: "enc-uganda-002",
                outcome_type: "Recovery",
                outcome_value: "Full recovery",
                measurement_date: "2023-12-20",
                next_followup_date: "2024-01-20",
                notes: "Complete recovery from fever and fatigue.",
            },
        ],
    },
};