import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Button, Card, Container, ListGroup, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { listPhotoDetails } from '../../actions/photoActions';

const ImpDetail = ({ history, match }) => {
    const [qty, setQty] = useState(1);

    const dispatch = useDispatch();

    const photoDetails = useSelector((state) => state.photoDetails);
    const { loading, error, photo } = photoDetails;

    useEffect(() => {
        dispatch(listPhotoDetails(match.params.id))
    }, [dispatch, match]);

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    return (
        <Container>
            <div>
                <Link to="/impressions" className="btn btn-dark my-4">
                RETOUR
                </Link>
            </div>
            {loading ? <Loader/> : error ? <Message>{error}</Message> : (
            <Row>
                <Col>
                    <Card style={{ width: '270px' }}>
                        <Card.Img variant="top" src={photo.image} alt={photo.name} />
                    </Card>
                </Col>

                <Col>
                    <ListGroup variant="danger"  className="my-5">
                        <ListGroup.Item >{photo.name}</ListGroup.Item>
                        <ListGroup.Item>Dimensions: non précisé</ListGroup.Item>
                        <ListGroup.Item>{photo.description}</ListGroup.Item>
                        <ListGroup.Item>Price: {photo.price}</ListGroup.Item>
                        <ListGroup.Item>{photo.countInStock > 0 ? 'En stock': 'Rupture de stock'}</ListGroup.Item>
                        {photo.countInStock > 0 && (
                        <ListGroup.Item>
                            <Row>
                                <Col>Quantité</Col>
                                <Col>
                                    <Form.Control as='select' value={qty} onChange={(e) => setQty(e.target.value)}>
                                        {[ ...Array(photo.countInStock).keys()].map((x) => (
                                            <option key={x + 1} value={x +1}>{x + 1}</option>
                                        ))}
                                    </Form.Control>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        )}
                    </ListGroup>

                    <Button 
                    onClick={addToCartHandler}
                    className="btn btn-dark my-5">Ajouter au Panier</Button>
                </Col>
               
                
            </Row> 
            )}
        </Container>
    )
}

export default ImpDetail
