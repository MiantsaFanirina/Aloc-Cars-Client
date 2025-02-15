import {Dispatch, SetStateAction} from "react";
import {FiltersData} from "@/features/our-vehicles/data/filtersData";

const Filters = (
    {FilterValue, onFilterChange} : {FilterValue: string, onFilterChange:  Dispatch<SetStateAction<string>>}
) => {


    return (
        <div className={'w-full flex flex-wrap gap-2'}>
            {FiltersData.map(({content, value}) => (
                <div
                    onClick={() => {onFilterChange(value)}}
                    key={content}
                    className={`
                        cursor-pointer
                        ${FilterValue === value ? "border-[#F16625] text-white bg-[#F16625]" : "text-[#1E1E1E] border-[#1E1E1E]"}
                        hover:border-[#F16625]
                        hover:text-white
                        hover:bg-[#F16625]
                        transition-all
                        font-semibold shrink-0 text-sm px-3 py-1.5 border rounded-3xl
                    `}
                >
                    {content}
                </div>
            ))}
        </div>
    );
};

export default Filters;