import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Grid } from '@material-ui/core';
import villes from '../../villes';

const VilleCompDetail = ({ match }) => {
    const ville = villes.find((p) => p._id === match.params.id)
    return (
        <Container className='py-5'>
            <Link to ='/ville' className='btn btn-dark my-3 mx-3'>RETOUR</Link>
            <Grid container>
                <Grid item>
                    <img src={ville.image} alt={ville.name}
                    style={{ height: '100%', width: '100%'}} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default VilleCompDetail
