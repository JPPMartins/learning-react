import React from 'react';

const person = (props) => {
//return <p> I'm Person, I'm { Math.floor(Math.random() * 30)} years old </p>

// conteúdo dinâmico com props
return (
<div> 
    <p> Eu sou o {props.name}, tenho {props.age} anos!! </p> 
    <p> {props.children} </p>
</div>


)
 
}

export default person;