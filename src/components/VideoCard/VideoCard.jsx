import { Link,useLocation,useNavigate } from 'react-router-dom';
import style from './VideoCard.module.css';
import {secondaryActions} from '../../utils/secondaryActions';
import { useVideo,useAuth } from '../../context';
import { watchLaterServices} from '../../services';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const VideoCard=({video})=>{
    const navigate=useNavigate();
    const location=useLocation();
    const {videoState,videoListDispatch,showModal,setShowModal}=useVideo();
    const {userToken}=useAuth();
    const {addToWatchLater,removeWatchLater }=watchLaterServices();
    const {isInWatchLater}=secondaryActions();
    const inWatchLater=isInWatchLater(video._id,videoState.watchLater)
    const togglePlaylistModal=(e)=>{
        e.stopPropagation();
        if(userToken){
            setShowModal(prev=>{
                return {show:true,currentVideo:video}
            })
        }
        else{
            navigate('/login',{state:{from:location}})
        }
    }
    const watchLaterHandler=(e)=>{
        e.stopPropagation();
        if(userToken){
            if(inWatchLater){
                removeWatchLater(inWatchLater,userToken,videoListDispatch)
            }
            else{
                addToWatchLater(video,userToken,videoListDispatch);
                toast.success("Added to watch later")
            }
        }
        else{
            navigate('/login',{state:{from:location}});
        }
    }
    return(
        <div className={`card ${style.card}`} key={video._id} onClick={()=>navigate(`/video/${video._id}`)}>
            <div className={` ${style['card-image-container']}`}>
                <img src={`https://img.youtube.com/vi/${video._id}/0.jpg`} alt="" />
                <ul className={`list ${style['cta-button']}`}>
                    <li title="watch later" className={`list-item ${style['list-item']}`} onClick={(e)=>watchLaterHandler(e)}>
                        <i className={`${inWatchLater?'fas':'fal'} fa-alarm-plus ${style.watchlater}`}></i>
                    </li>
                    <li title="add to playlist" className={`list-item ${style['list-item']}`} onClick={togglePlaylistModal}>
                        <i className="fas fa-list"></i>
                    </li>

                </ul>
            </div>
            <div className={`${style['card-content']}`}>
                <div className={`${style['card-content-header']}`}>
               {video.title}
                </div>
                <small>6K views | 4 months ago</small>
            </div>
            <ToastContainer position="top-center" autoClose={1000}/>
        </div>
    )
}
export {VideoCard}