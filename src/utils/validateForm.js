const validateForm=({email,password},setAuthError)=>{  
    if(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email)){
        if(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(password)){
            return true
        }
        else{
            setAuthError("Enter alphanumeric 8 character password");
            return false;
        }
    }
    else{
        setAuthError("Enter valid email id");
        return false;
    }
    
    

}

export {validateForm}