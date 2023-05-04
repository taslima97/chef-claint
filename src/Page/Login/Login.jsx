// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';


const Login = () => {
    // eslint-disable-next-line no-unused-vars
    const { singIn, goggleSignIn, gitSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)
    // eslint-disable-next-line no-unused-vars
    const from = location.state?.from?.pathname || '/';
    

    const handelGoggle = () => {
        goggleSignIn()
            .then(result => {
                const goggleUser = result.user;
                console.log(goggleUser)
            })
            .catch(error => {
                console.log(error)
            })
    };

    const handelGithub = () => {
        gitSignIn()
            .then(result => {
                const githubUser = result.user;
                console.log(githubUser)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handelSingIn = event => {
        event.preventDefault();
        const form = event.target;
        // eslint-disable-next-line no-undef
        const email = form.email.value;
        // eslint-disable-next-line no-unused-vars, no-undef
        const password = form.password.value;
        console.log(email, password);

       

        singIn(email, password)
            // eslint-disable-next-line no-unused-vars
            .then(result => {
                // eslint-disable-next-line no-undef
                const loggedUser = result.user;
                navigate(from, { replace: true })
                // eslint-disable-next-line no-undef
                console.log(loggedUser)
            })

            .catch(error => {
                console.log(error)
            })

    }

    return (
        <Container className='mx-auto' style={{ width: 600 }}>
            <h2 className='text-center'>Please login</h2>
            <Form onSubmit={handelSingIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Text className="text-success">
                    Well never share your email with anyone else.
                </Form.Text> <br />
                <Form.Text className="text-danger">
                  
                </Form.Text> <br />

                <Button variant="warning" type="submit">
                    Login
                </Button>
                <p>Do not have an account please  <Link to='/register'>Register</Link></p>
                <Button className='me-4' onClick={handelGoggle}> <FaGoogle className='mb-1 me-2'></FaGoogle>logIn from goggle</Button>
                <Button onClick={handelGithub}> <FaGithub className='mb-1 me-2'></FaGithub>logIn from Github</Button>
            </Form>
        </Container>
    );
};

export default Login;