import React from 'react';
import Dashboard from "./component/DashBoard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
const App = () => {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard/>}/>
        </Routes>
      </Router>
  );
  
};

export default App;