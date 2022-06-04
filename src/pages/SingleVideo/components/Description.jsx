import { useAuth } from '../../../context/auth-context';
import {secondaryActions} from '../../../utils';
import { addToLikedVideos } from '../../../services';
import { useVideo } from '../../../context/video-context';
import { useLocation, useNavigate } from 'react-router-dom';
import { removeLikedVideos } from '../../../services/removeLikedVideos';
import style from '../SingleVideo.module.css';
const Description=({video})=>{
    const videoInfo=video[0];
    const location=useLocation();
    const {userToken}=useAuth();
    const {videoState,videoListDispatch}=useVideo();
    const navigate=useNavigate()
    const {isLiked}=secondaryActions();
    const likedVideo=isLiked(videoInfo._id,videoState.likedVideos,userToken,videoListDispatch)
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
    return(
        <div className={`${style['description-container']}`}>
            <h2 className={`h3 fw-600 ${style.heading}`}>
                {videoInfo.title}
            </h2>
            <ul className={`list ${style['secondary-action-btns']}`}>
                <li className={`list-item ${style['action-btn']}`} title="Title" onClick={likedHandler}>
                <i className={`${likedVideo?'fas':'fal'} fa-thumbs-up ${style.like}`}></i>Like
                </li>
                <li className={`list-item ${style['action-btn']}`} title="Watch later">
                <i className="fas fa-alarm-plus"></i>Watch Later
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