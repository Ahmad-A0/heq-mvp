type UUID = string;
type TIMESTAMP = string; // ISO 8601 format date-time string
type DATE = string; // YYYY-MM-DD format
type VARCHAR = string;
type DECIMAL = number;
type INT = number;
type BOOLEAN = boolean;
type ENUM = string; // Replace with specific ENUM types as necessary

export interface Patient_Table {
    patient_id: UUID;
    facility_id: UUID;
    registration_date: TIMESTAMP;
    birth_year: INT;
    gender: ENUM; // e.g., "Male", "Female", "Other"
    location_code: UUID;
    socioeconomic_status: ENUM;
    occupation_category: ENUM;
    updated_at: TIMESTAMP;
    is_active: BOOLEAN;
}

export interface Location_Reference {
    location_code: UUID;
    latitude: DECIMAL;
    longitude: DECIMAL;
    administrative_level1: VARCHAR;
    administrative_level2: VARCHAR;
    catchment_area: VARCHAR;
}

export interface Encounter_Table {
    encounter_id: UUID;
    patient_id: UUID;
    facility_id: UUID;
    encounter_date: TIMESTAMP;
    encounter_type: ENUM;
    provider_id: UUID;
    chief_complaint: VARCHAR;
    visit_priority: ENUM;
    encounter_status: ENUM;
    payment_type: ENUM;
    created_at: TIMESTAMP;
}

export interface Diagnosis_Table {
    diagnosis_id: UUID;
    encounter_id: UUID;
    diagnosis_code: VARCHAR;
    diagnosis_system: ENUM;
    diagnosis_type: ENUM;
    certainty: ENUM;
    severity: ENUM;
    onset_date: DATE;
}

export interface Treatment_Table {
    treatment_id: UUID;
    encounter_id: UUID;
    treatment_type: ENUM;
    treatment_code: VARCHAR;
    dosage: VARCHAR;
    frequency: VARCHAR;
    duration: VARCHAR;
    start_date: DATE;
    end_date: DATE;
    status: ENUM;
}

export interface Investigation_Table {
    investigation_id: UUID;
    encounter_id: UUID;
    test_code: VARCHAR;
    test_category: ENUM;
    result_value: VARCHAR;
    result_unit: VARCHAR;
    reference_range: VARCHAR;
    result_status: ENUM;
    performed_date: TIMESTAMP;
    reported_date: TIMESTAMP;
}

export interface Outcome_Table {
    outcome_id: UUID;
    encounter_id: UUID;
    outcome_type: ENUM;
    outcome_value: VARCHAR;
    measurement_date: DATE;
    next_followup_date: DATE;
    notes: VARCHAR;
}

export interface Medication_Details {
    treatment_id: UUID;
    drug_brand_name: VARCHAR;
    generic_name: VARCHAR;
    manufacturer: VARCHAR;
    batch_number: VARCHAR;
    adverse_effects: VARCHAR;
    effectiveness_score: INT;
}

export interface Medical_Devices {
    treatment_id: UUID;
    device_type: VARCHAR;
    manufacturer: VARCHAR;
    model_number: VARCHAR;
    usage_duration: INT;
    effectiveness_score: INT;
}

export interface Cost_Analytics {
    encounter_id: UUID;
    procedure_cost: DECIMAL;
    supplies_cost: DECIMAL;
    personnel_cost: DECIMAL;
    payment_received: DECIMAL;
    payment_date: TIMESTAMP;
}

export interface Social_Determinants {
    patient_id: UUID;
    assessment_date: DATE;
    housing_status: ENUM;
    transportation_access: ENUM;
    food_security: ENUM;
    support_network: ENUM;
    education_level: ENUM;
    updated_at: TIMESTAMP;
}

export interface Resource_Usage {
    encounter_id: UUID;
    resource_type: ENUM;
    quantity_used: DECIMAL;
    unit_cost: DECIMAL;
    total_cost: DECIMAL;
    reimbursement_status: ENUM;
}

export interface Quality_Metrics {
    encounter_id: UUID;
    metric_type: ENUM;
    metric_value: DECIMAL;
    benchmark_value: DECIMAL;
    compliance_status: ENUM;
    measurement_date: TIMESTAMP;
}

// Additional export interfaces for portable health vault
export interface Consent_Management {
    consent_id: UUID;
    patient_id: UUID;
    provider_id: UUID;
    permission_level: ENUM;
    granted_date: TIMESTAMP;
    expiration_date: TIMESTAMP;
}

export interface Provider_Registry {
    provider_id: UUID;
    name: VARCHAR;
    digital_certificate: VARCHAR;
    preferred_data_formats: ENUM[];
    last_access: TIMESTAMP;
}

export interface Data_Provenance {
    data_id: UUID;
    source: VARCHAR;
    modification_date: TIMESTAMP;
    modified_by: UUID;
    verification_status: ENUM;
}

export interface UserObject {
    demographics: Patient_Table;
    location: Location_Reference;
    encounters: Encounter[];
    diagnoses: Diagnosis[];
    treatments: Treatment[];
    investigations: Investigation[];
    outcomes: Outcome[];
    socialDeterminants: Social_Determinants;
    consentManagement: Consent_Management[];
    providerRegistry: Provider_Registry[];
    dataProvenance: Data_Provenance[];
    history: {
        clinicalEncounters: Encounter[];
        diagnosisHistory: Diagnosis[];
        treatmentHistory: Treatment[];
        investigationHistory: Investigation[];
        outcomeHistory: Outcome[];
    };
}

// Expanded export interfaces for nested objects
export interface Encounter extends Encounter_Table {
    costAnalytics: Cost_Analytics;
    resourceUsage: Resource_Usage[];
    qualityMetrics: Quality_Metrics[];
}

export interface Diagnosis extends Diagnosis_Table {}

export interface Treatment extends Treatment_Table {
    medicationDetails: Medication_Details;
    medicalDevices: Medical_Devices[];
}

export interface Investigation extends Investigation_Table {}

export interface Outcome extends Outcome_Table {}