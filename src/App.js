import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import toast, { Toaster } from 'react-hot-toast';


function App() {
  const [mode, setMode] = useState('dark');
  
  const toggleMode = () => {
    if (mode === 'light') { 
      setMode('dark');
      toast.success("Dark mode toggled");
      document.title = "Hey Dark";
      setTimeout(() => {
        document.title = "TextUtils";
      },3300)
    } else {
      setMode('light');
      toast.success("Light mode toggled");
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
        backgroundColor: '#212529',
      });
    }
  }, [mode]); // Update myStyle whenever props.mode changes

  useEffect(() => {
    toast.success("Welcome to TextUtils!")
  }, []);
  
  return (
    <div style={{ ...myStyle, minHeight: '100vh' }}>
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
      <TextForm heading="Enter the text to analyze" myStyle={myStyle}/>
      <Toaster
  position="bottom-right"
  reverseOrder={false}
/>
    </div>
  );
}

export default App;