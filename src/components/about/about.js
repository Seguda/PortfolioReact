import React from "react";
import "./about.css";

export default function AboutMe() {
  return (
    <section id="about" className="about">
      <h2 className="about-heading">About</h2>

      <div className="about-text">
        <p>
          I'm a front end web developer from Boston, MA. I love developing apps
          with React and learning new tricks in CSS.
        </p>
        <p>
          Being able to build any idea you can think of is fascinating. This
          feeling for building, creating something out of nothing is what
          eventually set me off on a path to becoming a front end web developer.
        </p>

        <p>
          I frequently use React/Redux, Node.js/Express, and PostgreSQL/MongoDB
          to build web applications. I enjoy the challenge of learning different
          technologies and am always looking for new things to add to the stack.
          I have a proven track record of learning languages/libraries in a
          short span of time and fully look forward to learning as much as
          possible as I help the development team.
        </p>
        <p>
          Listed below are some of my personal and group projects. Please see my
          <a
            href="https://docs.google.com/document/d/16YMs1lEnGf_OteVi_zqM6xLkcREGKSUi0Rbr20fxOB0/edit?disco=AAAACBEkUeM&ts=5b42c19f"
            target="_blank"
            className="resume"
          >
            <span> resume</span>
          </a>{" "}
          for information regarding my professional experience.
        </p>
      </div>
    </section>
  );
}
