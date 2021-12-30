import React from 'react';
import { Container, Image } from 'react-bootstrap';



const about = () => {
    return (
        
            <Container className=" text-center py-5 mx-auto">
                <h2>Jean-Noël Vireeye</h2>
                <Container className="contactArtist my-3">
                    <div className="my-5 ">
                        <Image className="profilePic" src="../../images/JNTEST1.png"/>
                        <p className="py-2">&copy; Jean-Noël Vireeye</p>
                    </div>
                    <div className="mx-5 ">
                    <p className="my-3" style={{textAlign: 'justify' }}>
                        Professeur de métier, elle empruntait des films à la vidéothèque ainsi qu'au collège ou elle enseignait.
                        Les portes du petit cinéma de la ville semblaient immenses et venaient couronner une semaine d'école. Un peu comme une récompense, un moment de gaieté bien mérité.
                    </p>

                    <br/>

                    <p style={{textAlign: 'justify' }}>
                        Un repas aux saveurs oubliées acheté dans les roulottes situées juste en face du cinéma ou sur la place du marché, une tenue de circonstance comme si il s'agissait d'assister à un concert orchestral. Tout paraissait si exceptionnel. Et ces gestes, qui n'ont d'ordinaires que la conception de l'étranger, contribue à la mélancolie de l'homme à mesure que le temps réduit son irrémédiable dessein.
                    </p>

                    <br/>

                    <p style={{textAlign: 'justify' }}>
                        Ces gestes d'apparences ordinaires sont exceptionnels car ils sont tombés dans les limbes de l'esprit. Un doux souvenir, mêlant à la fois tristesse et réconfort. La valse des émotions.
                    </p>

                    <br/>

                    <p style={{textAlign: 'justify' }}>
                        Ils sont la génèse même de la culture propre à l'individu. Marco Polo en 1938, vingt mille lieues sous les mers avec Kirk Douglas, Les dix commandements de Cécile B. De Mille, Ben Hur, Errol Flynn en robin des bois.
                    </p>

                    <br/>

                    <p style={{textAlign: 'justify' }}>
                        c'est ainsi qu'une femme me fit embrasser le septième art à mon insu.
                    </p>
                    
                    </div>
                </Container>
            </Container>
        
    )
}

export default about
