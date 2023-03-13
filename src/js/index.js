//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Todo from "./component/Todo.jsx";
import Fetch from "./component/Todo-fetch.jsx"

//render your react application
ReactDOM.render(<Fetch />, document.querySelector("#app"));
