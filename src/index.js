import React from "react";
import ReactDOM from "react-dom/client";
import "slick-carousel/slick/slick.css";

import App from "./App";
import "./index.css";
import Chatbox from "./components/articles/Chatbox/Chatbot";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App />
    <Chatbox />
  </div>
);
