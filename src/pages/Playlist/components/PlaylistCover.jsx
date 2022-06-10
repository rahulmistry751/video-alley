import style from '../Playlist.module.css';
import { useNavigate } from 'react-router-dom';
import { usePlaylistActions } from '../../../hooks/usePlaylistActions';
import { useAuth } from '../../../context';
const PlaylistCover=({playlist})=>{
    const {deletePlaylistLocal}=usePlaylistActions();
    const {userToken}=useAuth();
    const {title,_id,videos}=playlist;
    const navigate=useNavigate();
    const deletePlaylistHandler=(e)=>{
        e.stopPropagation();
        deletePlaylistLocal(userToken,playlist._id);
    }
    const getThumbnail = (playlist) =>
    playlist.videos.length === 0
      ? "https://img.youtube.com/vi/no_video"
      : `https://img.youtube.com/vi/${videos[0]._id}/0.jpg`;
   return(
       <div className={`${style["playlist-cover-container"]}`} onClick={()=>navigate(`/playlist/${_id}`)}>
           <div className={`${style["card-image-container"]}`}>
               <img src={getThumbnail(playlist)} alt="" className="img" />
               <div className={`${style["playlist-videocount-overlay"]}`}>
                <div className={`${style["playlist-video-count"]}`}>
                    {videos.length}
                </div>
                <div className="playlist-icon-container">
                <i className="fas fa-list"></i>
                </div>
            </div>
           </div>
           <div className={`${style['playlist-card-content']}`}>
                <div className={`${style['card-content-header']} fs-20 fw-600`}>
               {title}
                </div>
                <span className="delete-playlist" onClick={(e)=>deletePlaylistHandler(e)}>
                    <i className="fas fa-trash-alt"></i>
                </span>
            </div>

            
       </div>
   )
}
export {PlaylistCover};