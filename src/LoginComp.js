import React from "react";
import InputComp from "./InputComp/InputComp";
import BtnComp from "./BtnComp";

export default function LoginComp(props){
    return(
        <div>
        <h1 style={{display: "flex",justifyContent: "center",alignItems: "center"}}>{props.formName}</h1>
            <form style={{background:'#c7d3eb',padding:10}}>
                <div className="input-container" style={{display:'flex',alignItems: 'center',justifyContent: 'center',marginTop:'5px'}}>
                    <InputComp type='text' name='uname' placeholder='Username'/>
                </div>
                <div className="input-container" style={{display:'flex',alignItems: 'center',justifyContent: 'center',marginTop:'5px'}}>                    
                    <InputComp type='password' name='password' placeholder='Password'/>
                </div>
                <div className="button-container" style={{display:'flex',alignItems: 'center',justifyContent: 'center',marginTop:'15px'}}>
                    <BtnComp name='Sign In'/>
                </div>
            </form>
        </div>
    )
}
