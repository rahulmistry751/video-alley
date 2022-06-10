import { useNavigate } from 'react-router-dom';
import { usePlaylistActions } from '../../../hooks/usePlaylistActions';
import { useAuth } from '../../../context';
import style from '../Playlist.module.css';
const PlaylistVideocard=({video,playlist})=>{
    const navigate=useNavigate();
    const {userToken}=useAuth();
    const {removeVideoFromPlaylistLocal}=usePlaylistActions();
    const removeVideoFromPlaylistHandler=(e)=>{
        e.stopPropagation();
        removeVideoFromPlaylistLocal(userToken,playlist._id,video._id)
    }
    return(
        <div className={`card ${style['playlist-video']}`} key={video._id} onClick={()=>navigate(`/video/${video._id}`)}>
        <div className={` ${style['card-image-container']}`}>
            <img src={`https://img.youtube.com/vi/${video._id}/0.jpg`} alt="thumbnail" />
            <ul className={`list ${style['cta-button']}`}>
                    <li title="remove from playlist" className={`list-item ${style['list-item']}`} onClick={(e)=>removeVideoFromPlaylistHandler(e)}>
                        <i className={`fas fa-trash-alt ${style.remove}`}></i>
                    </li>
                </ul>
        </div>
        <div className={`${style['card-content']}`}>
            <div className={`${style['card-content-header']}`}>
           {video.title}
            </div>
            <small>6K views | 4 months ago</small>
        </div>
    </div>
    )
}
export{PlaylistVideocard};