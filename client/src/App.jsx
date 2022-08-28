import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Posts from "./components/posts/Index";
import {ToastContainer} from 'react-toastify'
import "./App.scss"
import 'react-toastify/dist/ReactToastify.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/tailwind.css"


function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Posts />}></Route>
        </Routes>
      </div>
    </Router>
    <ToastContainer />
    </>
  );
}

export default App;
