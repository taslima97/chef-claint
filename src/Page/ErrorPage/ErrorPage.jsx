// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useRouteError } from 'react-router-dom';
import errorImg from '../../assets/realistic-social-media-emoji-emoticon-vector-illustration_587448-1112.png'
const ErrorPage = () => {
    // eslint-disable-next-line no-unused-vars
    const { error, status } = useRouteError()
    return (
       
        <div className='text-center mt-4 pt-4'>
            <img style={{height:'200px'}} src={errorImg} alt="" />
            <h1>{status}</h1>
            <h3>{error?.message}</h3>
        </div>
    );
};

export default ErrorPage;