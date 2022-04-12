import './App.css'
import Homepage from "./components/homepage.js"
import Login from "./components/login.js"
import Register from "./components/register.js"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route exact path="/">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Routes>
      </Router> */}
      {/* <Register/> */}
      {/* <Login/> */}
      <Homepage/>
    </div>
  );
}

export default App;
