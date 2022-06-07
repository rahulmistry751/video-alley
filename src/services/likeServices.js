import axios from 'axios';  
import { SINGLE_VIDEO_ACTIONS } from '../utils';
const likeServices=()=>{
const addToLikedVideos=async (video,token,videoListDispatch)=>{
    try{
        const response = await axios.post(
            "/api/user/likes",
            { video },
            { headers: { authorization: token } }
          );
        videoListDispatch({type:SINGLE_VIDEO_ACTIONS.LIKE_VIDEO,payload:{likedVideo:video}})
    }
    catch(error){
        console.error(error)
    }
}
    // Removes liked video from liked list
const removeLikedVideos=async (video,token,videoListDispatch)=>{
      try {
          const {data} = await axios.delete(`/api/user/likes/${video._id}`, {
            headers: { authorization: token },
          });
          console.log(data);
          videoListDispatch({
            type: SINGLE_VIDEO_ACTIONS.UPDATE_LIKED_VIDEO,
            payload: { likes: data.likes },
          });
        } catch (error) {
          console.error(error);
        }
  }
return {addToLikedVideos,removeLikedVideos}
}
export {likeServices}