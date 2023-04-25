import React from "react";

export default function BtnComp(props){
    return(
        <button style={{background:'#dae1f0',padding:5,borderRadius:5,borderColor:'#dae1f0',width:'150px',fontWeight: "bold"}}>{props.name}</button>
    )
}
