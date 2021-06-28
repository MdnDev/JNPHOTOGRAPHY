import React from 'react';
import { Container, Image, Form, Button, Row, Col } from 'react-bootstrap';


const Contact = () => {
    return (
        <Container >
            <section className="contactArtist my-5">
                <Image className="profilePic" src="../../images/JNTEST2.png"/>
                <div className="my-3 mx-5">
                <h1>JEAN-NOËl VIREEYE</h1>
                <h4>jean-noel.vireeye@pro.com</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
             </section>

            <section >
            <h5>Pour me contacter, veuillez remplir le formulaire ci-dessous:</h5>
            <Form method="POST" data-netlify="true">
                <Row>
                    <Col>
                        <Form.Label className="my-2">Nom</Form.Label>
                        <Form.Control type="text" placeholder="Nom" name="Nom" />
                    </Col>

                    <Col>
                        <Form.Label className="my-2">Prénom</Form.Label>
                        <Form.Control type="text" placeholder="Prénom" name="Prénom" />
                    </Col>
                </Row>
                
                <Form.Label className="my-2">Email</Form.Label>
                <Form.Control type="email" placeholder="Email" name="Email"/>
                
                <Form.Label className="my-2">Objet</Form.Label>
                <Form.Control type="text" placeholder="Objet" name="Objet" />

                <label htmlFor="Message" className="my-2">
                    Message
                </label>
                <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                name="message"
                />
                <div className="field">
                    <div data-netlify-recaptcha="true"></div>
                </div>
                <Button className="my-3" variant="dark" type="submit">
                    Envoyer
                </Button>
            </Form>
            </section>
        </Container>
    )
}

export default Contact
