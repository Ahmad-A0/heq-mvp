import React, { createContext, useContext } from 'react';
import { Facility, FacilitySearchFilters, RatingSubmission } from '../types';

interface FacilityContextType {
  facilities: Facility[];
  searchFilters: FacilitySearchFilters;
  onSearchFiltersChange: (filters: FacilitySearchFilters) => void;
  onSearchFocus: () => void;
  onFacilitySelect: (facility: Facility | null) => void;
  selectedFacility: Facility | null;
  onRatingSubmit: (rating: RatingSubmission) => void;
}

const FacilityContext = createContext<FacilityContextType | null>(null);

export function FacilityProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: FacilityContextType;
}) {
  return (
    <FacilityContext.Provider value={value}>
      {children}
    </FacilityContext.Provider>
  );
}

export function useFacility() {
  const context = useContext(FacilityContext);
  if (!context) {
    throw new Error('useFacility must be used within a FacilityProvider');
  }
  return context;
}