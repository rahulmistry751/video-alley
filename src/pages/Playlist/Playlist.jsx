import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useVideo } from "../../context"
import { PlaylistCover } from "./components/PlaylistCover"
import style from './Playlist.module.css';
const Playlist=()=>{
    const {videoState}=useVideo();
    const {playlists}=videoState;
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <div className={`${style["playlist-container"]}`}>
            {playlists.length?
                playlists.map(playlist=>{
                    return <PlaylistCover playlist={playlist} key={playlist._id}/>
                })
                :
                <div className="txt-c h3">Empty Playlist</div>

            }
            <ToastContainer position="top-center" autoClose={1000}/>
        </div>
    )
}
export {Playlist}