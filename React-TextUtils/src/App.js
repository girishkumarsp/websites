import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mymode, setmode] = useState("light"); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const mytoggleMode = () => {
    if (mymode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    }
    if (mymode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mymode} toggleMode={mytoggleMode}/>
        <Alert myalert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mymode} />}/>
            <Route exact path="/" element={<TextForm myshowAlert={showAlert} heading="Try TextUtils - Word counter | character counter | lowercase to uppercase | uppercase to lowercase | Remove extra spaces" mode={mymode} />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;