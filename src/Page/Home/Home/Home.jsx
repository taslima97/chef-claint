// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import './Home.css'
import { Container } from 'react-bootstrap';
import Infosection from '../InfoSection/Infosection';
import Service from '../service/Service';
import Header from '../Header/Header';


const Home = () => {
    // eslint-disable-next-line no-unused-vars
    const [chef, setChef] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChef(data))
            // eslint-disable-next-line no-unused-vars
            .catch(error => {
                console.log(error)
            })
    }, [])
    return (
        <div>
           <Header></Header>
            <Container>
               
                <Infosection></Infosection>
            </Container>

            <div className='text-center'>
                <h2 className=' mt-4 pt-4' style={{ fontWeight: 'bold' }}>Chef Details</h2>

                <p className='my-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in <br /> some form, by injected humour, or randomised words which dont look even slightly believable. </p>
            </div>

            <Container>
                <div className='chef-card mt-4'>
                    {
                        chef.map(singleChef => <Details singlechef={singleChef} key={singleChef.id}></Details>)
                    }
                </div>
                <Service></Service>
            </Container>


        </div>
    );
};

export default Home;