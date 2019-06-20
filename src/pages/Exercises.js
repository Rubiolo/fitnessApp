import React from 'react'
import ExerciseList from '../components/ExerciseList'
import Welcome from '../components/Bienvenida'
import AddExercise from '../components/AddExercise'
import Loading from '../components/Loading'
import FatalError from './500'

class Exercises extends React.Component {
    //con Babel no es necesario crear el constructor, solo el State
    /*constructor(props) {
        super(props)
        this.*/
    state = {
        data: [],
        loading: true,
        error: null
    }
    /*   Borrar para usar desde API (FitnessAPI)  (va entre los parentesis de data)
    {
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
    }
    */


    async componentDidMount() {
        await this.fetchExcercises()
    }

    fetchExcercises = async () => {
        try {
            let res = await fetch('http://localhost:8000/api/exercises/')
            let data = await res.json()

            this.setState({
                data,
                loading: false
            })

        } catch (error) {
            this.setState({
                loading: false,
                error
            })
        }


    }


    render() {
        if (this.state.loading) {
            return <Loading />
        }
        if (this.state.error) {
            return <FatalError />
        }
        return (
            <React.Fragment>
                <Welcome
                    username="Juanfran"
                />
                <ExerciseList
                    exercises={this.state.data}
                />
                <AddExercise
                />
            </React.Fragment>
        )
    }
}
export default Exercises