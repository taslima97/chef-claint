// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import {  FaRegThumbsUp} from 'react-icons/fa';


// eslint-disable-next-line react/prop-types, no-unused-vars
const Details = ({singlechef}) => {
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const { id, name, years_of_experience, num_recipes, num_likes, image_url} = singlechef;
  return (
   <div>
     <Row>
      <Col>
          <Card className='mt-4'>
            <Card.Img variant="top" src={image_url}/>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <h5>Experience: {years_of_experience}</h5>
              <div><span className='me-4'>Recipes: {num_recipes}</span>
              <span className='ms-4'><FaRegThumbsUp className='text-primary ms-4 '></FaRegThumbsUp>{num_likes}</span></div>
              <Button className='bg-warning'>view Recipes</Button>
            </Card.Body>
          </Card>
        </Col>
     
    </Row>
     
    
    </div>
  );
};

export default Details;