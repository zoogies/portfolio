import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Notfound from "../Notfound/Notfound";
import Profile from "../Profile/Profile";

export default function App() {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<Profile/>}/>
                <Route path="*" element={<Notfound/>}/>
            </Routes>
        </Router>
  );
}