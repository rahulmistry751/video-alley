import { useState,useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useVideo,useAuth } from '../../context';
import { usePlaylistActions } from '../../hooks/usePlaylistActions';
import { playlistServices } from '../../services';
import style from './PlaylistModal.module.css';
const PlaylistModal=()=>{
    const {getAllPlaylist,addNewPlaylist}=playlistServices();
    const {videoState,setShowModal,videoListDispatch,showModal}=useVideo();
    const {addVideoToPlaylistLocal,removeVideoFromPlaylistLocal}=usePlaylistActions();
    const {currentVideo}=showModal;
    const {userToken}=useAuth();
    const [showInput,setShowInput]=useState(false);
    const [playlistName,setPlaylistName]=useState("");
    useEffect(()=>{
        getAllPlaylist(userToken,videoListDispatch);
    },[userToken])
    const isVideoInPlaylist=(playlist)=>{
        const filteredVideo=playlist.videos.filter(playlistVideo=>playlistVideo._id===currentVideo._id)
        return !!filteredVideo.length
    }
    const createPlaylistHandler=()=>{

        setPlaylistName("");
        setShowInput(true);
    }
    const playlistInputHandler=()=>{
            if(playlistName){
                addNewPlaylist(userToken,playlistName,videoListDispatch);
                setShowInput(false);
            }  
    }
    const playlistHandler=(playlist)=>{
        if(isVideoInPlaylist(playlist)){
            removeVideoFromPlaylistLocal(userToken,playlist._id,currentVideo._id)
        }
        else{
            addVideoToPlaylistLocal(userToken,playlist._id,currentVideo)
        }
    }
    return(
        <div className={`modal-container ${style['playlist-modal-container']} `}>
	        <div className={`modal ${style["playlist-modal"]}`}>
                <div className={`${style["save-to-heading"]}`}>
                    <h3 className="heading fs-20">Save to</h3>
                    <div className={`${style["close-modal"]}`} onClick={()=>setShowModal(prev=>!prev)}>
                        <i className="fas fa-times fs-20"></i>
                    </div>
                </div>
                <hr/>
                <div className="playlist-items">
                    <div className="playlists">
                        {videoState.playlists.length?videoState.playlists.map(playlist=>
                            <div className={`${style["playlist"]}`} key={playlist._id}>
                            <input type="checkbox" className={`${style["playlist-check"]}`} checked={isVideoInPlaylist(playlist)} onChange={(e)=>playlistHandler(playlist)}/>
                            <span className="playlist-name">{playlist.title}</span>
                        </div>
                        ):""}
                    </div>
                    {showInput && <div className="new-playlist">
                        <input type="text" required placeholder='Enter playlist name' className={`${style["playlist-input"]}`} value={playlistName} onChange={(e)=>setPlaylistName(e.target.value)}/>
                    </div>}
                   
                </div>
                <hr/>
		        <div className={`${style["create-action"]}`}>
		            {showInput?<button className='button button-full' onClick={playlistInputHandler}>
                        Create
                    </button>:<button className='button button-full' onClick={createPlaylistHandler}>
                        Create playlist
                    </button> }
  		        </div>
            </div>
    </div>
    )
}
export {PlaylistModal};