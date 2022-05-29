import { getFilteredVideos } from "../utils"
import { VIDEOLISTING_ACTIONS } from "../utils/constants"
const VideoListReducer=(state,action)=>{
    switch(action.type){
        case VIDEOLISTING_ACTIONS.INITIAL_VIDEOS:
            return({...state,filteredVideos:action.payload.initialVideos})
        case VIDEOLISTING_ACTIONS.CATEGORIES:
            return({...state,categories:action.payload.categories.map(element=>element.categoryName)})
        case VIDEOLISTING_ACTIONS.FILTER_BY_CATEGORY:
            return({...state,filteredVideos:getFilteredVideos(action.payload.filterCategory)})
        default:
            return(state)

    }
}
export {VideoListReducer}