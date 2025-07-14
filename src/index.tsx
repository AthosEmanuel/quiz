import "./index.css";

import { Difficulty, Home, Theme, Trivia } from "./modules";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import ReactDOM from "react-dom/client";

// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/difficulty" element={<Difficulty />} />
      <Route path="/theme" element={<Theme />} />
      <Route path="/trivia" element={<Trivia />} />
    </Routes>
  </Router>
);

// reportWebVitals();
