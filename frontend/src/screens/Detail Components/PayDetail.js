import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Grid } from '@material-ui/core';
import paysages from '../../paysages';


const PayDetail = ({ match }) => {
    const paysage = paysages.find((p) => p._id === match.params.id)
    return (
        <Container className='py-5'>
            <Link to='/paysage' className="btn btn-dark mx-3 my-3">RETOUR</Link>
            <Grid container>
                <Grid item>
                    <img src={paysage.image} alt={paysage.name}
                    style={{ height:'100%', width: '100%'}} />
                </Grid>
            </Grid>
            
        </Container>
    )
}

export default PayDetail
