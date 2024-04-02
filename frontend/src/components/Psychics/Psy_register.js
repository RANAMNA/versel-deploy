import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import GenderCheckbox from "../users/GenderCheckbox";
import { useState } from "react";
import usePsySignup from "../../hooks/usePsySignup";

  const Psy_register = () => {
    const [inputs, setInputs] = useState({
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: "",
    });
  
    const { loading, signup } = usePsySignup();
  
    const handleCheckboxChange = (gender) => {
      setInputs({ ...inputs, gender });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      await signup(inputs);
    };
  
  return (

   
    <div className="hold-transition login-page"data-aos="zoom-in-right" >
   <div className="register-box">
  <div className="card card-outline card-primary">
    <div className="card-header text-center">
      <span className='text-white'> Talktopsychics</span>
     
    </div>
    <div className="card-body">
      <p className="login-box-msg">Register a new membership</p>
      <form encType='multipart/form-data'onSubmit={handleSubmit} >
        
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Email" 
               onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
               />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>

        <div className="input-group mb-3">
          
          <input type="name" className="form-control" placeholder="username"
								value={inputs.username}
                onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            
            />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-user" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Password" 
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
       

        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Confirm Password" 
          	value={inputs.confirmPassword}
            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
          />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />


        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="agreeTerms" />
              <label style={{color:'#000'}}>
                I agree to the terms
              </label>
            </div>
          </div>
          {/* /.col */}
          <div className="col-4">
            
            <button type="submit"   className="btn  btn-block" style={{background:'#ff6000' ,color:'#fff'}}>							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
</button>
          </div>
          {/* /.col */}
        </div>
      </form>
      <div className="social-auth-links text-center">
      <Link to ="/signup">
        <a href="" className="btn btn-block " style={{background:'#ff6000' ,color:'#fff'}}>
          <i className="fab fa-facebook mr-2" />
          Sign up using Facebook
        </a>
        </Link>
       <br/>
       <Link to ="/signup">
        <a href="" className="btn btn-block " style={{background:'#90009d' ,color:'#fff'}}>
          <i className="fab fa-google-plus mr-2" />
          Sign up using Google+
        </a>
        </Link>
      </div>
      <a href="" className="text-center">I already have a membership <NavLink to="/psychics_signin">  Sign In</NavLink></a>
    </div>
    {/* /.form-box */}
  </div>{/* /.card */}
</div>  

    </div>
    
  )
}

export default Psy_register;
