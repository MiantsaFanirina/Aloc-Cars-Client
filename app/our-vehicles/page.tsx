"use client";
import VehicleCard from "@/features/our-vehicles/components/vehicleCard";
import Filters from "@/features/our-vehicles/components/filters";
import {useState} from "react";
import FilterIndicator from "@/features/our-vehicles/components/filterIndicator";

export default function OurVehicles() {
    const [FilterValue, setFilterValue] = useState('all');
    return (
        <div className={'w-full px-[36px] md:px-[72px] xl:px-[216px] pt-[0px] flex flex-col gap-[72px] mb-[144px]'}>

            {/* filter */}
            <div className={'flex flex-col gap-[20px]'}>
                <FilterIndicator FilterValue={FilterValue}/>
                <Filters FilterValue={FilterValue} onFilterChange={setFilterValue} />
            </div>
            {/* Vehicles list */}

            <div
                className={`
                    w-full flex gap-[36px] justify-center lg:justify-between flex-wrap
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
