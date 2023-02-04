import React from "react";
import  ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./component/DashBoard";
import Profile from "./component/Profile";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    {/* <BrowserRouter> stores the current location in the brower's addres bar 
    using clean URLs and navigates using the brower'built-in history stack */}
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/profile' element={<Profile/>}/>
        </Routes>
    </BrowserRouter>
);


