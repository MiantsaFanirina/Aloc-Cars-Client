import Link from "next/link";
import {Facebook, Instagram, Twitter, Youtube} from "lucide-react";
import Image from "next/image";

const Footer = () => {
    return (
        <div className={'bg-[#1E1E1E] px-[36px] md:px-[72px] xl:px-[216px] py-[36px] flex flex-col gap-[72px]'}>

            <div className={'w-full flex justify-between'}>
                <div className={'w-[384px] flex flex-col gap-[36px]'}>
                    <h3 className={'text-[#F16625] font-semibold'}>SUBSDIARIES</h3>

                    <div className={'flex flex-col gap-1 text-white text-[12px]'}>
                        <Link href={'/'}>Mobilcars 24/7</Link>
                        <Link href={'/'}>Aloc Bike</Link>
                        <Link href={'/'}>Aloc-Cars Wash</Link>
                    </div>
                    <div className={'text-white text-[12px]'}>
                        <Link href={'/'} >Legacy notices</Link> - <Link href={'/'}>Terms & Conditions</Link>
                    </div>
                </div>


                <div className={'w-[384px] flex flex-col gap-[36px]'}>
                    <h3 className={'text-[#F16625] font-semibold'}>MORE</h3>

                    <div className={'flex flex-col gap-1 text-white text-[12px]'}>
                        <Link href={'/'}>Aloc-Cars Gift Card</Link>
                        <Link href={'/'}>Delas & Discounts</Link>
                        <Link href={'/'}>Aloc-Cars App</Link>
                        <Link href={'/'}>Philosophy</Link>
                    </div>
                </div>


                <div className={'w-[384px] flex flex-col gap-[36px]'}>
                    <h3 className={'text-[#F16625] font-semibold'}>SOCIAL NETWORKS</h3>

                    <div className={'flex gap-2'}>
                        <Link href={'/'} className={'w-6 h-6 flex items-center justify-center rounded-full bg-white'}>
                            <Facebook width={17} height={17}/>
                        </Link>
                        <Link href={'/'} className={'w-6 h-6 flex items-center justify-center rounded-full bg-white'}>
                            <Instagram width={17} height={17}/>
                        </Link>

                        <Link href={'/'} className={'w-6 h-6 flex items-center justify-center rounded-full bg-white'}>
                            <Twitter width={17} height={17}/>
                        </Link>

                        <Link href={'/'} className={'w-6 h-6 flex items-center justify-center rounded-full bg-white'}>
                            <Youtube width={17} height={17}/>
                        </Link>


                    </div>

                    <Image
                        src="/aloc-cars-logo.png"
                        alt="logo"
                        width={80}
                        height={48}
                    />

                </div>

            </div>

            <div className={'w-full flex justify-between text-white text-[10px]'}>
                <Link href={'/'}>© Aloc-Cars</Link>
                <Link href={'/'}>Studio Ginkgo</Link>
            </div>

        </div>
    );
};
export default Footer;