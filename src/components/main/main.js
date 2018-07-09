import React from "react";
import black from "../../assets/black.jpeg";
import ImageResponsive from "react-image-responsive";
import "./main.css";

const sectionStyle = {
  backgroundSize: "100% 100%",
  height: "100VH",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${black})`
};

export default function Main() {
  return (
    <section style={sectionStyle} id="main" className="main">
      <div className="home">
        <header>
          <div className="main-me">
            {/* <img className="main-pattern" src={black} alt="black" /> */}

            <h1 className="header-text">
              <span className="me">SEHA GULNAR DALAY</span>
              <span className="me-title">Web Developer</span>
            </h1>
          </div>
        </header>

        <img src="images/me.jpg" alt="" />
      </div>
    </section>
  );
}
