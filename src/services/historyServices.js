import axios from 'axios';
import { toast } from 'react-toastify';
import { SINGLE_VIDEO_ACTIONS } from '../utils';
const historyServices=()=>{
    // Adds video to history
const addToHistory=async (token,video,videoListDispatch)=>{
    try{
        const {data}=await axios.post('/api/user/history',{video},{headers:{authorization:token}})
        videoListDispatch({type:SINGLE_VIDEO_ACTIONS.UPDATE_HISTORY,payload:{historyVideo:data.history}})
    }
    catch(error){
        console.error(error)
    }
}
    // Clears the user history from server
const clearHistory=async (token,videoListDispatch)=>{
    try{
        const response=await axios.delete('/api/user/history/all',{headers:{authorization:token}})
        videoListDispatch({type:SINGLE_VIDEO_ACTIONS.CLEAR_HISTORY,payload:[]})
        toast.success("Cleared History")
    }
    catch(error){
        console.error(error);

    }
}
    return {addToHistory,clearHistory};
}
export {historyServices}