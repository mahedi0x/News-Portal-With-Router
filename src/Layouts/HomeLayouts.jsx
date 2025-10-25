import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';
import LatestNews from '../Components/LatestNews/LatestNews';
import Navbar from '../Components/Navbar/Navbar';
import LeftAside from '../Components/HomeLayout/LeftAside/LeftAside';
import RightAside from '../Components/HomeLayout/RightAside/RightAside';

const HomeLayouts = () => {
    return (
        <div>
            <header className='my-20'>
                <Header></Header>
                <section className='w-11/12 mx-auto'>
                 <LatestNews></LatestNews>
                </section>
                <section className='w-11/12 mx-auto'>
                    <Navbar></Navbar>
                </section>
            </header>

            {/* <main className='w-11/12 mx-auto mt-20 *:border grid grid-cols-12'> */}

            <main className='w-11/12 mx-auto mt-20 grid grid-cols-12 gap-5 '>

               <aside className='col-span-3'>
                <LeftAside></LeftAside>
               </aside>
                

                <section className='col-span-6 '>
                  <Outlet></Outlet> 
                </section>

                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayouts;