import { getFilteredVideos } from "../utils"
import { VIDEOLISTING_ACTIONS,SINGLE_VIDEO_ACTIONS } from "../utils/constants"
const VideoListReducer=(state,action)=>{
    switch(action.type){
        case VIDEOLISTING_ACTIONS.INITIAL_VIDEOS:
            return({...state,filteredVideos:action.payload.initialVideos})
        case VIDEOLISTING_ACTIONS.CATEGORIES:
            return({...state,categories:action.payload.categories.map(element=>element.categoryName)})
        case VIDEOLISTING_ACTIONS.FILTER_BY_CATEGORY:
            return({...state,filteredVideos:getFilteredVideos(action.payload.filterCategory)})
        case SINGLE_VIDEO_ACTIONS.LIKE_VIDEO:
            return({...state,likedVideos:[...state.likedVideos,action.payload.likedVideo]})
        case SINGLE_VIDEO_ACTIONS.UPDATE_LIKED_VIDEO:
            return({...state,likedVideos:action.payload.likes})
        case SINGLE_VIDEO_ACTIONS.ADD_TO_WATCHLATER:
            return({...state,watchLater:[...state.watchLater,action.payload.watchLaterVideo]})
        case SINGLE_VIDEO_ACTIONS.UPDATE_WATCHLATER:
            return({...state,watchLater:action.payload.watchLater})
        default:
            return(state)

    }
}
export {VideoListReducer}