import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'


const RegisterScreen = ({ location, history }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error, userInfo } = userRegister

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if(userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    
    
    const submitHandler = (e) => {
        e.preventDefault()
        if(password !== confirmPassword) {
            setMessage('Les mots de passe ne corrrespondent pas')
        } else {
            dispatch(register(name, email, password))
        }
    }
    return (
        <FormContainer>
            <h1 className='my-5'>Créer un compte</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader></Loader>}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                    <Form.Label>Nom</Form.Label>
                    <Form.Control 
                    type='name' 
                    placeholder='Entrez votre Nom'
                    value={name}
                    onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                    type='email' 
                    placeholder='Entrez votre adresse Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control 
                    type='password' 
                    placeholder='Entrez votre mot de passe'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='confirmPassword'>
                    <Form.Label>Confirmez le mot de passe</Form.Label>
                    <Form.Control 
                    type='password' 
                    placeholder='confirmez le mot de passe'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Valider l'inscription
                </Button>
            </Form>

            <Row className='py-3'>
                <Col>Vous avez déja un compte ?{' '}
                <Link to={redirect ? `login?redirect=${redirect}` : '/login'}>Se connecter</Link></Col>
            </Row>
        </FormContainer>
    )
}

export default RegisterScreen