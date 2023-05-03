// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const About = () => {
    
    // eslint-disable-next-line no-unused-vars
    const chefDta = useLoaderData();
    console.log(chefDta)
  // eslint-disable-next-line no-unused-vars
  const {id, name, image_url, details, num_likes, Recipe} = chefDta;
  // eslint-disable-next-line no-unused-vars
  const {recipe_name, ingredients, method, rating, img1, img2, img3} = Recipe;
   // eslint-disable-next-line no-unused-vars
   const ingInfo = ingredients;
   // eslint-disable-next-line no-unused-vars
   const metInfo = method;
    return (
        <div>
    <Container className='d-flex align-items-center justify-content-around mt-4 pt-4'>
    <div  className='text-center'>
    <img style={{height:400, width:600}} src={image_url} alt="" />
    </div>
    <div style={{width:400}}>
    <h2>{name}</h2>
    <p>{details}</p>
    <p>Like : {num_likes}</p>
    </div>
    </Container>
    

            
        </div>
    );
};

export default About;