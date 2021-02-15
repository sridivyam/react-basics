import React from 'react';

import './Person.css'; 

const Person = (props) => {
    return (
        <div className ="Person">
            <p onClick={props.click} />am a {props.name} and Iam {props.age} years old 
        
            <p>{props.children}</p>
        <input type="text" onChange={props.changed} value= {props.changed} ></input>      
        </div>

        
         
    )};

export default Person;
