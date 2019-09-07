import React from "react";
import "./App.css";
import Home from "./components/home";
import Admin from "./components/admin/admin";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <Route path='/' exact component={Home} />
        <Route path='/admin' exact component={Admin} />
      </div>
    </Router>
  );
}

export default App;
