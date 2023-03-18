import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../Sheared/Banner/Banner';

import Footer from '../Sheared/Footer/Footer';
import Header from '../Sheared/Header/Header';
import LeftsideNave from '../Sheared/LeftSidenave/LeftsideNave';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Banner className=''></Banner> 
            <div className='grid grid-cols-3'>
                   <LeftsideNave className='col-start-1 col-end-3'></LeftsideNave>
                  <Outlet className='col-start-1 col-end-8'></Outlet>  
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Main;