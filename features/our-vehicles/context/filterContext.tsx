'use client';
import {createContext, useState, useContext, FC} from "react";
import {FilterContextType, MyContextProviderProps} from "@/features/our-vehicles/types/type";


// Create the context with a default value
const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterContextProvider: FC<MyContextProviderProps> = ({ children }) => {
    const [FilterValue, setFilterValue] = useState<string>('all');

    return (
        <FilterContext.Provider value={{ FilterValue, setFilterValue }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = (): FilterContextType => {
    const context = useContext(FilterContext);
    if (!context) {
        throw new Error("useMyContext must be used within a ScrollableContentContextProvider");
    }
    return context;
};
