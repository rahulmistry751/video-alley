import { useEffect } from "react";
import { useVideo } from "../../context/video-context";
import { VideoCard } from "../../components";
import style from './LikedVideos.module.css';
const LikedVideos=()=>{
    const {videoState}=useVideo();
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className={`${style["videos-container"]}`}>
            {videoState.likedVideos.length?videoState.likedVideos.map(video=>{
                return <VideoCard video={video} key={video._id}/>
             }):<h3 className="h3 txt-c">Empty Liked Videos</h3>}
            
        </div>
    )
}
export {LikedVideos}