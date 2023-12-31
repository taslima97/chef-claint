// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBer = () => {
  // eslint-disable-next-line no-unused-vars
  const { user, logOut, userName } = useContext(AuthContext);

  const handelToolTip = () => {
    userName();
    <title>{user.email}</title>
  }
  const handelLogOut = () => {
    logOut()
      .then()
      .catch(error => {
        console.log(error)
      })
  }

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
              {user && <FaUserCircle onMouseEnter={handelToolTip} style={{ fontSize: 32 }} ></FaUserCircle>},
              {
                user ? <Button onClick={handelLogOut} className='bg-warning'>Logout</Button> :
                  <Link className=' text-black text-decoration-none' style={{ fontWeight: 'bold' }} to='/login'>
                    <Button className='bg-warning'>Login</Button>
                  </Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBer;