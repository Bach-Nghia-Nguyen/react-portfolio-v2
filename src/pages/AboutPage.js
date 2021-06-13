import React from "react";
import Title from "../components/Title";
import ImageSection from "../components/ImageSection";
import SkillsSection from "../components/SkillsSection";
import ServicesSection from "../components/ServicesSection";
import design from "../images/design.svg";
import intelligence from "../images/intelligence.svg";
import gamedev from "../images/game-dev.svg";

const AboutPage = () => {
  return (
    <div className="about-page">
      <Title title={"About Me"} span={"About Me"} />
      <ImageSection />
      <Title title={"My Skills"} span={"My Skills"} />
      <div className="skill-container">
        <SkillsSection skill={"JavaScript"} progress={"70%"} width={"70%"} />
        <SkillsSection skill={"HTML"} progress={"90%"} width={"90%"} />
        <SkillsSection skill={"CSS"} progress={"58%"} width={"58%"} />
        <SkillsSection skill={"ReactJs"} progress={"47%"} width={"47%"} />
        <SkillsSection skill={"NodeJs"} progress={"70%"} width={"70%"} />
        <SkillsSection skill={"Express"} progress={"35%"} width={"35%"} />
        <SkillsSection skill={"MongoDB"} progress={"40%"} width={"40%"} />
      </div>

      <Title title={"Services"} span={"Services"} />
      <div className="services-container">
        <ServicesSection
          image={design}
          title={"Web design"}
          text={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          }
        />
      </div>
    </div>
  );
};

export default AboutPage;
