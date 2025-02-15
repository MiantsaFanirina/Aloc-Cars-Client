"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {NavLinksData} from "@/features/data/navlinksData";
import {useState} from "react";


const Navbar = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="w-full px-[36px] md:px-[72px] xl:px-[216px] py-[18px] z-50 flex items-center justify-between fixed top-0 left-0 bg-white/80 backdrop-blur-xl">
            <Link href={'/'} className={'cursor-pointer z-50'} ><Image
                src="/aloc-cars-logo.png"
                alt="logo"
                width={120}
                height={72}
            /></Link>
            <div className="hidden lg:flex gap-[24px] items-center">
                {NavLinksData.map(({href, label}) => (
                    <Link
                        key={href}
                        href={href}
                        className={`font-semibold text-[16px] transition-all ${
                            pathname === href ? "text-[#F16625]" : "hover:text-[#F16625]"
                        }`}
                    >
                        {label}
                    </Link>
                ))}


                <label className="swap swap-rotate">
                    <input type="checkbox"/>

                    {/* english icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="swap-on h-[20px] w-[20px] fill-current"
                        viewBox="0 0 32 32">
                        <rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#071b65"></rect>
                        <path
                            d="M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z"
                            fill="#fff"></path>
                        <path d="M22.25,19h-2.5l9.934,7.947c.387-.353,.704-.777,.929-1.257l-8.363-6.691Z"
                              fill="#b92932"></path>
                        <path d="M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387,.353-.704,.777-.929,1.257Z"
                              fill="#b92932"></path>
                        <path
                            d="M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z"
                            fill="#fff"></path>
                        <rect x="13" y="4" width="6" height="24" fill="#fff"></rect>
                        <rect x="1" y="13" width="30" height="6" fill="#fff"></rect>
                        <rect x="14" y="4" width="4" height="24" fill="#b92932"></rect>
                        <rect x="14" y="1" width="4" height="30" transform="translate(32) rotate(90)"
                              fill="#b92932"></rect>
                        <path d="M28.222,4.21l-9.222,7.376v1.414h.75l9.943-7.94c-.419-.384-.918-.671-1.471-.85Z"
                              fill="#b92932"></path>
                        <path d="M2.328,26.957c.414,.374,.904,.656,1.447,.832l9.225-7.38v-1.408h-.75L2.328,26.957Z"
                              fill="#b92932"></path>
                        <path
                            d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                            opacity=".15"></path>
                        <path
                            d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                            fill="#fff" opacity=".2"></path>
                    </svg>

                    {/* french icon */}

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="swap-off h-[20px] w-[20px] fill-current"
                        viewBox="0 0 32 32"
                    >
                        <path fill="#fff" d="M10 4H22V28H10z"></path>
                        <path d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" fill="#092050"></path>
                        <path d="M25,4h6V28h-6c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                              transform="rotate(180 26 16)" fill="#be2a2c"></path>
                        <path
                            d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                            opacity=".15"></path>
                        <path
                            d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                            fill="#fff" opacity=".2"></path>
                    </svg>

                </label>

            </div>
            <label className="lg:hidden btn btn-circle swap swap-rotate z-50">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" onChange={() => {setIsMenuOpen(!isMenuOpen)}}/>

                {/* hamburger icon */}
                <svg
                    className="swap-off fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 512 512">
                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/>
                </svg>

                {/* close icon */}
                <svg
                    className="swap-on fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 512 512">
                    <polygon
                        points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/>
                </svg>
            </label>


            <div
                className={`
                    ${isMenuOpen ? "left-0" : "left-full" } 
                    flex lg:hidden 
                    transition-all duration-500 
                    fixed top-0 w-screen h-screen bg-white/95 backdrop-blur-3xl z-20
                    flex-col justify-center gap-[36px]
                    px-[36px]
                    items-end
                `}
            >

                {NavLinksData.map(({href, label}) => (
                    <Link
                        key={href}
                        href={href}
                        className={`font-semibold text-[30px] transition-all ${
                            pathname === href ? "text-[#F16625]" : "hover:text-[#F16625]"
                        }`}
                        onClick={() => {setIsMenuOpen(!isMenuOpen)}}
                    >
                        {label}
                    </Link>
                ))}
            </div>


        </div>
    );
};

export default Navbar;
