import React from 'react'
import fotoBloque1 from '../images/hombre abs.jpg' 
class Card extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <img src={fotoBloque1}/>
                </div>
                <div>
                <h1>Esta es el Título del primer bloque</h1>
                <p>Este sería el primer parrafo tras el título</p>
                </div>
            </div>
        )
    }
}

export default Card