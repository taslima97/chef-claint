// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    // eslint-disable-next-line no-unused-vars
    const { error, status } = useRouteError()
    return (
       
        <div className='text-center mt-4 pt-4'>
            <h1>{status}</h1>
            <h3>{error?.message}</h3>
        </div>
    );
};

export default ErrorPage;