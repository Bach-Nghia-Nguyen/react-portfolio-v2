import React from "react";
import about from "../images/about.jpg";

const ImageSection = () => {
  return (
    <div className="image-section">
      <div className="img">
        <img src={about} alt="About" />
      </div>

      <div className="about-info">
        <h4>
          I am
          <span> Nguyen Bach Nghia</span>
        </h4>
        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </p>

        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Language</p>
            <p>Address</p>
            <p>Country</p>
          </div>

          <div className="right-section">
            <p>: Nguyen Bach Nghia</p>
            <p>: 25</p>
            <p>: Vietnamese</p>
            <p>: Vietnamese, English</p>
            <p>: No 4, Lane 354/7, Le Duan St, Hanoi, Vietnam</p>
            <p>: Vietnam</p>
          </div>
        </div>

        <button className="btn">Download My CV</button>
      </div>
    </div>
  );
};

export default ImageSection;
