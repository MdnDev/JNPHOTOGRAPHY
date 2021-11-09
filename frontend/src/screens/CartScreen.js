import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Image, Form, Button, Card, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Message from '../components/Message';
import { addToCart, removeFromCart } from '../actions/cartActions';


const CartScreen = ({ match, location, history }) => {
    
    const photoId = match.params.id

    const qty = location.search ? Number(location.search.split('=')[1]) : 1;

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    

    useEffect(() => {
        if(photoId) {
            dispatch(addToCart(photoId, qty))
        }
        
    }, [dispatch, history, photoId, qty, userInfo]);

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    };

    const checkoutHandler = () => {
        history.push('/login?redirect=shipping')
    };

    const shopReturnHandler = () => {
        history.push('/impressions')
    };

    return (
        <Row>
            <Col md={8}>
                <h1 className='my-5'>Votre Panier</h1>
                {cartItems.length === 0 ? <Message>
                    Votre Panier est vide.
                    <Link to='/'>
                        Retour
                    </Link>
                </Message> : (
                    <ListGroup variant='flush'>
                        {cartItems.map(item => (
                            <ListGroup.Item key={item.photo}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.name} fluid rounded/>
                                    </Col>

                                    <Col md={3}>
                                        <Link to={`/photo/${item.photo}`}>{item.name}</Link>
                                    </Col>

                                    <Col md={2}>€ {item.price}</Col>
                                    <Col md={2}>
                                    <Form.Control as='select' value={item.qty} onChange={(e) => dispatch(addToCart(item.photo, Number(e.target.value)))}>
                                        {[...Array(item.countInStock).keys()].map((x) => (
                                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                                        ))}
                                    </Form.Control>
                                    </Col>
                                    <Col md={2}>
                                        <Button type='button' variant='light' onClick={(e) => removeFromCartHandler(item.photo)}>
                                            <i className='fas fa-trash'></i>
                                        </Button> 
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>

            <Col md={2}>

            </Col>

            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h5>Sous-Total ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) produits</h5>
                            € {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}(EUR)
                        </ListGroup.Item>
                        <ListGroupItem>
                            <h5>Livraison (Colissimo): 9,90 euros</h5>
                            <h5>Total: € {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0 + 9.90).toFixed(2)}(EUR) </h5>
                        </ListGroupItem>
                        <ListGroup.Item>
                            <Button type='button' className='btn-block' disabled={cartItems.length === 0} onClick={checkoutHandler}>
                                Valider le Panier
                            </Button>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button type='button' className='btn-block' onClick={shopReturnHandler}>
                                Retour à la boutique
                            </Button>
                        </ListGroup.Item>
                        
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    )
}

export default CartScreen;
