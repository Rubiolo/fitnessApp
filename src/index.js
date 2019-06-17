import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Cards'
import Welcome from './components/Bienvenida';
import 'bootstrap/dist/css/bootstrap.css'


const container = document.getElementById('root')

ReactDOM.render(<div>
    <Welcome 
        username="Juanfran"
    />
    <Card
        title="Esta es el Título desde index.js usando props"
        description="Este sería el primer parrafo tras el título"
        img="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        topColor="#AD5CF0"
        bottomColor="#DBDCE2"
    />
</div>, container);

