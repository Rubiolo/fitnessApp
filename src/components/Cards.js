import React from 'react'
import fotoBloque1 from '../images/hombre-abs.jpg'
import './styles/Card.css'

class Card extends React.Component {
    render() {
        return (
            <div className="card my-4 mx-auto Fitness-Card">
                <div className="card">
                    <div className="row center ">
                        <div className="col-4 text-center align-self-center">
                            <img src={fotoBloque1} className="Fitness-Img my-auto  " />
                        </div>
                        <div className="col-8 Fitness-Card-Info my-auto">
                            <h1>Esta es el Título del primer bloque</h1>
                            <p>Este sería el primer parrafo tras el título</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card