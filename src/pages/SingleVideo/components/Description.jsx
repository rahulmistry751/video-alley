import style from '../SingleVideo.module.css';
const Description=({video})=>{
    const videoInfo=video[0];
    return(
        <div className={`${style['description-container']}`}>
            <h2 className={`h3 fw-600 ${style.heading}`}>
                {videoInfo.title}
            </h2>
            <ul className={`list ${style['secondary-action-btns']}`}>
                <li className={`list-item ${style['action-btn']}`} title="Title">
                <i className={`fal fa-thumbs-up ${style.like}`}></i>Like
                </li>
                <li className={`list-item ${style['action-btn']}`} title="Watch later">
                <i className="fas fa-alarm-plus"></i>Watch Later
                </li>
                <li className={`list-item ${style['action-btn']}`} title="Add to playlist">
                <i className="fas fa-list"></i>Add to playlist
                </li>
            </ul>
            <hr></hr>
            <p className={`fw-600 ${style.description}`}>
                {videoInfo.description}
            </p>
        </div>
    )
}
export {Description}