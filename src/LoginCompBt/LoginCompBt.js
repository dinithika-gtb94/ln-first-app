import React from 'react'
import './style.css';

export default function LoginCompBt() {
  return (
      <div>
      {/* class="position-absolute top-50 start-50 translate-middle" */}
      <div class="input-group mb-3" >
        <input type="text" className="form-control input-custom" placeholder="Enter Username" aria-label="Username" aria-describedby="basic-addon1"/>
        
    </div>
    <div class="input-group mb-3" >
        <input type="password" className="form-control input-custom" placeholder="Enter password" aria-label="password" aria-describedby="basic-addon1"/>
        
    </div>
    <div >
        <button type="button" class="btn btn-success input-custom-btn">Success</button>
    </div>
      </div>
    
  )
}
