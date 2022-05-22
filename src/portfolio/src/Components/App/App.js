import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "../Home/Home";
import Notfound from "../Notfound/Notfound";

export default function App() {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<Notfound/>}/>
            </Routes>
        </Router>
  );
}