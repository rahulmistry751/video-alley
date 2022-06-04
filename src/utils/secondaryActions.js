const secondaryActions=()=>{
    const isLiked=(id,likedVideos)=>{
        const likedVideo=likedVideos.filter(video=>video._id===id);
        return likedVideo.length?likedVideo[0]:false;
    }
    const isInWatchLater=(id,watchLaterVideos)=>{
        const inWatchLater=watchLaterVideos.filter(video=>video._id===id);
        return inWatchLater.length?inWatchLater[0]:false;
    }
    return({isLiked,isInWatchLater})
}
export {secondaryActions}