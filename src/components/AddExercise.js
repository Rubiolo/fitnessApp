import React from 'react'
import './styles/addExercise.css'
import { Link } from 'react-router-dom'

class AddExercise extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            image : 'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/add.png?alt=media&token=fbe1d973-4b4f-42d8-b76e-2c4354f6ed9d'
        }
    }
    render() {
        
        return (
            <Link to="/exercise/new" className="text-center">
                <img src={this.state.image} alt="add exercise" className="add-Img" />
            </Link>
        )
    }
}
export default AddExercise

//      version corta
/*import buttomImg from '../images/add.png'

function AddButton(props){
    return (
        <a href="/exercise/new">
            <img src={buttomImg} class="Fitness-Add" />
        </a>
        
    )
}
export default AddButton*/