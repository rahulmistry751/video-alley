import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, Sidebar} from "./components";
import {Home, Playlist,LikedVideos,WatchLater,History} from './pages'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/playlist" element={<Playlist/>}></Route>
          <Route path="/likedvideos" element={<LikedVideos/>}></Route>
          <Route path="/watchlater" element={<WatchLater/>}></Route>
          <Route path="/history" element={<History/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
