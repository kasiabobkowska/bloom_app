import React from "react";
import {BsCheckLg} from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

import images from "../constants/images.js";
import { stables } from "../constants/stables.js";
import { Link } from "react-router-dom";

const ArticleCard = ({ post,className }) => {
    return (
        <div className={`rounded-xl overflow-hidden shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] ${className}`}>
            <Link to={`/blog/${post.slug}`}>
                <img 
                src={
                    post.photo
                    ? stables.UPLOAD_FOLDER_BASE_URL + post.photo
                    : images.samplePostImage
                } 
                alt="title" 
                className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
                />
            </Link>
            <div className="p-5">
                <Link to {`/blog/${post.slug``}`}>
                    <h2 className="font-lora text-xl text-dark-third">
                        {post.title}
                    </h2>
                    <p className="mt-3 text-size-sm md:text-lg">
                        {post.caption}
                    </p>
                </Link>
                <div className="flex justify-between flex-nowrap items-center mt-6">
                    <div className="flex items-center gap-x-2">
                        <img className="rounded-full w-10 object-cover object-center h-10" src={images.author1} alt="woman smiling"/>
                        <div className="flex flex-col">
                            <h4 className="font-opensans font-semibold text-dark-third text-sm">
                                Freja Nilsen
                            </h4>
                            <div className="flex items-center gap-x-2">
                                <span className="bg-[#6D925B] w-fit bg-opacity-20 p-1.5 rounded-full">
                                    <BsCheckLg className="w-1.5 h-1.5 text-[#6D925B] "/>
                                </span>
                                <span className="italic font-lora text-xs">Verified writer</span>
                            </div>
                        </div>
                    </div>
                    <span className="font-semibold font-lora text-light-green text-md">02 May</span>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard;