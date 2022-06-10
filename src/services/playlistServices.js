import axios from "axios";
import { SINGLE_VIDEO_ACTIONS } from "../utils";
import { toast } from "react-toastify";
const playlistServices=()=>{
 //fetches playlists from server
const getAllPlaylist= async (token,videoListDispatch) => {
  try {
    const response = await axios.get("/api/user/playlists", {
      headers: { authorization: token },
    });
    videoListDispatch({
      type: SINGLE_VIDEO_ACTIONS.UPDATE_PLAYLIST,
      payload: { playlists: response.data.playlists },
    });
  } catch (error) {
    console.error(error);
  }
};
 // add playlist
 const addNewPlaylist = async (token,title, videoDispatch) => {
    try {
      const response = await axios.post(
        "/api/user/playlists",
        { playlist: { title } },
        { headers: { authorization: token } }
      );
      videoDispatch({
        type: SINGLE_VIDEO_ACTIONS.UPDATE_PLAYLIST,
        payload: { playlists: response.data.playlists },
      });
    } catch (error) {
      console.error(error);
    }
  };
  // Add video to playlist 
  const addVideoToPlaylist = async (token,playlistId,video) => {
    try {
      const {data} = await axios.post(
        `/api/user/playlists/${playlistId}`,
        { video },
        {
          headers: { authorization:token },
        }
      );
      return(data)
    } catch (error) {
      
      console.error(
        "addVideoToPlaylist : Error in adding video to playlist",
        error
      );
    }
  };
 // Removes video from playlist
  const removeVideoFromPlaylist = async (
    token,
    playlistId,
    videoId
  ) => {
    try {
      const response = await axios.delete(
        `/api/user/playlists/${playlistId}/${videoId}`,
        {
          headers: { authorization:token },
        }
      );
      if (response.status === 200) {
        toast.success("Video removed from Playlist");
        return response.data;
      } else throw new Error();
    } catch (e) {
      toast.error(`Couldn't remove video from playlist! Try again.`);
      console.error(
        "removeVideoToPlaylist : Error in removing video from playlist",
        e
      );
    }
  };
  // Deletes playlist
  const deletePlaylist = async (token, playlistId) => {
    try {
      const response = await axios.delete(`/api/user/playlists/${playlistId}`, {
        headers: { authorization:token },
      });
      if (response.status === 200) {
        toast.success("Playlist deleted successfully");
        return response.data;
      } else throw new Error();
    } catch (e) {
      toast.error(`Couldn't delete playlist! Try again.`);
      console.error("deletePlaylist : Error in deleting playlist", e);
    }
  };
return {getAllPlaylist,addNewPlaylist,addVideoToPlaylist,removeVideoFromPlaylist,deletePlaylist};
}
export {playlistServices}