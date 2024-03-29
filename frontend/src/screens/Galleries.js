import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Galleries = () => {
    return (
        
        <Container className=" text-center py-5 mx-auto">
            <h2>Gallerie</h2>
            <Grid container className="img-grid py-5 mx-auto">
                
                <Card className='my-3' style={{ height: '420px', width: '320px'}}>
                    <Card.Img className='mx-auto' variant="top" src="../../images/arbres.jpg" style={{ height: '250px', width: '100%'}} />
                    <Card.Body>
                        <Card.Title>Paysages</Card.Title>
                        <Card.Text>
                        
                        </Card.Text>
                        <Link to="/paysage">
                            <Button variant="dark" className='my-3'>Visiter</Button>
                        </Link>
                        
                    </Card.Body>
                </Card>
                
                


                <Card className='my-5' style={{ height: '420px', width: '320px'}}>
                    <Card.Img className='mx-auto' variant="top" src="../../images/portrait.jpg" style={{ height: '250px', width: '100%'}}/>
                    <Card.Body>
                        <Card.Title>Portraits</Card.Title>
                        <Card.Text>
                        
                        </Card.Text>
                        <Link to="/portrait">
                            <Button variant="dark" className='my-3'>Visiter</Button>
                        </Link>
                    </Card.Body>
                </Card>


                <Card className='my-5' style={{ height: '420px', width: '320px'}} >
                    <Card.Img className='mx-auto' variant="top" src="../../images/rue.jpg" style={{ height: '250px', width: '100%'}}/>
                    <Card.Body>
                        <Card.Title>Ville</Card.Title>
                        <Card.Text>
                        
                        </Card.Text>
                        <Link to="/ville">
                            <Button variant="dark" className='my-3'>Visiter</Button>
                        </Link>
                    </Card.Body>
                </Card>


            </Grid>
            
            

            
        </Container>
    )
}

export default Galleries
