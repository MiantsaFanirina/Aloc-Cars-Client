import Link from "next/link";

const VehicleCard = () => {
    return (
        <div className={'w-full md:w-[270px] h-[324px] flex flex-col justify-between'}>
            <div className={'w-full h-[216px] bg-[#D9D9D9]'}></div>
            <h3 className={'font-semibold'}>Car name</h3>

            <Link href={'/'}
                  className={'btn btn-sm btn-outline font-semibold w-fit px-4 py-1'}>
                Details
            </Link>
        </div>
    );
};

export default VehicleCard;