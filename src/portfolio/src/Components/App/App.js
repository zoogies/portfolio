import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "../Home/Home";
import Live from "../Live/Live";
import Notfound from "../Notfound/Notfound";
import Profile from "../Profile/Profile";
import Releases from "../Releases/Releases";

export default function App() {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Releases" element={<Releases/>}/>
                <Route path="/Live" element={<Live/>}/>
                <Route path="/Profile" element={<Profile/>}/>
                <Route path="*" element={<Notfound/>}/>
            </Routes>
        </Router>
  );
}