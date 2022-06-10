import { playlistServices } from "../services/playlistServices";
import { useVideo} from "../context";
import { SINGLE_VIDEO_ACTIONS } from "../utils";
const usePlaylistActions=()=>{
    const {addVideoToPlaylist,removeVideoFromPlaylist,deletePlaylist}=playlistServices();
    const {videoState,videoListDispatch}=useVideo()
    const addVideoToPlaylistLocal=async (token,playlistId,video)=>{
        const response= await addVideoToPlaylist(token,playlistId,video)
        const updatedVideoPlaylist= videoState.playlists.reduce((acc,curr)=>{
            return curr._id===response.playlist._id?[...acc,response.playlist]:[...acc,curr];
        },[])
        videoListDispatch({type:SINGLE_VIDEO_ACTIONS.UPDATE_PLAYLIST_VIDEOS,payload:{updatePlaylist:updatedVideoPlaylist}})   
    }
    const removeVideoFromPlaylistLocal=async(token,playlistId,videoId)=>{
        const response=await removeVideoFromPlaylist(token,playlistId,videoId);
        const updatedVideoPlaylist = videoState.playlists.reduce(
            (acc, curr) =>
              curr._id === response.playlist._id
                ? [...acc, response.playlist]
                : [...acc, curr],
            []
          );
        videoListDispatch({type:SINGLE_VIDEO_ACTIONS.UPDATE_PLAYLIST_VIDEOS,payload:{updatePlaylist:updatedVideoPlaylist}})    
    }
    const deletePlaylistLocal=async (token,playlistId)=>{
        const response=await deletePlaylist(token,playlistId);
        videoListDispatch({type:SINGLE_VIDEO_ACTIONS.UPDATE_PLAYLIST_VIDEOS,payload:{updatePlaylist:response.playlists}})
    }
    return {addVideoToPlaylistLocal,removeVideoFromPlaylistLocal,deletePlaylistLocal};
}
export {usePlaylistActions}