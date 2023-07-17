import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listExpos } from '../actions/expoActions';








const Portfolio = () => {
    const dispatch = useDispatch();

    const expoList = useSelector(state => state.expoList);
    const { loading, error, expos } = expoList;

    useEffect(() => {
        dispatch(listExpos())
    }, [dispatch])
    
    return (
        <Container>
            <h1 className='my-5 ' style={{ textAlign: 'center'}}>MON PORTFOLIO</h1>
            {loading ? <Loader/> : error ? <Message variant="danger">{error}</Message> :
            <Grid container className='portfolio' spacing={1} >
            {expos.map((expo) => (
                <Grid item key={expo._id}>
                    <Link to={`/expo/${expo._id}`}>
                        
                   <img src={expo.image} alt={expo.name} style={{ height: '230px', width: '250px'}}/>
                   </Link>
                </Grid>
            ))}
            </Grid>}
        </Container>
    )
   
}

export default Portfolio;
