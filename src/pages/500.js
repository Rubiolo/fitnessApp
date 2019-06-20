import React from 'react'
import FatalErrorImg from '../images/Oopsbutton.jpg'
import '../components/styles/Errors.css'

class FatalError extends React.Component {
    render() {
        return (
            <div className="text-center">
                <h1 className="Error_Text" > Error: Qué pollas has roto ?? !! -.- </h1>
                <img src = { FatalErrorImg } alt = "Error 500" className = "Error_Image" ></img >
            </div>
        )
    }
}
export default FatalError