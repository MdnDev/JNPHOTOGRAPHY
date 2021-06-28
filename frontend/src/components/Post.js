import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

const Post = ({ photo }) => {
    return (
        <Container className="my-1">
            
            <Grid>
                <Grid item key={photo._id}>
                    <Link to={`/photo/${photo._id}`}>
                        <Image src={photo.name} title={photo.description} style={{ height: '300px', width: '320px'}}/>
                        
                    </Link>
                </Grid>
            </Grid>
               
             
            </Container> 
            
    )
}

export default Post
