import Link from "next/link";
import {Dispatch, SetStateAction} from "react";
import {Filter} from "lucide-react";
import {getContentByValue} from "@/features/our-vehicles/utils/utils";

const FilterIndicator = (
    {
        FilterValue,
        isFilterOpen,
        onFilterOpen
    }: {
        FilterValue: string,
        isFilterOpen: boolean,
        onFilterOpen:  Dispatch<SetStateAction<boolean>>
    }
) => {

    return (
        <div className={'flex justify-between'}>
            <Link
                href={'/our-vehicles'}
                className={'md:text-sm font-bold text-[#F16625]'}
            >
                {getContentByValue(FilterValue)}
            </Link>

            <div
                className={'flex md:hidden items-center gap-1 cursor-pointer'}
                onClick={() => {onFilterOpen(!isFilterOpen)}}
            >
                <Filter width={30} height={30} className={"w-[14px] md:w-[10px] md:h-[14px] h-[16px]"}/>
                <span className={'md:text-xs font-semibold'}>Choose Filter</span>
            </div>
        </div>
    );
};

export default FilterIndicator;