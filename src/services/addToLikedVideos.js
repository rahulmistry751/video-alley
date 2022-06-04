import axios from 'axios';  
import { SINGLE_VIDEO_ACTIONS } from '../utils';
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
export {addToLikedVideos}