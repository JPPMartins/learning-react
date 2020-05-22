import React from 'react';

const UserOutput = (props) => {

    return (
        <div className="UserOutput">
            <p> Olá eu Sou {props.name}</p>
            <p> Eu tenho {props.age} anos!</p>
        </div>
    )}

    export default UserOutput;