import { Link } from 'react-router-dom';
import style from './VideoCard.module.css';
const VideoCard=({video})=>{
    return(
        <Link className={`card ${style.card}`} key={video._id} to={{pathname:`/video/${video._id}`,state:{clickedVideo:video}}}>
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
        </Link>
    )
}
export {VideoCard}