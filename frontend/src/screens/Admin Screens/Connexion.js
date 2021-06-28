import React from 'react';
import { Container, Form, Button, Col } from 'react-bootstrap';

const Connexion = () => {
    return (
        <Container className="contactForm my-5">

            <h2 style={{ textAlign: 'center' }}> Se connecter </h2>
            <Form className="contactForm my-5" style={{ width:  "400px", margin: "0 auto" }}>
                <Col>
                    <Form.Label className="my-2">Adresse E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Email"/>
                </Col>

                <Col>
                    <Form.Label className="my-2">Mot de Passe</Form.Label>
                    <Form.Control type="password" placeholder="Mot de Passe"/>
                </Col>

                <Button  className="my-5"  variant="dark" type="submit" style={{ width: "100%" }}>
                        Envoyer
                </Button>
            </Form>
            
            
            
        </Container>
    )
}

export default Connexion
