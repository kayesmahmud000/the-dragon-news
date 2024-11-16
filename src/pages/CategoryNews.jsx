import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const {data}= useLoaderData()
    // console.log(data)
    return (
        <div>
            <h2 className='text-xl font-bold'>Dragon News Home</h2>
            <div className=' my-5 flex flex-col gap-5 p-5'>
                {
                    data.map(news=><NewsCard key={news._id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;