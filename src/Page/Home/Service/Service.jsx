// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Card } from 'react-bootstrap';
import { IoLogoGoogle } from 'react-icons/io';
import { FaFacebookF, FaTwitter, FaInstagramSquare } from 'react-icons/fa';
import './Service.css'
const Service = () => {
    return (
        <div>
            <div className='text-center mt-4 pt-4'>
                <h2 style={{ fontWeight: 'bold' }}>Our service</h2>
                <p className='my-4'>There are many variations of passages of  available, but the majority <br /> have suffered alteration in some form, by injected humour, or randomised words</p>
            </div>
            <div className='d-flex gap-4 mt-4'>
                <Card className='ms-4' style={{ width: '18rem' }}>
                    <IoLogoGoogle className='icon'></IoLogoGoogle>
                    <Card.Body>
                        <Card.Title>Goggle</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the cards content.
                        </Card.Text>

                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <FaFacebookF className='icon' ></FaFacebookF>
                    <Card.Body>
                        <Card.Title>Facebook</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the cards content.
                        </Card.Text>

                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <FaTwitter className='icon'></FaTwitter>
                    <Card.Body>
                        <Card.Title>Twitter</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the cards content.
                        </Card.Text>

                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <FaInstagramSquare className='icon'></FaInstagramSquare>
                    <Card.Body>
                        <Card.Title>Instagram</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the cards content.
                        </Card.Text>

                    </Card.Body>
                </Card>
            </div>
        </div>

    );
};

export default Service;