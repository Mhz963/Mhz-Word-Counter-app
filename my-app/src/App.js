import './App.css';
import Navbar from './Components/Navbar';
import Text from './Components/Text';
import AboutUs from './Components/AboutUs';
import Alert from './Components/Alert';
import { useState } from 'react';

import React from "react";
import {
  BrowserRouter as 
  Router,
  Routes,
  Route,
} from "react-router-dom";

//let name = "Mhz"

function App() {
  
  const [Mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>
  {
    setAlert({
      msg: message,
      typ: type}  
    )
    setTimeout(() => {
      setAlert(null);
    }, "1000");
  }

  const toggleMode = () => {
    
    if (Mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#0a0138';
        showAlert("Dark Mode activated", "success");
        
    }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light Mode activated", "success");
        
    }
}

const toggleMode2 = () => {
    
  if (Mode === 'light') {
      setMode('green');
      document.body.style.backgroundColor = 'green';
      showAlert("Green Mode activated", "success");
      
  }
  else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode activated", "success");
      
  }
}

  return (
  
  <> 
  {/* <Router>
  <Alert alrt = {alert}/>
  <Navbar title = "Mhz Website" link = "About Us" mode = {Mode} tm = {toggleMode} tm2 = {toggleMode2} />
  <div className="container">
     <Routes>
          <Route path="/about">
            <AboutUs/>
          </Route>         
          <Route path="/">
          <Text mode = {Mode} showalert = {showAlert} />
          </Route>
        
        </Routes>
        </div>
    </Router> */}
   <Router>
   <Alert alrt = {alert}/>
   <Navbar title = "Mhz Website" link = "About Us" mode = {Mode} tm = {toggleMode} tm2 = {toggleMode2} />

    <Routes>
      <Route  exact path = "/" element = {<Text mode = {Mode} showalert = {showAlert} />}></Route>
      <Route exact path = "aboutUs" element = {<AboutUs/>}></Route>
    </Routes>
  </Router>
         
  </>
  );
}

export default App;
