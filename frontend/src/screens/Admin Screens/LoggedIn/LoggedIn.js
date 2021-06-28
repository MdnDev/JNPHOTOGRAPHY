import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'


const LoggedIn = () => {
    return (
       <Container style={{ display: "flex" }} >
           
            <div style={{ border: "2px solid blue", textAlign: "center", width: "50vw", height: "50vh"}} className="my-5 mx-auto">
                <h3>Bonjour, Administrateur.</h3>
                
                    <Link to="/updatephotos" className="my-3" style={{ display: "flex" }}>
                    <i class="fas fa-upload mx-3"></i>
                    <h5>Ajouter/Retirer une photo de la gallerie</h5>
                    </Link> 
                    



                    
                    <Link className="my-3" style={{ display: "flex" }}>
                    <i class="fas fa-shopping-cart mx-3" ></i>
                    <h5>Ajouter/retirer un article de la boutique</h5>
                    </Link>
                    
                   

                    
                    <Link className="my-3" style={{ display: "flex" }} >
                    <i class="fas fa-user-shield mx-3" ></i>
                    <h5>Ajouter/retirer un administrateur</h5>
                    </Link>
                    

                    
                    <Link className="my-3" style={{ display: "flex" }}>
                    <i class="fas fa-users mx-3" ></i>
                    <h5>Ajouter/Retirer un utilisateur</h5>
                    </Link>
                    
                
                
            </div>
        </Container>
    )
}

export default LoggedIn;
