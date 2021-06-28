import React from 'react';
import { Container } from 'react-bootstrap';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'
import paysages from '../paysages';



const PaysageScreen = () => {
    return (
        <Container className='my-5 mx-auto'>
            <div className='my-2 mx-auto' style={{ height : '100px', width: '200px'}}>
                        <Link to ='/galleries' className='btn btn-dark my-4 ml-5'>RETOUR
                        </Link>
                    </div>
            <Grid container className='ml-5' spacing={1}>
                {paysages.map((paysage) => 
                    (
                     <Grid item key={paysage._id}>
                    <Link to={`/paysage/${paysage._id}`}>
                    <img src={paysage.image} alt={paysage.name}
                    style={{ height: '300px', width: '320px'}} />
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

export default PaysageScreen
