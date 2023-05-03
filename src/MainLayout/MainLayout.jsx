// eslint-disable-next-line no-unused-vars
import React from 'react';

import { Outlet } from 'react-router-dom';
import Footer from '../Sheard/Footer/Footer';
import NavigationBer from '../Sheard/NavigationBer/NavigationBer';

const MainLayout = () => {
    return (
        <div>
           <NavigationBer></NavigationBer>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;