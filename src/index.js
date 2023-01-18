import React from "react";
import  ReactDOM from "react-dom/client";
import Dashboard from "./component/DashBoard";

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

const App = () => {
    return <Dashboard />;
}

root.render(<App />);