import React, { useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);
  
  //showAlert obj
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },2000)
  }
  
  const toggleMode = () => {
    if (mode === 'light') { 
      setMode('dark');
      showAlert("Dark mode toggled", "success");
      document.title = "Hey Dark";
      setTimeout(() => {
        document.title = "TextUtils";
      },3300)
    } else {
      setMode('light');
      showAlert("Light mode toggled", "success");
      document.title = "Hey Light";
      setTimeout(() => {
        document.title = "TextUtils";
      },3300)
    }
  }

  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "#212529"
  });

  useEffect(() => {
    if (mode === 'light') {
      setMyStyle({
        color: "black",
        backgroundColor: 'white'
      });
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: '#212529'
      });
    }
  }, [mode]); // Update myStyle whenever props.mode changes

  useEffect(() => {
    showAlert("Welcome to TextUtils!", "info");
  }, []);
  
  return (
    <>

      <Router>
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
        <Routes>
          {/* good practice to use exact path */}
          <Route exact path="/" element={
            <TextForm heading="Enter the text to analyze" myStyle1={myStyle} showAlert={showAlert} />}
          />
          <Route exact path="/about" element={
            <About mode={mode} myStyle={myStyle} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;