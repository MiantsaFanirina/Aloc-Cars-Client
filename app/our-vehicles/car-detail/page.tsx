"use client";
import {useFilterContext} from "@/features/our-vehicles/context/filterContext";
import FilterIndicatorWithCarName from "@/features/our-vehicles/components/filterIndicatorWithCarName";
import Link from "next/link";
import {useSearchParams} from "next/navigation";
import {useEffect} from "react";
import Image from "next/image";

const SingleCarDetailPage = () => {
    const {FilterValue, setFilterValue } = useFilterContext();

    // const id: number | null = Number(useSearchParams().get("carId"));


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
        <div
            className={`flex flex-col gap-[36px] px-[36px] md:px-[72px] xl:px-[216px] mb-[144px]`}
        >
            <FilterIndicatorWithCarName FilterValue={FilterValue}/>

            <div className={'w-full flex flex-col md:flex-row'}>
                <div className={'w-full md:w-1/2 aspect-square bg-[#D9D9D9]'}></div>
                <div className={'w-full md:w-1/2 md:pl-[72px] md:py-[36px] flex flex-col gap-[36px]'}>

                    <div className={"flex gap-[36px] justify-between"}>

                        <div className={'text-sm'}>
                            <h1 className={'font-bold text-[24px] mb-3'}>Car Name</h1>
                            <p>Manual</p>
                            <p>Ford Ka (4 seats) – Sandero (5 seats)</p>
                            <p>Minimum age <span className={"font-semibold text-[#F16625]"}>18yrs</span></p>
                        </div>

                        <div className={'flex gap-6'}>
                            <div className={'w-[140px] h-full flex items-center relative text-[10px] font-bold text-white'}>
                                <span className={'absolute top-[15px] left-[90px]'}>1.25</span>
                                <span className={'absolute top-[48px] right-[7px]'}>1.50</span>

                                <Image
                                    src={"/our-vehicles/carWH.png"} alt={"car width height"}
                                    width={140}
                                    height={61}>
                                </Image>
                            </div>

                            <div
                                className={'w-[72px] h-full flex items-center relative text-[10px] font-bold text-white'}>

                                <span className={'absolute top-[15px] left-[0] w-full text-center px-[20px]'}>1.17 to 1.40</span>
                                <Image
                                    src={"/our-vehicles/carD.png"} alt={"car depth"}
                                    width={72}
                                    height={61}>
                                </Image>
                            </div>
                        </div>

                    </div>

                    <div className={'text-sm'}>

                        <h1 className={'font-bold text-[24px] mb-3'}>Description</h1>
                        <p>
                        From the small car to the luxious compact, you will find in this category the car you are
                            looking for. Made for your trips and discovery days.
                        </p>
                    </div>


                    <div className={'text-sm'}>

                        <h1 className={'font-bold text-[24px] mb-6'}>Pricing</h1>
                        <Link href={'/download'}
                              className={'font-bold bg-black text-white px-4 py-2'}>
                            Use our mobile APP to see pricing and booking options
                        </Link>
                    </div>

                </div>
            </div>

        </div>
    )
};

export default SingleCarDetailPage;