import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Impression = ({ impression }) => {
    return (
        <Container className="img-grid py-5 mx-auto">
            <Link to={`/impression/${impression._id}`}>
                <Image className="photographs" src={impression.image}/>
            </Link>
        </Container>
    )
}

export default Impression
