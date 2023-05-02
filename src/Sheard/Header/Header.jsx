// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Header.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='home-page '>
            <Navbar collapseOnSelect expand="lg" bg="gradient" variant="gradient">
      <Container>
        <Navbar.Brand style={{fontWeight:'bold'}} href="#home">Chef Hunter</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link className=' text-black text-decoration-none' to='/home'>Home</Link>
            <Link className=' text-black text-decoration-none mx-4' to='/about'>About</Link>
            <Link className=' text-black text-decoration-none' to='/blog'>Blog</Link>
            
          
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
           <Link className=' text-black text-decoration-none' style={{fontWeight:'bold'}} to='/login'><Button className='bg-warning'>LogIn</Button></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 

    <Container>
    <section className='mt-4 pt-4' style={{width:'500px'}}>
    <h2 className='mt-4 pt-4' style={{fontWeight:'bolder'}}>All Thinks Are Possible <br></br> If You believe</h2>
           <p className='mt-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p> 
           <Button className='bg-warning mt-2'>Explore more</Button>
    </section>

   
    </Container>
        </div>
    );
};

export default Header;