import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { Description } from "./components/Description";
import { videoData } from "../../context/video-context";
import style from './SingleVideo.module.css';
const SingleVideo=()=>{
    const {videoId}=useParams();
    const video=videoData.filter(video=>video._id===videoId);
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <div className={`${style['singlevideo-container']}`}>
            <div className={`${style['videoplayer-container']}`}>
                <ReactPlayer 
                 width="100%"
                 height="100%"
                 controls
                className={`${style['videoplayer']}`}
                url={`https://www.youtube.com/embed/${videoId}`}
                />
            </div>
        <Description video={video}/>
        </div>
    )
}
export {SingleVideo};