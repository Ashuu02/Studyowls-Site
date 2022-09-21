// import './App.module.css';
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter as Switch } from "react-router-dom";
import { Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom"; 
import CourseDetails from "./components/Courses/CourseDetails";
function App() {
  return (

    
    
    <div className="flex bg-[#21222A]">
     <Sidebar />
   
      <Routes>
        {/* <Switch> */}
        <Route path="/" element={<Main />} />
        <Route path="/CourseDetails" element={<CourseDetails />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          {/* </Switch> */}
      </Routes >
    </div>
  );
}

export default App;
