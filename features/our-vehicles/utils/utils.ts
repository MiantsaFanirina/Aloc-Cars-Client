import {FiltersData} from "@/features/our-vehicles/data/filtersData";

export const getContentByValue = (value: string) => {
    const filter = FiltersData.find(item => item.value === value);
    return filter ? filter.content : null;
};