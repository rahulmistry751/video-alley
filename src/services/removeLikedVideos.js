import { SINGLE_VIDEO_ACTIONS } from "../utils";
import axios from 'axios';
const removeLikedVideos=async (video,token,videoListDispatch)=>{
  console.log(video);
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
export {removeLikedVideos};