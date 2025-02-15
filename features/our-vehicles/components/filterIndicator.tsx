import {FiltersData} from "@/features/our-vehicles/data/filtersData";
import Link from "next/link";

const FilterIndicator = (
    {FilterValue}: {FilterValue: string}
) => {
    const getContentByValue = (value: string) => {
        const filter = FiltersData.find(item => item.value === value);
        return filter ? filter.content : null;
    };
    return (<>
        <Link
            href={'/our-vehicles'}
            className={'text-sm font-bold text-[#F16625]'}
        >
            {getContentByValue(FilterValue)}
        </Link>
    </>);
};

export default FilterIndicator;