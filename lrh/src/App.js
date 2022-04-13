import './App.css'
import Homepage from "./components/homepage.js"
import Login from "./components/login.js"
import Register from "./components/register.js"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [ user, setLoginUser] = useState({})
  return (
    
      <Router>
        <Routes>
          <Route exact path="/" element = {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }/>
          <Route path="/login" element = {<Login setLoginUser={setLoginUser}/>} />
            
          <Route path="/register" element = {<Register />} />
        </Routes>
      </Router>
  );
}

export default App;
