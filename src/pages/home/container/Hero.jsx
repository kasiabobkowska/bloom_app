import React from 'react';
import { FiSearch } from "react-icons/fi";

import images from "../../../constants/images.js";

const Hero = () => {
    return (
        <section className="container mx-auto flex flex-col px-5 py-5 lg:flex-row">
            <div className="mt-10 lg:w-1/2 lg:mr-10">
                <h1 className="font-lora font-bold text-3xl text-center text-dark-third md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]">Discover web's best content waiting for you</h1>
                <p className="font-openfont lg:text-base xl:text-xl mt-4 text-center md:text-xl lg:text-left"> 
                    Tralala la la la la. Gdzie strumyk płynie z wolna, rozsiewa zioła maj. 
                    Stokrotka rosła polna, a nad nią szumiał gaj.
                </p>
                <div className="flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative">
                    <div className="relative">
                        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]"/>
                        <input className="placeholder:font-bold text-dark-third placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] md:py-4" 
                        type="text" 
                        placeholder="Search article"/>
                    </div>
                <button className="w-full bg-dark-second text-white rounded-lg py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2 lg:pl-3 lg:pr-3" >Search</button>
                </div>
                <div className="flex mt-4 flex-col lg:flex-row lg:items-start lf:flex-nowrap lg:gap-x-4 lg:mt-7">
                    <span className="text-dark-third font-semibold italic lg:mt-4">Popular Tags:</span>
                    <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 ">
                        <li className="rounded-lg bg-dark-third bg-opacity-10 px-3 py-1.5 text-dark-first">Design</li>
                        <li className="rounded-lg bg-dark-third bg-opacity-10 px-3 py-1.5 text-dark-first">User Experience</li>
                        <li className="rounded-lg bg-dark-third bg-opacity-10 px-3 py-1.5 text-dark-first">User Interface</li>
                    </ul>
                </div>
            </div>
            <div className="mt:10 hidden lg:block lg:w-1/2">
                <img className="w-full opacity-90 rounded" src={images.reader} alt="This is a picture of someone reading"/>
            </div>
        </section>
    )
}

export default Hero;