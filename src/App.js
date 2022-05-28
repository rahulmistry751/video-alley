import "./App.css";
import { Navbar, RequiresAuth, Sidebar} from "./components";
import {Home, Playlist,LikedVideos,WatchLater,History,Login, SignUp,Profile} from './pages'

function App() {
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
          <Route  element={<RequiresAuth/>}>
          <Route path="/playlist" element={<Playlist/>}></Route>
          <Route path="/likedvideos" element={<LikedVideos/>}></Route>
          <Route path="/watchlater" element={<WatchLater/>}></Route>
          <Route path="/history" element={<History/>}></Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
