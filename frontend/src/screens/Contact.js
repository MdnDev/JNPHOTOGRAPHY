import React from "react";
import { Container, Image, Form, Button, Row, Col } from "react-bootstrap";
import Message from "../components/Message";

const Contact = () => {
  return (
    <Container>
      <section className="contactArtist my-5">
        <Image className="profilePic" src="../../images/JNTEST2.png" />
        <div className="my-3 mx-5">
          <h1>JEAN-NOËl VIREEYE</h1>
          <h6>vireeye.jean-noel@outlook.fr</h6>
          <p className="my-3" style={{ textAlign: "justify" }}>
            Jean-Noel Vireeye est un écrivain, cinéaste et photographe Français.
            Il est le fils d'une enseignante Martiniquaise qui lui permet
            notemment de découvrir le cinéma. Lors de ses études en histoires et
            en cinéma à Paris, il découvre l'art de la photographie tout en
            aiguisant sa plume. C'est en alliant ce rapport à l'écriture et à
            l'image qu'il en vient à faire ses débuts dans le cinéma avec un
            film primé à travers le monde. Les photos présentées sur ce site
            sont les premières saisies par ce jeune photographe.
          </p>
        </div>
      </section>

      <section>
        <h5>Pour me contacter, veuillez remplir le formulaire ci-dessous:</h5>
        <div style={{ marginTop: "16px" }}>
          <Message variant="info">
            L'envoi de mail via ce formulaire est géré par la plateforme formSubmit. Un captcha vous sera présenté à l'envoi de votre mail.
          </Message>
        </div>
        <Form
          action="https://formsubmit.co/vireeye.jean-noel@outlook.fr"
          method="POST"
        >
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
          <Form.Control
            type="email"
            placeholder="Email"
            name="Email"
            required
          />

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
          <Button
            className="my-3"
            variant="dark"
            type="submit"
            onClick={
              <Message variant="success">
                Votre mail à été envoyé. Merci d'avoir pris contact.
              </Message>
            }
          >
            Envoyer
          </Button>
        </Form>
      </section>
    </Container>
  );
};

export default Contact;
