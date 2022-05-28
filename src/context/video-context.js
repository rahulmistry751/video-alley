import { createContext,useContext,useReducer,useEffect } from "react"
import axios from 'axios'
import { VideoListReducer } from "../reducer/videoListReducer";
import { VIDEOLISTING_ACTIONS } from "../utils";
import { getFilterCategory } from "../hooks/useFilterCategory";
export let videoData;
const VideoContext=createContext()

const VideoContextProvider=({children})=>{
    const [videoState,videoListDispatch]=useReducer(VideoListReducer,{categories:[],filteredVideos:[]})
    useEffect(()=>{
        (async ()=>{
            try{
                const {data}=await axios.get('/api/videos');
               videoData=data.videos;
                videoListDispatch({type:VIDEOLISTING_ACTIONS.INITIAL_VIDEOS,payload:{initialVideos:data.videos}})
            }
            catch(error){
                console.error("Can't fetch video list",error)
            }
        })()
    },[])
    useEffect(()=>{
        (async ()=>{
            try{
                const {data}=await axios.get('/api/categories');
                videoListDispatch({type:VIDEOLISTING_ACTIONS.CATEGORIES,payload:{categories:data.categories}})
            }
            catch(error){
                console.error("Can't fetch categories list",error)
            }
        })()
    },[])
 
    return(
        <VideoContext.Provider value={{videoState,videoListDispatch}}>
            {children}
        </VideoContext.Provider>
    )
}
const useVideo=()=>useContext(VideoContext)

export {useVideo,VideoContextProvider}