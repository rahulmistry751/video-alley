import { SINGLE_VIDEO_ACTIONS } from "../utils";
import axios from 'axios';
import { toast } from "react-toastify";
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
export {removeWatchLater};