// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Infosection.css'
// eslint-disable-next-line no-unused-vars
import extra from '../../../assets/1000_F_197479242_lT6d0zl6x8ixT6K2IBhospkRVbhSfIsG.jpg'
const Infosection = () => {
    return (
        <div className='text-center'>
            <h2 className='mt-4 pt-4' style={{fontWeight:'bold'}}>My Plans</h2>
            <p className='my-4'>There are many variations of passages of  available, but the majority <br /> have suffered alteration in some form, by injected humour, or randomised words</p>
            <div className='section'>
           <img className='extra' src={extra} alt="" />
           <h2>Awlays keep <br /> a positive mindset</h2>
        </div>
        </div>
    );
};

export default Infosection;