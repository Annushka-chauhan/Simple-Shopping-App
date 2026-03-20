//this is the first file tom be loaded while execution 
//The react dom is basically used to render the app component and is basically uswd to view the app component on the screen 
//  the app component  is rendered by passing the jsx code to the render method

import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
