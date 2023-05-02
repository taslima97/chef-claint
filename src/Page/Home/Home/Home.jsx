// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';


const Home = () => {
    // eslint-disable-next-line no-unused-vars
    const [chef, setChef] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/chef')
        .then(res=>res.json())
        .then(data=>setChef(data))
        // eslint-disable-next-line no-unused-vars
        .catch(error =>{
            console.log(error)
        })
    },[])
    return (
        <div>
            {
                chef.map(singleChef =><Details singlechef ={singleChef} key={singleChef.id}></Details>)
            }
          
        </div>
    );
};

export default Home;