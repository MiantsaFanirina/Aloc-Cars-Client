"use client";
import VehicleCard from "@/features/our-vehicles/components/vehicleCard";
import Filters from "@/features/our-vehicles/components/filters";
import {useEffect, useState} from "react";
import FilterIndicator from "@/features/our-vehicles/components/filterIndicator";
import {useFilterContext} from "@/features/our-vehicles/context/filterContext";
import {useSearchParams} from "next/navigation";

export default function OurVehicles() {
    const {FilterValue, setFilterValue} = useFilterContext()
    const [isFilterOpen, setIsFilterOpen] = useState(false);


    const filter: string | null = useSearchParams().get("filter");


    // Get Filter Value from Url search params
    useEffect(() => {

        if (filter) {
            setFilterValue(filter);
        }
        else {
            setFilterValue('all')
        }

    }, [filter, setFilterValue]);

    return (
        <div className={'w-full  md:pt-[108px] flex flex-col mb-[144px]'}>

            {/* filter */}
            <div
                className={`
                    flex flex-col gap-[20px] top-[108px] left-0 fixed w-full py-4 bg-white
                    px-[36px] md:px-[72px] xl:px-[216px] pt-[36px]
                `}
            >
                <FilterIndicator FilterValue={FilterValue} isFilterOpen={isFilterOpen} onFilterOpen={setIsFilterOpen}/>
                <Filters FilterValue={FilterValue} onFilterChange={setFilterValue} isFilterOpen={isFilterOpen} onFilterOpen={setIsFilterOpen} />
            </div>
            {/* Vehicles list */}

            <div
                className={`
                    w-full flex gap-[36px] justify-center lg:justify-between flex-wrap
                    px-[36px] md:px-[72px] xl:px-[216px] pt-[72px] md:pt-[36px]
                `}
            >
                <VehicleCard/>
                <VehicleCard/>
                <VehicleCard/>
                <VehicleCard/>
                <VehicleCard/>
                <VehicleCard/>
                <VehicleCard/>
                <VehicleCard/>
                <VehicleCard/>
            </div>
        </div>
    );
}
