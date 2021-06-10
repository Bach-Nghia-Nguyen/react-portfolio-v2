import React from "react";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span> Nguyen Bach Nghia.</span>
        </h1>

        <p className="h-sub-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="icons">
          <a
            href="https://www.facebook.com/bachnghia.nguyen"
            target="_blank"
            rel="noreferrer noopener"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faFacebook} className="icon facebook" />
          </a>

          <a
            href="https://github.com/Bach-Nghia-Nguyen"
            target="_blank"
            rel="noreferrer noopener"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faGithub} className="icon github" />
          </a>

          <a
            href="https://www.linkedin.com/in/bach-nghia-nguyen-7b39641a3/"
            target="_blank"
            rel="noreferrer noopener"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" />
          </a>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
