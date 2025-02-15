// Create the provider component
import {Dispatch, ReactNode, SetStateAction} from "react";

// Define the shape of the context data
export interface FilterContextType {
    FilterValue: string;
    setFilterValue: Dispatch<SetStateAction<string>>;
}


export interface MyContextProviderProps {
    children: ReactNode;
}
