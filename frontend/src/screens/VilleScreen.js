import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import ville from '../villes';


const VilleScreen = () => {
    return (
        <Container className='my-5 mx-auto'>
            <div className='my-2 mx-auto' style={{ height : '100px', width: '200px'}}>
                        <Link to ='/galleries' className='btn btn-dark my-4 ml-5'>RETOUR
                        </Link>
                    </div>
            <Grid container className='portfolio ' spacing={1}>
                {ville.map((ville) => (
                    <Grid item key={ville._id}>
                      <Link to={`/ville/${ville._id}`}> 
                        <img src={ville.image} alt={ville.name}
                        style={{ height: '230px', width: '250px'}} />
                      </Link> 
                    </Grid>
                ))}

            </Grid>
            <div className='my-2 mx-auto' style={{ height : '100px', width: '200px'}}>
                        <Link to ='/galleries' className='btn btn-dark my-4 ml-5'>RETOUR
                        </Link>
                    </div>
        </Container>
        
    )
}

export default VilleScreen
