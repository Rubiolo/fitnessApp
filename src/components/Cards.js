import React from 'react'
//import fotoBloque1 from '../images/hombre-abs.jpg'
import './styles/Card.css'
import circulosImg from '../images/circles.png'

class Card extends React.Component {

    //Para mutar la tarjeta de un estado (aquí solo la imagen) a otro despues de un tiempo terminado
   /* constructor(props){
        super(props)
        this.state ={
            image : 'https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                image: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            })
        }, 4000);
    }*/

    render() {
        const { title, description, img, topColor, bottomColor } = this.props
        return (
            <div className="card my-4 mx-auto Fitness-Card"
            style={{
                 
                backgroundImage: `url(${circulosImg}), linear-gradient(to bottom, ${topColor}, ${bottomColor})`
            }}
            >
                <div className="card-body">
                    <div className="row center ">
                        <div className="col-4 text-center align-self-center">
                            <img src={img} alt="esto es un tio cuadrao" className="Fitness-Img my-auto  " />
                        </div>
                        <div className="col-8 Fitness-Card-Info my-auto mx-auto">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card