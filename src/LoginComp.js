import React from "react";

export default function LoginComp(props){
    return(
        <form>
            <label>Enter Username:</label>
            <input type="text" />
            
            <label>Enter Password:</label>
            <input type="text" />
            
        
      <button style={{background:'red',borderRadious:100,padding:2}}>{props.name}</button>
      </form>
        // <div>
        // <input type="text" value="" />

            // <button style={{background:'red',borderRadious:100,padding:2}}>{props.name}</button>
        // </div>
    )
}
