import React from "react";
import "./App.css";
import Home from "./components/home/home";
import Admin from "./components/admin/admin";
import Signup from "./components/user/signup";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <Route path='/' exact component={Home} />
        <Route path='/admin' exact component={Admin} />
        <Route path='/signup' exact component={Signup} />
      </div>
    </Router>
  );
}

export default App;
