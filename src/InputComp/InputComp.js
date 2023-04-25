import React from "react";
import './style.css';

export default function InputComp(props){
    return(
        <input className="input" type={props.type} name={props.name} placeholder = {props.placeholder} required/>
    )
}