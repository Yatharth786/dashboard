import { createContext, useContext, useState, ReactNode } from "react";

// ✅ Export Filters interface
export interface Filters {
  table: string;
  category: string;
  priceRange: [number, number];
  rating: number;
  dateRange: string;
  showTrendingOnly: boolean;
  sortBy: string;
}

interface FiltersContextType {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  applyFilters: (newFilters: Filters) => void;
  appliedFilters: Filters;
  filterVersion: number; // Used to trigger re-fetches
}

const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

export const FiltersProvider = ({ children }: { children: ReactNode }) => {
  const defaultFilters: Filters = {
    table: "flipkart",
    category: "All Categories",
    priceRange: [0, 5000000],
    rating: 0,
    dateRange: "30d",
    showTrendingOnly: false,
    sortBy: "sales_desc",
  };

  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [appliedFilters, setAppliedFilters] = useState<Filters>(defaultFilters);
  const [filterVersion, setFilterVersion] = useState(0);

  // ✅ Function to apply filters and trigger data refresh
  const applyFilters = (newFilters: Filters) => {
    setAppliedFilters(newFilters);
    setFilterVersion(prev => prev + 1); // Increment to trigger useEffect in consumers
    console.log("Filters applied in context:", newFilters);
  };

  return (
    <FiltersContext.Provider 
      value={{ 
        filters, 
        setFilters, 
        applyFilters,
        appliedFilters,
        filterVersion 
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

// ✅ Export useFilters hook
export const useFilters = (): FiltersContextType => {
  const context = useContext(FiltersContext);
  if (!context) throw new Error("useFilters must be used within a FiltersProvider");
  return context;
};