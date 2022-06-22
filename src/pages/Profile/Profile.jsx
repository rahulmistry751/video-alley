import { useEffect } from 'react';
import style from './Profile.module.css';
import { useAuth } from '../../context/auth-context';
const Profile=()=>{
    const {userDetails,logoutHandler}=useAuth();
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <div className={`${style['profile-container']}`}>
            <div className={`${style['profile']}`}>
                <div className="user-details mgb-16">
                <p className={`${style['user-name']}`}>
                    {userDetails.firstName} {userDetails.lastName}
                </p> 
                <small className='user-email'>{userDetails.email}</small>

                </div>
                <button className='button' onClick={logoutHandler}>Logout</button>
            </div>
            
        </div>
    )
}
export {Profile};