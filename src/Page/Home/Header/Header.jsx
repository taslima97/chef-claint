// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Header.css'
import { Button, Container, } from 'react-bootstrap';



const Header = () => {
  return (
    <div className='home-page '>
      

      <Container>
        <section className='mt-4 pt-4' style={{ width: '500px' }}>
          <h2 className='mt-4 pt-4' style={{ fontWeight: 'bolder' }}>All Thinks Are Possible <br></br> If You believe</h2>
          <p className='mt-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
          <Button className='bg-warning mt-2'>Explore more</Button>
        </section>


      </Container>
    </div>
  );
};

export default Header;