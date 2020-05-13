import React from 'react';

const person = (props) => {
//return <p> I'm Person, I'm { Math.floor(Math.random() * 30)} years old </p>

// conteúdo dinâmico com props
return (
<div className="Person"> 
    <p onClick={props.click}> Eu sou o {props.name}, tenho {props.age} anos!! </p> 
    <p> {props.children} </p>
    <input type="text" onChange={props.changed} />
</div>
)}

export default person;