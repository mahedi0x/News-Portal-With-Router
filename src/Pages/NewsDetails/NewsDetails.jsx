import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import RightAside from '../../Components/HomeLayout/RightAside/RightAside';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from '../../Components/NewsDetailsCard/NewsDetailsCard';

const NewsDetails = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const [news, setNews] = useState({});
    // console.log(id, data);
    // console.log(news);
    
    useEffect(() =>{
    const newsDetails = data.find(singleNews => singleNews.id == id);
    setNews(newsDetails);
    },[data, id]);
    

    return (
        <div>
            <header className='py-3'>
                <Header></Header>
            </header>

            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 py-10'>
                <section className='col-span-9'>
                <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>

                <section className="col-span-3">
                <RightAside></RightAside>

                </section>
            </main>
            
        </div>
    );
};

export default NewsDetails;