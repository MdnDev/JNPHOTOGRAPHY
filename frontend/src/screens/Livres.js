import React from 'react';
import { Container, Card, Button, Row, Col, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Livres = () => {
    return (
        <Container >
                <div className='my-2 mx-auto' style={{ height : '100px', width: '200px'}}>
                        <Link to ='/boutique' className='btn btn-dark my-4 ml-5'>RETOUR
                        </Link>
                    </div>
                <Row>
                    <Col>
                        <Card style={{ width: '300px' }} className="my-5 mx-auto">
                            <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.photographylife.com%2Fwp-content%2Fuploads%2F2015%2F12%2FVerm-Maier-book-7470-2.jpg&f=1&nofb=1" />
                            <Card.Body>
                                <Card.Title>Receuil</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <ListGroup className="my-5 mx-auto">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                    <Button className="btn btn-dark my-5">Ajouter au Panier</Button>
                    </Col>
                </Row>
                
        </Container>
    )
}

export default Livres
