import React from "react"

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import HomePage from "./pages/Homepage";

import SinglePage from "./pages/Singlepage";
import FourOhFour from "./pages/404";


const App = () => {
  
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
         
          
          <Route exact path="/home" element={<HomePage/>} />
          <Route exact path="*" element={<FourOhFour/>} />
          
          <Route exact path="/singleshow/:id" element={<SinglePage/>} />
          
  
        </Routes>
      </div>
    </Router>
  );
};

export default App;