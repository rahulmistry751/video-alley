import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, PlaylistModal, RequiresAuth, Sidebar} from "./components";
import { useVideo } from "./context";
import {Home, Playlist,LikedVideos,WatchLater,History,Login, SignUp,Profile, SingleVideo, SinglePlaylistPage} from './pages'

function App() {
  const {showModal}=useVideo();
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="video/:videoId" element={<SingleVideo/>}/>
          <Route  element={<RequiresAuth/>}>
          <Route path="/playlist" element={<Playlist/>}></Route>
          <Route path="/likedvideos" element={<LikedVideos/>}></Route>
          <Route path="/watchlater" element={<WatchLater/>}></Route>
          <Route path="/history" element={<History/>}></Route>
          <Route path="playlist/:playlistId" element={<SinglePlaylistPage/>}/>
          </Route>
        </Routes>
      </div>
      {showModal.show && <PlaylistModal/>}
    </div>
  );
}

export default App;
