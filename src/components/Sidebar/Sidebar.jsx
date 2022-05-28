import { NavLink } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="list">
        <NavLink to="/" className="list-item">
          <i className="fas fa-home"></i>Home
        </NavLink>
        <NavLink to="/playlist" className="list-item">
          <i className="fas fa-list"></i>Playlist
        </NavLink>
        <NavLink to="/likedvideos" className="list-item">
          <i className="fas fa-thumbs-up"></i>Like videos
        </NavLink>
        <NavLink to="watchlater" className="list-item">
          <i className="fas fa-alarm-plus"></i>Watch later
        </NavLink>
        <NavLink to="history" className="list-item">
          <i className="fas fa-history"></i>History
        </NavLink>
      </ul>
    </div>
  );
};
export { Sidebar };
