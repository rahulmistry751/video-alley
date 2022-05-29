import { useState,useEffect } from "react";
import { Link,useLocation,useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/auth-context";
import { validateForm } from "../../../utils";
import "../auth.css";
const SignUp = () => {
  const navigate=useNavigate();
  const location=useLocation();
  console.log(location)
  const {signupHandler,userToken,setAuthError,authError}=useAuth();
  console.log(userToken,"signup")
  const [signupCredential,setSignupCredential]=useState({firstName:"",lastName:"",email:"",password:""})
  const signupChangeHandler=(e)=>{
    const {name,value}=e.target;
    setSignupCredential({...signupCredential,[name]:value})
  }
  const submitHandler=(e)=>{
    e.preventDefault();
    if(validateForm(signupCredential,setAuthError))
      signupHandler(signupCredential);
  }
  useEffect(()=>{
    if(userToken){
      navigate('/',{replace:true})
    }

  },[userToken])
  return (
    <div className="auth login">
      <div className="card text-only card-login">
        <div className="card-header h3 fw-600 mg-16 txt-c">
          Sign up to VideoAlley
        </div>
        <div className="card-content txt-l">
          <form action="" className="signup" onSubmit={submitHandler}>
            <div className="signup-fn">
              <label htmlFor="firstName" className="control-label gray fs-12">
                First Name
              </label>
              <input
                type="text"
                className="input form-control"
                id="firstName"
                name="firstName"
                required
                onChange={(e)=>signupChangeHandler(e)}
                value={signupCredential.firstName}
              />
            </div>
            <div className="signup-ln">
              <label htmlFor="lastName" className="control-label gray fs-12">
                Last Name
              </label>
              <input
                type="text"
                className="input form-control"
                id="lastName"
                name="lastName"
                required
                onChange={(e)=>signupChangeHandler(e)}
                value={signupCredential.lastName}

              />
            </div>
            <div className="signup-pass">
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
                onChange={(e)=>signupChangeHandler(e)}
                value={signupCredential.password}

              />
            </div>
            <div className="signup-email">
              <label htmlFor="email" className="control-label gray fs-12">
                Email
              </label>
              <input
                type="email"
                className="input form-control"
                id="email"
                name="email"
                autoComplete="off"
                required
                onChange={(e)=>signupChangeHandler(e)}
                value={signupCredential.email}
              />
            </div>
            <div className="secondary-action txt-r fs-12">
              <span className="save-login">
                <input
                  type="checkbox"
                  className="input-checkbox checkbox-terms"
                  id="terms"
                  required
                />
                <label htmlFor="terms" className="gray">
                   I accept all Terms & conditions
                </label>
              </span>
            </div>
            {
              authError && <div className="error mgb-16">{authError}</div>
            }
            <div className="primary-action txt-c">
              <button className="button button-full" type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="create-account">
        <span>Already have an account? </span>
        <Link to="/login" className="fw-600">
          Log In
        </Link>
      </div>
    </div>
  );
};
export { SignUp };
