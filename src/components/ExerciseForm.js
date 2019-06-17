import React from 'react'

class ExerciseForm extends React.Component {

    // Manejar un evento
    /*handleClick = () => {
        console.log('Has hecho Click!!')
    }
    render() {
        return (
            <button onClick={this.handleClick}>
                Send
            </button>
        )
    }*/
    
    handleSubmit = e => {
        e.preventDefault() 
        console.log(this.state) 
    }

    render() {
        const {onChange, form} = this.props
        return (
            <div className="container">
                <form
                    onSubmit={this.handleSubmit}
                >
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="title"
                            name="title"
                            onChange={onChange}
                            value={form.title}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="description"
                            name="description"
                            onChange={onChange}
                            value={form.description}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="img"
                            name="img"
                            onChange={onChange}
                            value={form.img}
                        />
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="topColor"
                                name="topColor"
                                onChange={onChange}
                                value={form.topColor}
                            />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="bottomColor"
                                name="bottomColor"
                                onChange={onChange}
                                value={form.bottomColor}
                            />
                        </div>
                    </div>
                    <button 
                        type="submit"
                        className="btn btn-primary"
                    >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}
export default ExerciseForm