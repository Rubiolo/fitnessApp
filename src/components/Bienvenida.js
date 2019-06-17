import React from 'react'
import './styles/Bienvenida.css'


function Welcome(props) {
    return (
        <div className="container">
            <div className="Fitness-User-Info">
                <h1>Hallo {props.username}!</h1>
                <p>Willkommen in Join-Fitnessstudio</p>
            </div>
        </div>
    )
}
export default Welcome