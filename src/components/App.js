import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Exercises from '../pages/Exercises'
import NotFound from '../pages/NotFound'
import ExerciseNewContainer from '../pages/ExerciseNewContainer';


const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/exercise" component={Exercises} />
            <Route exact path="/exercise/new" component={ExerciseNewContainer} />
            <Route component={NotFound} />
        </Switch>

    </BrowserRouter>
)
//funcion sin arrowfunction
/*function App(props) {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/exercise" component={Exercises} />
                <Route exact path="/exercise/new" component={ExerciseNew} />
                <Route component={NotFound} />
            </Switch>

        </BrowserRouter>
    )
}*/
export default App