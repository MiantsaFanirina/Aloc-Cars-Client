"use client"
import {Dispatch, SetStateAction, useEffect} from "react";
import {FiltersData} from "@/features/our-vehicles/data/filtersData";
import {ChevronLeft} from "lucide-react";
import Link from "next/link";

const Filters = (
    {
        FilterValue,
        onFilterChange,
        isFilterOpen,
        onFilterOpen
    } : {
        FilterValue: string,
        onFilterChange:  Dispatch<SetStateAction<string>>,
        isFilterOpen: boolean,
        onFilterOpen:  Dispatch<SetStateAction<boolean>>
    }
) => {

    useEffect(() => {
        console.log(isFilterOpen);
    }, [isFilterOpen]);

    return (
        <div className={'w-full flex flex-wrap gap-2 z-50'}>
            {FiltersData.map(({content, value}) => (
                <Link
                    href={`/our-vehicles?filter=${value}`}
                    onClick={() => {
                        onFilterChange(value)
                    }}
                    key={content}
                    className={`
                        hidden md:block
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
                </Link>
            ))}


            <div
                className={`
                    ${isFilterOpen ? "left-0" : "left-full"} 
                    lg:hidden 
                    transition-all duration-500 
                    fixed top-0 w-screen h-screen bg-white/95 backdrop-blur-3xl z-50
                    pt-[144px]
                    px-[36px]
                    flex 
                    flex-col gap-[36px]
                `}
            >
                <div
                    className={'flex items-center gap-1 text-[#F16625] cursor-pointer'}
                    onClick={() => {onFilterOpen(!isFilterOpen)}}
                >
                    <ChevronLeft width={16} height={16} />
                    <span className={'md:text-sm font-bold'}>Back</span>
                </div>
                <div className={'w-full h-fit flex gap-2 flex-wrap'}>
                    {FiltersData.map(({content, value}) => (
                        <div
                            onClick={() => {
                                onFilterChange(value);
                                onFilterOpen(!isFilterOpen);
                            }}
                            key={content}
                            className={`
                        cursor-pointer
                        ${FilterValue === value ? "border-[#F16625] text-white bg-[#F16625]" : "text-[#1E1E1E] border-[#1E1E1E]"}
                        hover:border-[#F16625]
                        hover:text-white
                        hover:bg-[#F16625]
                        transition-all
                        font-semibold shrink-0 text-sm px-3 py-1.5 border rounded-3xl
                        h-fit
                        w-fit
                    `}
                        >
                            {content}
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
};

export default Filters;