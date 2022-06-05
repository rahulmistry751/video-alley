import "../auth.css";
import React,{useState,useEffect} from "react";
import { Link,useNavigate,useLocation } from "react-router-dom";
import {useAuth} from "../../../context/auth-context";

const guestLoginCredentail = {
  email: "test@gmail.com",
  password: "test@123",
};
const Login = () => {
  const location=useLocation();
  const navigate=useNavigate();
  const [loginCredential,setLoginCredential]=useState({email:"",password:""})
  const {loginHandler,authError,userToken}=useAuth();
  const loginTestCredentails=()=>{
    setLoginCredential({email:guestLoginCredentail.email,password:guestLoginCredentail.password})
  }
  const changeHandler=(e)=>{
  const {name,value}=e.target;
    setLoginCredential({...loginCredential,[name]:value})
  }
const submitHandler=(e)=>{
  e.preventDefault();
  loginHandler(loginCredential);
}
  useEffect(()=>{
    if(userToken){
      navigate(location.state?.from?.pathname || '/',{replace:true})
    }

  },[userToken])
  return (
    <div className="auth login">
      <div className="card text-only card-login">
        <div className="card-header h3 fw-600 mg-16 txt-c">Log in to VideoAlley</div>
        <div className="card-content txt-l">
          <form action="" onSubmit={(e)=>submitHandler(e)}>
            <div className="login-username">
              <label htmlFor="email" className="control-label gray fs-12">
                Email
              </label>
              <input
                type="email"
                className="input form-control"
                id="email"
                required
                name="email"
                value={loginCredential.email}
                onChange={(e)=>changeHandler(e)}
              />
            </div>
            <div className="login-password">
              <label htmlFor="password" className="control-label gray fs-12">
                Password
              </label>
              <input
                type="password"
                className="input form-control"
                id="password"
                name="password"
                autoComplete="off"
                required
                value={loginCredential.password}
                onChange={(e)=>changeHandler(e)}
              />
            </div>
            {
              authError && <div className="error mgb-16">{authError}</div>
            }
            
             <div className="primary-action txt-c mgb-16">
              <button className="button button-full" type="submit" onClick={loginTestCredentails}>
               Log in using test credentails
              </button>
            </div>
            <div className="primary-action txt-c">
              <button className="button button-full" type="submit">
                Log In
              </button>
            </div>

          </form>
        </div>
      </div>
      <div className="create-account">
        <span>New to VideoAlley? </span>
        <Link to={{pathname:"/signup",state:{from:location}}} className="fw-600">
          Sign Up
        </Link>
      </div>
    </div>
  );
};
export { Login };
