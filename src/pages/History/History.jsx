import {useAuth, useVideo} from '../../context';
import {VideoCard} from '../../components';
import style from './History.module.css';
import { historyServices } from '../../services';
import { ToastContainer } from 'react-toastify';
const History=()=>{
    const {videoState,videoListDispatch}=useVideo();
    const {userToken}=useAuth();
    const {clearHistory}=historyServices();
    return (
        <div className={`${style["history-container"]}`}>
            <div className={`${style["clear-history"]}`}>
                {videoState.history.length? <span className={`${style.clear} fw-600`} onClick={()=>clearHistory(userToken,videoListDispatch)}>
                <i className={`fas fa-trash-alt ${style['clear-icon']}`}></i>
                    Clear history</span>:""}
            </div>
            <div className={`${style["history-videos"]}`}>
            {videoState.history.length?videoState.history.map(
                video=><VideoCard video={video} key={video._id}/>
            ):<h3 className='h3 txt-c'>Empty history</h3>}
            </div>
        <ToastContainer position='top-center' autoClose={1000}/>
        </div>
    )
}
export {History}