import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listPhotos } from '../actions/photoActions';








const Portfolio = () => {
    const dispatch = useDispatch();

    const photoList = useSelector(state => state.photoList);
    const { loading, error, photos } = photoList;

    useEffect(() => {
        dispatch(listPhotos())
    }, [dispatch])
    
    
    return (
        <>
            <h1 className='my-5 mx-5'> PORTFOLIO</h1>
            {loading ? <Loader/> : error ? <Message variant="danger">{error}</Message> :
            <Grid container spacing={1} >
            {photos.map((photo) => (
                <Grid item key={photo._id}>
                    <Link to={`/photo/${photo._id}`}>
                        
                   <img src={photo.image} alt={photo.name} style={{ height: '300px', width: '320px'}}/>
                   </Link>
                </Grid>
            ))}
            </Grid>}
        </>
    )
   
}

export default Portfolio;
