// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <Container>
            <h2 className='text-center'>Please login</h2>
            <Form className='mx-auto' style={{ width: 600 }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>

                <Form.Text className="text-success">
                    Well never share your email with anyone else.
                </Form.Text> <br />
                <Form.Text className="text-danger">
                    Well never share your email with anyone else.
                </Form.Text> <br />

                <Button variant="warning" type="submit">
                    Login
                </Button>
               <p>Do not have an account please  <Link to='/register'>Register</Link></p>
            </Form>
        </Container>
    );
};

export default Login;