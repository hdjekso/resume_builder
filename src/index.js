import React from "react";
import  ReactDOM from "react-dom/client";
import App from "./App";
// s

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./component/Form";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    {/* <BrowserRouter> stores the current location in the brower's addres bar 
    using clean URLs and navigates using the brower'built-in history stack */}
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/form' element={<Form />} />
        </Routes>
    </BrowserRouter>
);


