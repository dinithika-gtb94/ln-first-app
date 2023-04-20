import React from "react";

export default function RoundBtn(props){
    return(
        <div>
            <button style={{backgroudColor:'red',borderRadious:100,padding:2}}>{props.name}</button>
        </div>
    )
}