import { videoData } from "../context/video-context"
const getFilteredVideos=(category)=>{
    if(category==="All")
        return videoData;
    else
        return videoData.filter(video=>video.categoryName===category)
}
export {getFilteredVideos}