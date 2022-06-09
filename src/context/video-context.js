import { createContext,useContext,useReducer,useEffect,useState } from "react"
import axios from 'axios'
import { VideoListReducer } from "../reducer/videoListReducer";
import { VIDEOLISTING_ACTIONS } from "../utils";
export let videoData;
const initialState={
    categories:[],
    history:[],
    playlists:[],
    playlistVideos:[],
    likedVideos:[],
    watchLater:[],
    filteredVideos:[]
}
const VideoContext=createContext()
const VideoContextProvider=({children})=>{
    const [videoState,videoListDispatch]=useReducer(VideoListReducer,initialState);
    const [showModal,setShowModal]=useState({'show':false,currentVideo:""});
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
        <VideoContext.Provider value={{videoState,videoListDispatch,showModal,setShowModal}}>
            {children}
        </VideoContext.Provider>
    )
}
const useVideo=()=>useContext(VideoContext)

export {useVideo,VideoContextProvider}