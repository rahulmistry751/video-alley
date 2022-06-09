import { useParams } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import { useVideo } from "../../context";
import { PlaylistVideocard } from "./components/PlaylistVideoCard";
import style from './Playlist.module.css';
let filteredPlaylist;
const SinglePlaylistPage=()=>{
    const params=useParams();
    const {videoState}=useVideo();
    const {playlists}=videoState
    const filterPlaylist=()=>{
        filteredPlaylist=playlists.filter(playlist=>{
            return playlist._id===params.playlistId
        })
    }
    filterPlaylist();
    return(
        <div className={`${style["single-playlist-container"]}`}>
            {filteredPlaylist[0].videos.length?
                filteredPlaylist[0].videos.map(video=>{
                    return <PlaylistVideocard video={video} playlist={filteredPlaylist[0]} key={video._id}/>
                }):<div className={`${style["empty-singleplaylist"]} h3`}>This playlist is empty</div>
            }
            <ToastContainer  position="top-center" autoClose={1000}/>
        </div>
    )
}
export {SinglePlaylistPage}