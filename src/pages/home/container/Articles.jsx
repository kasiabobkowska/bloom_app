import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import ArticleCard from "../../../components/ArticleCard";
import { useQuery } from '@tanstack/react-query';
import { getAllPosts } from '../../../services/index/posts';
import { toast } from 'react-hot-toast';


const Articles = () => {
    const { data = [], isLoading, isError } = useQuery({
        queryFn: getAllPosts,
        queryKey: ['posts'],
        onError: (error) => {
            toast.error(error.message);
            console.log(error);
        },
    });

    return (
        <section className="flex flex-col container mx-auto px-5 py-10">
            <div className='flex flex-wrap md:gap-x-5 gap-y-5 pb-10'>
                {!isLoading &&
                    !isError &&
                    data.map((post) => (
                        <ArticleCard
                            key={post._id}
                            post={post}
                            className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
                        />
                    ))}
            </div>
            <button className='mx-auto flex items-center gap-x-2 border-2 border-dark-second bg-dark-second text-white px-6 py-2 rounded-full hover:bg-opacity-10 hover:border-opacity-0 hover:text-dark-second transition-all duration-300'>
                <span>More Articles</span>
                <FaArrowRight className='w-3 h-3' />
            </button>
        </section>
    );
}

export default Articles;