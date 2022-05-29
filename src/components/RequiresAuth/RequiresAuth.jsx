import { Navigate, Outlet, useLocation} from "react-router-dom";
import {useAuth} from '../../context/auth-context'
const RequiresAuth=()=>{
    const location=useLocation();
    const {userToken}=useAuth();
    if(userToken){
        return(<Outlet/>)
    }
    return <Navigate to="login" state={{ from: location }} replace/>
}
export {RequiresAuth};