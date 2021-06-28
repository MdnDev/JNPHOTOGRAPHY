import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { listPhotoDetails } from '../../actions/photoActions';
import Loader from '../../components/Loader';
import Message from '../../components/Message';





const PicDetail = ({ match }) => {
    const dispatch = useDispatch();

    const photoDetails = useSelector(state => state.photoDetails);
    const { loading, error, photo } = photoDetails;

    useEffect(() => {
       dispatch(listPhotoDetails(match.params.id))
    }, [dispatch, match])
    
    return (

        <Container className='py-5'>
            <Link to='/' className="btn btn-dark mx-3 my-3">RETOUR</Link>
            {loading ? <Loader/> : error ? <Message>{error}</Message> : (
                <Grid container >
                <Grid item >
                    <img src={photo.image} alt={photo.name}
                    style={{ height: '100%', width: '100%'}} />
                </Grid>
                
            </Grid>
            )}
            
        </Container>
        
    )
}

export default PicDetail
