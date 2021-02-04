/* Adding library */
import React from "react";
import { Route } from "react-router-dom";

/* Adding pages */
import Landing from "./pages/landing/landingPage";
import Home from "./pages/home/home";

/* Adding components */
import Header from "../src/components/header/header.component";
import Bottom from "../src/components/bottom/bottom.component";

/* Adding css */
import "./App.css";

/* Main here */
function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      <Bottom />
    </div>
  );
}

export default App;
