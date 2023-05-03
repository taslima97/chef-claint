// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBer = () => {
    return (
        <div>
           <Navbar collapseOnSelect expand="lg" bg="gradient" variant="gradient">
        <Container>
          <Navbar.Brand style={{ fontWeight: 'bold' }} href="#home">Chef Hunter</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link className=' text-black text-decoration-none' to='/'>Home</Link>
              <Link className=' text-black text-decoration-none mx-4' to='/contact'>Contact</Link>
              <Link className=' text-black text-decoration-none' to='/blog'>Blog</Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Link className=' text-black text-decoration-none' style={{ fontWeight: 'bold' }} to='/login'><Button className='bg-warning'>LogIn</Button></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
        </div>
    );
};

export default NavigationBer;