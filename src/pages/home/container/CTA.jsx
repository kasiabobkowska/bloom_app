import React from 'react';
import images from "../../../constants/images.js";

const CTA =() => {
    return (
        <section className="relative bg-dark-first px-5 pt-10">
            <div className='container grid grid-cols-12 mx-auto items-center'>
                <div className='col-span-12'>
                    <h2 className='text-white text-center font-opensans font-light text-xl'>
                        Get our best stories delivered weekly to your inbox
                    </h2>
                    <div className="w-full max-w-[494px] mt-12 space-y-3 mx-auto">
                        <input type="text" 
                        className="px-4 py-3 rouned-full w-full placeholder:text-dark-first" 
                        placeholder="Your email"/>
                        <button className="px-4 py-4 rounded-full w-full bg-dark-third opacity-80 text-white">
                            Get started
                        </button>
                    </div>
                    <p className='text-white text-center text-sm leading-7 mt-6 py-10'>
                        <span className='text-md italic font-bold text-dark-third'>Even more inspiration - from us to you.</span> All requests submitted until 9PM will be answered on the next day.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default CTA;