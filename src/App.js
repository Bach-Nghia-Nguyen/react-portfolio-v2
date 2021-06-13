import React, { useState } from "react";
import "./App.scss";
import NavigationBar from "./components/NavigationBar";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import BlogsPage from "./pages/BlogsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () => {
    setNavToggle(!navToggle);
    console.log("NavToggle:", navToggle);
  };

  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? "nav-toggle" : ""}`}>
        <NavigationBar />
      </div>

      <div className="nav-btn" onClick={navClick}>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>

      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" exact component={AboutPage} />
            <Route path="/portfolio" exact component={PortfolioPage} />
            <Route path="/blogs" exact component={BlogsPage} />
            <Route path="/contact" exact component={ContactPage} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
