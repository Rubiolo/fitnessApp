import React from 'react'
import './styles/Bienvenida.css'

const Welcome = ({username}) => (
    <div className="container">
        <div className="Fitness-User-Info">
            <h1>Hallo {username}!</h1>
            <p>Willkommen in Join-Fitnessstudio</p>
        </div>
    </div>
)

export default Welcome