import { createContext,useContext,useState } from "react";
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";
export let userToken="";
const AuthContext=createContext();

const AuthContextProvider=({children})=>{
    const navigate=useNavigate();
    const [authError,setAuthError]=useState("");
    const [userToken,setUserToken]=useState("");
    const [userDetails,setUserDetails]=useState("");
    const loginHandler=async ({email,password})=>{
        try{
            const {data,status}=await axios.post('/api/auth/login',{email,password})
            if(status===200 || status===201)
                localStorage.setItem("loginDetails",JSON.stringify({token:data.encodedToken,user:data.foundUser}))
            setUserToken(data.encodedToken)
            setUserDetails(data.foundUser);
            setAuthError("")
        }
        catch(error){
            console.error(error);
            setAuthError("Credentials entered are invalid");
        }

    }
    const logoutHandler=()=>{
        setUserDetails('');
        setUserToken('');
       
        localStorage.removeItem('loginDetails');
        navigate("/")
    }
    const signupHandler=async ({firstName,lastName,email,password})=>{
        try{
            const {data,status}=await axios.post('/api/auth/signup',{email,password,firstName,lastName});
            if(status===201)
                localStorage.setItem("loginDetails",JSON.stringify({token:data.encodedToken,user:data.createdUser}))
            setAuthError("");
            setUserToken(data.encodedToken);
            setUserDetails(data.createdUser);

        }
        catch(error){
            setAuthError("Email already exists");
            console.error(error);
        }

    }
    
    return(
        <AuthContext.Provider value={{loginHandler,signupHandler,setAuthError,authError,userToken,userDetails,logoutHandler}}>
            {children}
        </AuthContext.Provider>
    )
}
const useAuth=()=>useContext(AuthContext);
export {AuthContextProvider,useAuth}