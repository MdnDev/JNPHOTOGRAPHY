import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listPhotos } from '../actions/photoActions';


const Impressions = () => {
    const dispatch = useDispatch();

    const photoList = useSelector(state => state.photoList);
    const { loading, error, photos } = photoList;

    useEffect(() => {
        dispatch(listPhotos())
    }, [dispatch]);
    
    
    
    return (
        <Container variant="top" className="py-5 mx-auto">
                <div className='my-2 mx-auto' style={{ height : '100px', width: '200px'}}>
                        <Link to ='/boutique' className='btn btn-dark my-4 ml-5'>RETOUR
                        </Link>
                    </div>
                    {loading ? <Loader/> : error ? <Message variant="danger">{error}</Message> :
                <Grid container className='portfolio' spacing={1}>
                {photos.map((photo) => (
                    <Grid item key={photo._id}>
                        <Link to={`/impression/${photo._id}`}>
                            <img src={photo.image} alt={photo.name} style={{height: '230px', width: '270px'}}/>
                        </Link>
                    </Grid>
                ))}
                </Grid> }
                <div className='my-2 mx-auto' style={{ height : '100px', width: '200px'}}>
                        <Link to ='/boutique' className='btn btn-dark my-4 ml-5'>RETOUR
                        </Link>
                    </div>
            </Container>
    )
}

export default Impressions
