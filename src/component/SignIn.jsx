import { useState, useRef } from 'react'
import { Eye, EyeOff} from 'lucide-react';
// import {signUpHandar, loginHandar} from './handler'
import axios from 'axios';

import '../assets/SignIn.css'

const SignIn = () => {
  
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const userName= useRef();
  const userNumber = useRef();
  const userMail= useRef();
  const userPassword= useRef();


  const handleSubmitSignUp = async (e) => {
    e.preventDefault();
    const nameVal = userName.current.value;
    const numberVal = userNumber.current.value;
    const mailVal = userMail.current.value;
    const passwordVal = userPassword.current.value;
    userName.current.value = "";
    userNumber.current.value = "";
    userMail.current.value = "";
    userPassword.current.value = "";
    const payload = {firstName: nameVal, phone: numberVal, email: mailVal, password: passwordVal}
    try {
      const responce = await axios.post('https://dummyjson.com/users/add', payload);
      alert("success:", responce.data);
    }
    catch(err) {
      console.log("submition failed:",err);
    }
    // signUpHandar(nameVal, numberVal, mailVal, passwordVal)
    };

    const handleSubmitLogin = async(e) => {
      e.preventDefault();
       const nameVal = userName.current.value
      const passwordVal = userPassword.current.value;
     
      // userName.current.value = "";
      // userPassword.current.value = "";
      const payload = {username: nameVal, password: passwordVal}
      try{
        const responce = await axios.post('https://dummyjson.com/auth/login',payload);
        const token = responce.data.accessToken;
        localStorage.setItem('authToken', token);
      }
      catch (err){
        console.err('Login failed:', err.response?.data || err.message)
      }

      // loginHandar(nameVal,passwordVal)
    };


 
  return (
    <>
      <div className='main-container'>
        <div className="container">
          {isLogin === true ? (
            <div className="login-container" >
              <form className="login-form" onSubmit={handleSubmitLogin}>
                <h2>Login</h2>
                <div className="input-group">
                  <label>UserName</label>
                  <input ref={userName} type="text" placeholder="Enter UserName"/>
                </div>
                <div className="input-group password-group">
                  <label>Password</label>
                  <input ref={userPassword} type=" text " placeholder="Enter your password" />
                  <span className="show-hide" onClick={() => setShowPassword(!showPassword)} >
                    {showPassword ? <EyeOff />: <Eye />}
                  </span>
                </div>
                <button type="submit" className="login-btn"> Login </button>
                <p className="signup-link">
                  Don't have an account? <spen onClick={()=>setIsLogin(false)}>Sign Up</spen>
                </p>
              </form>    
            </div>
          ):(
            <div className="login-container" >
              <form className="login-form" onSubmit={handleSubmitSignUp}>
                <h2>Sign Up</h2>
                <div className="input-group">
                  <label>UserName</label>
                  <input ref={userName} type="text" placeholder="Enter UserName"/>
                </div>
                <div className="input-group">
                  <label>Number</label>
                  <input ref={userNumber} type="text" placeholder="Enter your Mobile No."/>
                </div>
                <div className="input-group">
                  <label>Email</label>
                  <input ref={userMail} type="email" placeholder="Enter your email"/>
                </div>
                <div className="input-group password-group">
                  <label>Password</label>
                  <input ref={userPassword} type={showPassword ? "text" : "password"} placeholder="Enter your password" />
                  <span className="show-hide" onClick={() => setShowPassword(!showPassword)} >
                    {showPassword ? <EyeOff />: <Eye />}
                  </span>
                </div>
                <button type="submit" className="login-btn"> Sign Up </button>
                <p className="signup-link">
                  Don't have an account? <spen onClick={()=>setIsLogin(true)}>Login</spen>
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
    
  )
}

export default SignIn