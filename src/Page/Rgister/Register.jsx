// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {
    // eslint-disable-next-line no-unused-vars
    const {createUser} = useContext(AuthContext);

const handelRegister = event =>{
    event.preventDefault()
    // eslint-disable-next-line no-unused-vars
    const form = event.target;
    // eslint-disable-next-line no-unused-vars
    const name = form.name.value;
    // eslint-disable-next-line no-unused-vars
    const photo = form.photo.value;
    // eslint-disable-next-line no-unused-vars
    const email = form.email.value;
    // eslint-disable-next-line no-unused-vars
    const password = form.password.value;
    console.log(name, photo, email, password);

    createUser(email, password)
    .then(result =>{
        const createdUser = result.user;
console.log(createdUser)
    })
    .catch(error=>{
        console.log(error)
    })
    
}

    return (
        <Container className='mx-auto' style={{ width: 600 }}>
            <h2 className='text-center'>Please Register</h2>
            <Form onSubmit={handelRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter photo url" required/>
                </Form.Group>
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
                    Register
                </Button>
               <p>Already have an account please  <Link to='/login'>login</Link></p>
            </Form>
        </Container>
    );
};

export default Register;