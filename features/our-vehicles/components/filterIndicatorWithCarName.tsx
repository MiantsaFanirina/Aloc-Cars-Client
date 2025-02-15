import Link from "next/link";
import {getContentByValue} from "@/features/our-vehicles/utils/utils";
import {ChevronRight} from "lucide-react";

const FilterIndicatorWithCarName = (
    {
        FilterValue,
    }: {
        FilterValue: string,
    }
) => {

    return (
        <div className={'flex gap-1 items-center text-sm font-bold cursor-pointer'}>
            <Link
                href={`/our-vehicles?filter=${FilterValue}`}
                className={'hover:text-[#F16625] hover:underline transition-all'}
            >
                {getContentByValue(FilterValue)}
            </Link>

            <ChevronRight width={16} height={16} strokeWidth={2.75} />

            <span className={'text-[#F16625]'}>Car Name</span>

        </div>
    );
};

export default FilterIndicatorWithCarName;