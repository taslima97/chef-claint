// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const About = () => {

  // eslint-disable-next-line no-unused-vars
  const chefDta = useLoaderData();
  console.log(chefDta)
  // eslint-disable-next-line no-unused-vars
  const { id, name, image_url, details, num_likes, Recipe } = chefDta;
  // eslint-disable-next-line no-unused-vars
  const { recipe_name, ingredients, method, rating, img1, img2, img3 } = Recipe;
  const notify = () => toast("Wow so easy!");
  return (
    <div>
      <Container className='d-flex align-items-center justify-content-around mt-4 pt-4'>
        <div className='text-center'>
          <img style={{ height: 400, width: 600 }} src={image_url} alt="" />
        </div>
        <div style={{ width: 400 }}>
          <h2>{name}</h2>
          <p>{details}</p>
          <p>Like : {num_likes}</p>
        </div>
      </Container>
      <Container className='d-flex justify-content-between mt-4 pt-4'>
        <Card style={{ margin: 12 }}>
          <Card.Img variant="top" src={img2} />
          <Card.Body>
            <Card.Title>{recipe_name}</Card.Title>
            <Card.Text className='d-flex justify-content-between'>
              <div>
                <h5>Ingredients</h5>
                {
                  // eslint-disable-next-line no-unused-vars, react/jsx-key
                  ingredients.map(ingInfo => <p>{ingInfo}</p>)
                }
              </div>
              <div>
              <h5>Method</h5>
                {
                  // eslint-disable-next-line no-unused-vars, react/jsx-key
                  method.map(metInfo => <p>{metInfo}</p>)
                }
              </div>
            </Card.Text>
            <div className='d-flex align-items-center justify-content-between'>
            <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
            <p>{rating}</p>
            <Button onClick={notify} variant="primary">Favorite</Button>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ margin: 12 }}>
          <Card.Img variant="top" src={img2} />
          <Card.Body>
            <Card.Title>{recipe_name}</Card.Title>
            <Card.Text className='d-flex justify-content-between'>
              <div>
                <h5>Ingredients</h5>
                {
                  // eslint-disable-next-line no-unused-vars, react/jsx-key
                  ingredients.map(ingInfo => <p>{ingInfo}</p>)
                }
              </div>
              <div>
                <h5>Method</h5>
                {
                  // eslint-disable-next-line no-unused-vars, react/jsx-key
                  method.map(metInfo => <p>{metInfo}</p>)
                }
              </div>
            </Card.Text>
            <div className='d-flex align-items-center justify-content-between'>
            <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
            <p>{rating}</p>
            <Button onClick={notify} variant="primary">Favorite</Button>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ margin: 12 }}>
          <Card.Img variant="top" src={img3} />
          <Card.Body>
            <Card.Title>{recipe_name}</Card.Title>
            <Card.Text className='d-flex justify-content-between'>
              <div>
                <h5>Ingredients</h5>
                {
                  // eslint-disable-next-line no-unused-vars, react/jsx-key
                  ingredients.map(ingInfo => <p>{ingInfo}</p>)
                }
              </div>
              <div>
              <h5>Method</h5>
                {
                  // eslint-disable-next-line no-unused-vars, react/jsx-key
                  method.map(metInfo => <p>{metInfo}</p>)
                }
              </div>
            </Card.Text>
            <div className='d-flex align-items-center justify-content-between'>
            <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
            <p>{rating}</p>
            <Button onClick={notify} variant="primary">Favorite</Button>
          
            </div>
          </Card.Body>
        </Card>
      </Container>

<ToastContainer></ToastContainer>
    </div>
  );
};

export default About;