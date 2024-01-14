import React from "react";
import{Link} from 'react-router-dom';

const SuggestedPosts = ( { className, header, posts = [], tags }) => {
    return (
        <div className={`w-full shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] rounded-lg p-4 ${className}`}>
            <h2 className="font-lora font-medium text-dark-third md:text-xl lg:text-xl">
                {header}
            </h2>
            <div className="grid gap-y-5 mt-5">
                {posts.map((item) => (
                    <div key={item.id} className="flex space-x-3 flex-nowrap items-center">
                        <img src={item.image} alt="meditation" className="aspect-square object-cover rounded-lg w-1/5"/>
                        <div className="text-sm text-dark-third font-medium">
                            <h3>{item.title}</h3>
                            <span className="text-xs opacity-80">
                                {new Date(item.createdAt).toLocaleDateString("en-US",{
                                    day: 'numeric',
                                    month: 'short',
                                    year: 'numeric',
                                })}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className="font-medium font-lora text-dark-third mt-8">
                Tags
            </h2>
            <div className="flex flex-wrap gap-x-2 gap-y-2 mt-4">
                {tags.map((item, index) => (
                    <Link 
                        key={index}
                        to='/' 
                        className="inline-block rounded-md px-3 py-1.5 bg-light-first first-line:marker:text-xs text-white text-sm">
                        {item}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SuggestedPosts;