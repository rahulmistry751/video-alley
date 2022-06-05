import { useState } from "react";
import { useVideo } from "../../context/video-context";
import { VideoCard } from "../VideoCard/VideoCard";
import style from './VideoListing.module.css';
import { VIDEOLISTING_ACTIONS } from "../../utils";
const VideoListing=()=>{
    const {videoState,videoListDispatch}=useVideo();
    const [isSelected,setIsSelected]=useState(-1);
return(
    <div className={`${style['videolisting-container']}`}>
        <div className={`${style["categories-list"]}`}>
            <button className={`${style["category-chip"]} ${isSelected===-1?style.active:""}`} onClick={()=>{
                setIsSelected(-1)
                videoListDispatch({type:VIDEOLISTING_ACTIONS.FILTER_BY_CATEGORY,payload:{filterCategory:"All"}})}}>All</button>
       
       
            {   
                videoState.categories.map((category,index)=>(
                    <button key={index}className={`${style["category-chip"]} ${isSelected===index?style.active:""}`} onClick={()=>{
                        setIsSelected(index)
                        videoListDispatch({type:VIDEOLISTING_ACTIONS.FILTER_BY_CATEGORY,payload:{filterCategory:category}})}}>{category}</button>
                ))

            }
         </div>
        
     <div className={`${style.videolist}`}>
    {videoState.filteredVideos.map((video)=>{
        return <VideoCard video={video} key={video._id}/>
    })}
    </div>
    </div>
    
)
}
export {VideoListing}