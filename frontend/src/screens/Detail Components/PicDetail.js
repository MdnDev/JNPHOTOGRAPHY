import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { listExpoDetails } from '../../actions/expoActions';
import Loader from '../../components/Loader';
import Message from '../../components/Message';





const PicDetail = ({ match }) => {
    const dispatch = useDispatch();

    const expoDetails = useSelector(state => state.expoDetails);
    const { loading, error, expo } = expoDetails;

    useEffect(() => {
       dispatch(listExpoDetails(match.params.id))
    }, [dispatch, match])
    
    return (

        <Container className='py-5'>
            <Link to='/' className="btn btn-dark mx-3 my-3">RETOUR</Link>
            {loading ? <Loader/> : error ? <Message>{error}</Message> : (
                <Grid container >
                <Grid item >
                    <img src={expo.image} alt={expo.name}
                    style={{ height: '100%', width: '100%'}} />
                </Grid>
                
            </Grid>
            )}
            
        </Container>
        
    )
}

export default PicDetail
