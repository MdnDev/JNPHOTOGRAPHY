import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'


const Boutique = () => {
    return (
        <Container className="shopContainer mx-auto my-5">
            {/*<Container>
            <Row>
                <Col>
                    <Card className="mx-auto my-5" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="../../images/oiseau.jpg" />
                        <Card.Body>
                            <Card.Title>Impressions</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </Card.Text>
                            <LinkContainer to="/impressions">
                            <Button variant="dark">Visiter</Button>
                            </LinkContainer>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="mx-auto my-5" style={{ width: '18rem' }}>
                        <Card.Img  variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.photographylife.com%2Fwp-content%2Fuploads%2F2015%2F12%2FVerm-Maier-book-7470-2.jpg&f=1&nofb=1" />
                        <Card.Body>
                            <Card.Title>Livres</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </Card.Text>
                            <LinkContainer to="/livres">
                            <Button variant="dark">Visiter</Button>
                            </LinkContainer>
                        </Card.Body>
                    </Card>
                </Col>
            
            </Row>
            </Container>*/}
           
           <Container className=" text-center py-5 mx-auto">
                <h2>Boutique</h2>
                <Grid container className="portfolio py-5">
                    
                    <Card >
                        <Card.Img className='mx-auto' variant="top" src="../../images/oiseau.jpg" style={{ "max-height": '350px', "max-width": "400px"}} />
                        <Card.Body>
                            <Card.Title>Impressions</Card.Title>
                            <Card.Text>
                            Lorem ipsum  
                            </Card.Text>
                            <Link to="/impressions">
                                <Button variant="dark">Visiter</Button>
                            </Link>
                            
                        </Card.Body>
                    </Card>
                    
                


                {/*<Card style={{ height: '460px', width: '320px'}}>
                    <Card.Img className='mx-auto' variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.photographylife.com%2Fwp-content%2Fuploads%2F2015%2F12%2FVerm-Maier-book-7470-2.jpg&f=1&nofb=1" style={{ height: '250px', width: '300px'}}/>
                    <Card.Body>
                        <Card.Title>Livres</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </Card.Text>
                        <Link to="/livres">
                            <Button variant="dark">Visiter</Button>
                        </Link>
                    </Card.Body>
                </Card>*/}
                </Grid>
        </Container>
            
    </Container>
    
    )
}

export default Boutique
