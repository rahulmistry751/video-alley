import axios from 'axios';  
import { SINGLE_VIDEO_ACTIONS } from '../utils';
const addToWatchLater=async (video,token,videoListDispatch)=>{
    try{
        const response = await axios.post(
            "/api/user/watchlater",
            { video },
            { headers: { authorization: token } }
          );
        videoListDispatch({type:SINGLE_VIDEO_ACTIONS.ADD_TO_WATCHLATER,payload:{watchLaterVideo:video}})
    }
    catch(error){
        console.error(error)
    }
}
export {addToWatchLater}