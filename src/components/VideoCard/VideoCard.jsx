import style from './VideoCard.module.css';
const VideoCard=({video})=>{
    return(
        <div className={`card ${style.card}`} key={video._id}>
            <div className={` ${style['card-image-container']}`}>
                <img src={`https://img.youtube.com/vi/${video._id}/0.jpg`} alt="" />
                <ul className={`list ${style['cta-button']}`}>
                    <li title="watch later" className={`list-item ${style['list-item']}`}>
                        <i className="fas fa-alarm-plus"></i>
                    </li>
                    <li title="add to playlist" className={`list-item ${style['list-item']}`}>
                        <i className="fas fa-list"></i>
                    </li>

                </ul>
            </div>
            <div className={`${style['card-content']}`}>
                <div className={`${style['card-content-header']}`}>
               {video.title}
                </div>
                <small>6K views | 4 months ago</small>
            </div>
        </div>
    )
}
export {VideoCard}