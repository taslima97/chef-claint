// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from '../Sheard/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Sheard/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
           <Header></Header> 
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;