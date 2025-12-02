// FiltersContext.tsx
import React, { createContext, useContext, useState } from 'react';

export interface FilterState {
  table: string;
  category: string;
  priceRange: [number, number];
  rating: number;
  dateRange: string;
  showTrendingOnly: boolean;
  sortBy: string;
}

interface FiltersContextType {
  filters: FilterState;
  setFilters: (filters: FilterState | ((prev: FilterState) => FilterState)) => void;
  applyFilters: (newFilters: FilterState) => void;  // âœ… Fixed: accepts filters parameter
  appliedFilters: FilterState;  // âœ… Fixed: stores applied filters state
  filterVersion: number;
}

const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

export function FiltersProvider({ children }: { children: React.ReactNode }) {
  const defaultFilters: FilterState = {
    table: "flipkart",
    category: "All Categories",
    priceRange: [0, 100000],
    rating: 0,
    dateRange: "30d",
    showTrendingOnly: false,
    sortBy: "sales_desc",
  };

  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const [appliedFilters, setAppliedFilters] = useState<FilterState>(defaultFilters);
  const [filterVersion, setFilterVersion] = useState(0);

  // âœ… This function accepts new filters and triggers refetch
  const applyFilters = (newFilters: FilterState) => {
    console.log("ðŸ”„ Applying filters:", newFilters);
    setAppliedFilters(newFilters);  // Store the applied filters
    setFilterVersion(prev => prev + 1);  // Increment version to trigger refetch
  };

  return (
    <FiltersContext.Provider 
      value={{ 
        filters, 
        setFilters, 
        applyFilters, 
        appliedFilters,  // âœ… Now provides the applied filters state
        filterVersion 
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}

export function useFilters() {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error('useFilters must be used within FiltersProvider');
  }
  return context;
}