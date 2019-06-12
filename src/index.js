import React from 'react';
import ReactDOM from 'react-dom';


const user = {
    firstName : 'Juanfran',
    lastName : 'Fdez',
    avatar : 'https://image.flaticon.com/icons/svg/30/30480.svg',
    age : 40
}

function getName (user){
    return `${user.firstName} ${user.lastName}`
}

function getGreeting (user){
    if(user){
        return <h1>Hola {getName(user)}</h1>
    }
        return <h1>Hola loco</h1>

}
const element =  (
    <div>
        <h1>{getGreeting(user)}</h1>
        <img src={user.avatar}/>
    </div> 
)
const logo = <img src={user.avatar}/>
const container = document.getElementById('root')

ReactDOM.render(element,container);

