import axios from 'axios';  
import { SINGLE_VIDEO_ACTIONS } from '../utils';
import { toast } from 'react-toastify';
const watchLaterServices=()=>{
    // Adds to watch later list
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
    // Removes from watch later list
    const removeWatchLater=async (video,token,videoListDispatch)=>{
        try {
            const {data} = await axios.delete(`/api/user/watchlater/${video._id}`, {
              headers: { authorization: token },
            });
            videoListDispatch({
              type: SINGLE_VIDEO_ACTIONS.UPDATE_WATCHLATER,
              payload: { watchLater: data.watchlater },
            });
            toast.success("Removed from watch later")
          } catch (error) {
            console.error(error);
          }
    }
    return {addToWatchLater,removeWatchLater}
}
export {watchLaterServices};