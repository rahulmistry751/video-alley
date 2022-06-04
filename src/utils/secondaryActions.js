const secondaryActions=()=>{
    const isLiked=(id,likedVideos)=>{
        const likedVideo=likedVideos.filter(video=>video._id===id);
        return likedVideo.length?likedVideo[0]:false;
    }
    return({isLiked})
}
export {secondaryActions}