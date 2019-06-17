import React from 'react'
import ExerciseList from '../components/ExerciseList'
import Welcome from '../components/Bienvenida';
import AddExercise from '../components/AddExercise';

class Exercises extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [{
                "id": 1,
                "title": "Technique Guides",
                "description": "Learn amazing street workout and calisthenics",
                "img": "https://i.ibb.co/V25d5sR/hombre-peso-Muerto.jpg",
                "topColor": "#A74CF2",
                "bottomColor": "#617BFB"
                //topColor= "#AD5CF0"
                //bottomColor="#DBDCE2"
            }, {
                "id": 2,
                "title": "Skills Training",
                "description": "Learn the secrets of bodyweight techniques",
                "img": "https://i.ibb.co/bgL644n/mujer-crunch.jpg",
                "topColor": "#17EAD9",
                "bottomColor": "#6078EA"
            }, {
                "id": 3,
                "title": "Strength Training",
                "description": "Train anytime, everywere and become a superhero!",
                "img": "https://i.ibb.co/ZGqMp7K/hombre-abs.jpg",
                "topColor": "#FAD961",
                "bottomColor": "#F76B1C"
            }]
        }
    }

    render() {
        return (
            <div>
                <Welcome
                    username="Juanfran"
                />
                <ExerciseList
                    exercises ={this.state.data}
                />
                <AddExercise
                />
            </div>
        )
    }
}
export default Exercises