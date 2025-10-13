import { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About.js';
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js'
import Alert from './components/Alert.js'

function App() {
  const [mode, setMode] = useState("light");
  const [cherryMode, setCherryMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const toggleMode =()=> {
    mode==="light"?setMode("dark"):setMode("light");
    showAlert("success", mode==="light"?"Enabled Dark Mode":"Enabled Light Mode");
    // document.title = "Text Utils - "+mode.charAt(0).toUpperCase()+mode.slice(1);
    document.body.style.backgroundColor = mode==="dark"?"white":"#042743";
  }
  const toggleCherryMode =()=> {
    cherryMode==="light"?setCherryMode("cherry"):setCherryMode("light");
    showAlert("success", mode==="light"?"Enabled Cherry Mode":"Enabled Light Mode");
  }
  const showAlert = (type, message) =>{
    setAlert({type, message});
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <>
    <Router>
      <Navbar heading = "Text Utils" mode = {mode} toggleMode = {toggleMode} toggleCherryMode = {toggleCherryMode}/>
      <Alert alert={alert}/>
      <div className="container">
        <Routes>
          <Route path='/' element={<TextForm heading="Enter Text to Analyse :" mode={mode} cherryMode={cherryMode} showAlert={showAlert} />} />    
          <Route path='/about' element={<About mode={mode}/>} />
        </Routes>
      </div>
    </Router>
    {/* <Navbar heading = "Text Utils" mode = {mode} toggleMode = {toggleMode} toggleCherryMode = {toggleCherryMode}/>
    <Alert alert={alert}/>
    <div className="container">
    <TextForm heading="Enter Text to Analyse :" mode={mode} cherryMode={cherryMode} showAlert={showAlert} />
    </div> */}
    </>
  );
}

export default App;
