// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivetRoute = ({children}) => {
    // eslint-disable-next-line no-unused-vars
    const {user} = useContext(AuthContext);
    
    const location = useLocation();
    console.log(location);
    
    
   if (user) {
    return children
   }
    return <Navigate state={ {from: location}} to='/login'></Navigate> ;
};

export default PrivetRoute;