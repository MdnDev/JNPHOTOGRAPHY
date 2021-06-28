import React from 'react';
import { Container, Image } from 'react-bootstrap';



const about = () => {
    return (
        
            <Container className=" text-center py-5 mx-auto">
                <Container className="contactArtist my-5">
                    <div>
                        <Image className="profilePic" src="../../images/JNTEST1.png"/>
                        <p className="py-2">&copy; Jean-Noël Vireeye</p>
                    </div>
                    <div>
                    <h2>Jean-Noël Vireeye</h2>
                    <p className="mx-3 my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </Container>
            </Container>
        
    )
}

export default about
