import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Notfound from '../Notfound/Notfound';
import Main from '../Main/Main';

export default function App() {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="*" element={<Notfound/>}/>
            </Routes>
        </Router>
  );
}
