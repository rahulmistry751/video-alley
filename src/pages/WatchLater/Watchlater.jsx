import { ToastContainer } from "react-toastify";
import { VideoCard } from "../../components";
import { useVideo } from "../../context/video-context";
import style from './Watchlater.module.css';
const WatchLater=()=>{
    const {videoState}=useVideo();
    return (
        <div className={`${style["watchlater-container"]}`}>
            {
                videoState.watchLater.length?videoState.watchLater.map(video=>
                    <VideoCard video={video} key={video._id}/>
                    ):<h3 className="h3 txt-c">Empty Watch Later</h3>
            }
            <ToastContainer position="top-center" autoClose={1000}/>
        </div>
    )
}
export {WatchLater}