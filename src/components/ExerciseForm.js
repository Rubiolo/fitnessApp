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
    
   

    render() {
        const {onChange, onSubmit, form} = this.props
        return (
            <div className="container">
                <form
                    onSubmit={onSubmit}
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
                                placeholder="left Color"
                                name="leftColor"
                                onChange={onChange}
                                value={form.leftColor}
                            />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="right Color"
                                name="rightColor"
                                onChange={onChange}
                                value={form.rightColor}
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