
import Link from "next/link";
import {useFilterContext} from "@/features/our-vehicles/context/filterContext";

const VehicleCard = () => {

    const {FilterValue} = useFilterContext();
    return (
        <div className={'w-full md:w-[270px] gap-6 md:gap-0 md:h-[324px] flex flex-col justify-between'}>
            <div className={'w-full aspect-square md:aspect-auto md:h-[216px] bg-[#D9D9D9]'}></div>
            <h3 className={'font-semibold'}>Car name</h3>

            <Link href={`/our-vehicles/car-detail?carId=${1}&filter=${FilterValue}`}
                  className={'btn btn-sm btn-outline font-semibold w-fit px-4 py-1'}>
                Details
            </Link>
        </div>
    );
};

export default VehicleCard;