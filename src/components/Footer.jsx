import React from "react";
import { 
    AiOutlineTwitter, 
    AiFillYoutube, 
    AiFillInstagram 
} from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { BsTelegram } from 'react-icons/bs'; //


import images from "../constants/images.js";

const Footer = () => {
    return (
        <section className="bg-dark-first">
            <footer className="container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-5 md:pt-20 md:grid-cols-12">
                <div className="col-span-4">
                    <h3 className="text-white italic font-semibold">Product</h3>
                    <ul className="text-white text-sm mt-5 space-y-4 md:grid md:grid-cols-4">
                        <li>
                            <a href="/">Landing page</a>
                        </li>
                        <li>
                            <a href="/">Features</a>
                        </li>
                        <li>
                            <a href="/">Documentation</a>
                        </li>
                        <li>
                            <a href="/">Referral Programme</a>
                        </li>
                        <li>
                            <a href="/">Pricing</a>
                        </li>
                    </ul>
                </div>
                <div className="col-span-4">
                    <h3 className="text-white italic font-semibold">Product</h3>
                    <ul className="text-white text-sm mt-5 space-y-4">
                        <li>
                            <a href="/">Landing page</a>
                        </li>
                        <li>
                            <a href="/">Features</a>
                        </li>
                        <li>
                            <a href="/">Documentation</a>
                        </li>
                        <li>
                            <a href="/">Referral Programme</a>
                        </li>
                        <li>
                            <a href="/">Pricing</a>
                        </li>
                    </ul>
                </div>
                <div className="col-span-4">
                    <h3 className="text-white italic font-semibold">Product</h3>
                    <ul className="text-white text-sm mt-5 space-y-4">
                        <li>
                            <a href="/">Landing page</a>
                        </li>
                        <li>
                            <a href="/">Features</a>
                        </li>
                        <li>
                            <a href="/">Documentation</a>
                        </li>
                        <li>
                            <a href="/">Referral Programme</a>
                        </li>
                        <li>
                            <a href="/">Pricing</a>
                        </li>
                    </ul>
                </div>
                <div className="col-span-4`">
                    <h3 className="text-white italic font-semibold">Product</h3>
                    <ul className="text-white text-sm mt-5 space-y-4">
                        <li>
                            <a href="/">Landing page</a>
                        </li>
                        <li>
                            <a href="/">Features</a>
                        </li>
                        <li>
                            <a href="/">Documentation</a>
                        </li>
                        <li>
                            <a href="/">Referral Programme</a>
                        </li>
                        <li>
                            <a href="/">Pricing</a>
                        </li>
                    </ul>
                </div>
                <div className="col
                -span-10">
                    <img src={images.bloom_white} alt="logo" className="mx-auto"/>
                    <p className="text-sm text-gray-200 text-center mt-4">Website delivered by yours truly - Kasia & Jola.</p>
                    <ul className="flex justify-center items-center mt-5 space-x-8 text-gray-200">
                        <li>
                            <a href="/">
                                <AiOutlineTwitter className="w-6 h-auto"/>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <AiFillYoutube className="w-6 h-auto"/>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <AiFillInstagram className="w-6 h-auto"/>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <FaFacebook className="w-6 h-auto"/>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <BsTelegram className="w-6 h-auto"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </section>
    );
};

export default Footer;