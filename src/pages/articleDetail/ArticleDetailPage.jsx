import React from 'react';
import {Link} from 'react-router-dom';

import MainLayout from '../../components/MainLayout';
import BreadCrumbs from '../../components/BreadCrumbs';
import SuggestedPosts from './container/SuggestedPosts';
import { images } from '../../constants';
import CommentsContainer from '../../components/comments/CommentsContainer';

const breadCrumbsData = [
    {name: "Home", link: '/'},
    {name: "Blog", link: '/blog'},
    {name: "Article title", link: '/blog/1'},
]

const postsData = [
    {
        _id: "1",
        image: images.meditate,
        title: "Medytacja jest super",
        createdAt: "2023-01-23T15:35:53.607+0000"
    },
    {
        _id: "2",
        image: images.meditate,
        title: "Medytacja jest super",
        createdAt: "2023-01-23T15:35:53.607+0000"
    },
    {
        _id: "3",
        image: images.meditate,
        title: "Medytacja jest super",
        createdAt: "2023-01-23T15:35:53.607+0000"
    },
    {
        _id: "4",
        image: images.meditate,
        title: "Medytacja jest super",
        createdAt: "2023-01-23T15:35:53.607+0000"
    },
]

const tagsData = [
    'Mindfulness',
    'Food',
    'Health',
    'Productivity',
    'Work-life balance',
    'Family',
    'Growth'
]

function ArticleDetailPage() {
    return (
    <MainLayout>
        <section className='container mx-auto max-w-5xl flex flex-col px-5 py-5'>
            <article className='flex-1'>
                <BreadCrumbs data={breadCrumbsData}/>
                <img 
                    className="rounded-xl w-full mt-6" 
                    src={images.meditate} 
                    alt="meditation" 
                />
                <Link to="/blog?category=selectedCategory" className="text-dark-first text-sm font-lora inline-block mt-4 md:text-base">
                    MINDFULNESS
                </Link>
                <h1 className='text-xl font-medium font-lora mt-4 text-dark-third md:tex'>
                    Meditation is nice
                </h1>
                <div className='mt-4'>
                    <p className='leading-7'>s
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum.
                    </p>
                </div>
            </article>
            <CommentsContainer className="mt-10" loggedInUserId="a"/>
            <SuggestedPosts header="Latest articles" posts={postsData} tags={tagsData}
            className="mt-8"
            />  
        </section>
    </MainLayout>
    );
};

export default ArticleDetailPage;