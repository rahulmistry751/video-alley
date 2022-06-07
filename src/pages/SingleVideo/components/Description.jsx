import {useEffect}from 'react';
import { useAuth } from '../../../context/auth-context';
import {secondaryActions} from '../../../utils';
import { historyServices, likeServices,watchLaterServices } from '../../../services';
import { useVideo } from '../../../context/video-context';
import { useLocation, useNavigate } from 'react-router-dom';
import style from '../SingleVideo.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Description=({video})=>{
    const videoInfo=video[0];
    const location=useLocation();
    const {userToken}=useAuth();
    const {videoState,videoListDispatch}=useVideo();
    const navigate=useNavigate()
    const {addToHistory}=historyServices();
    const {addToLikedVideos,removeLikedVideos}=likeServices();
    const {addToWatchLater,removeWatchLater }=watchLaterServices();
    const {isLiked,isInWatchLater}=secondaryActions();
    const likedVideo=isLiked(videoInfo._id,videoState.likedVideos)
    const inWatchLater=isInWatchLater(videoInfo._id,videoState.watchLater)
    const likedHandler=()=>{
        if(userToken){
            if(likedVideo){
                removeLikedVideos(likedVideo,userToken,videoListDispatch)
            }
            else{
                addToLikedVideos(videoInfo,userToken,videoListDispatch);
            }
        }
        else{
            navigate('/login',{state:{from:location}});
        }
    }
    const watchLaterHandler=()=>{
        if(userToken){
            if(inWatchLater){
                removeWatchLater(inWatchLater,userToken,videoListDispatch)
            }
            else{
                addToWatchLater(videoInfo,userToken,videoListDispatch);
                toast.success("Added to watch later")
            }
        }
        else{
            navigate('/login',{state:{from:location}});
        }
    }
    useEffect(()=>{
        if(userToken) 
            addToHistory(userToken,videoInfo,videoListDispatch);
    },[videoInfo._id])
    return(
        <div className={`${style['description-container']}`}>
            <ToastContainer position="top-center" autoClose={1000}/>
            <h2 className={`h3 fw-600 ${style.heading}`}>
                {videoInfo.title}
            </h2>
            <ul className={`list ${style['secondary-action-btns']}`}>
                <li className={`list-item ${style['action-btn']}`} title="Title" onClick={likedHandler}>
                <i className={`${likedVideo?'fas':'fal'} fa-thumbs-up ${style.like}`}></i>Like
                </li>
                <li className={`list-item ${style['action-btn']}`} title="Watch later"onClick={watchLaterHandler}>
                <i className={`${inWatchLater?'fas':'fal'} fa-alarm-plus ${style.watchlater}`}></i>Watch Later
                </li>
                <li className={`list-item ${style['action-btn']}`} title="Add to playlist">
                <i className="fas fa-list"></i>Add to playlist
                </li>
            </ul>
            <hr></hr>
            <p className={`fw-600 ${style.description}`}>
                {videoInfo.description}
            </p>
        </div>
    )
}
export {Description}