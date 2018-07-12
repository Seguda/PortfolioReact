import React from "react";

import tripWe from "../../assets/tripWe.png";
import Cookese from "../../assets/Cookese.png";
import ShareYourYummies from "../../assets/ShareYourYummies.png";
import "./projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="projects_heading">Projects</h2>
      <div className="project-list">
        <div className="projects-project">
          <img className="projects-image" src={tripWe} alt="tripWe" />

          <p className="projects-text">
            <span className="project-title">tripWe</span> is a web application
            that created to simplify the group travel planning process and solve
            the messy planning problem of creating a group trip. tripWe was my
            capstone project built by four people. We used React/Redux front end
            and a Node, PostgreSQL back end to create versatile dashboard where
            users can add friends to trips, compare flight and hotel
            information, and plan activities.{" "}
          </p>
          <p>
            Technologies used:
            <strong> React/Redux, </strong>
            <strong>PostgreSQL, </strong>
            <strong>Node, </strong>
            <strong>Sass, </strong> and
            <strong> Heroku </strong> for hosting.
          </p>

          <p className="links">
            <a
              className="link"
              target="_blank"
              href="https://tripwe.herokuapp.com/"
            >
              Live App
            </a>
            <br />
            <a
              className="link"
              target="_blank"
              href="https://github.com/thinkful-ei19/tripwe-client"
            >
              Client
            </a>
            <br />
            <a
              className="link"
              target="_blank"
              href="https://github.com/thinkful-ei19/tripwe-server"
            >
              Server
            </a>
          </p>
        </div>

        <div className="projects-project">
          <img className="projects-image" src={Cookese} alt="cookese" />

          <p className="projects-text">
            <span className="project-title">Cookese</span> teaches useful
            kitchen tools, allows users to track their progress over time and
            practice more frequently on unmastered tools.
          </p>
          <p className="projects-text">
            Cookese app utilizes a spaced repetition algorithm designed to adapt
            to users learning needs. The app was built in a week and created by
            using React/Redux front end and Node, MongoDB back end. Cookese was
            implemented using linked list data structure to store the questions
            (pictures) in the database. Once the user has submitted the right
            answer, the question will be pushed back into the queue and will be
            shown with the same frequency as other correctly answered tools. If
            a user answers incorrectly, user will see it more often in review
            than a question answered correctly.
          </p>

          <p>
            Technologies used:
            <strong>React/Redux,</strong>
            <strong>MongoDB, </strong>
            <strong>mLab, </strong>
            <strong>Node, </strong>
            <strong>Netlify, </strong>and
            <strong> Heroku</strong> for hosting.
          </p>

          <p className="links">
            <a
              className="link"
              target="_blank"
              href="https://ecstatic-hamilton-0a8f06.netlify.com/"
            >
              Live App
            </a>
            <br />
            <a
              className="link"
              target="_blank"
              href="https://github.com/thinkful-ei19/Sarah-Seha-Spaced-Repitition-App-Client"
            >
              Client
            </a>
            <br />
            <a
              className="link"
              target="_blank"
              href="https://github.com/thinkful-ei19/Sarah-Seha-Spaced-Repitition-App-Server"
            >
              Server
            </a>
          </p>
        </div>
        <div className="projects-project">
          <img
            className="projects-image"
            src={ShareYourYummies}
            alt="ShareYourYummies"
          />

          <p className="projects-text">
            <span className="project-title">Share Your Yummies</span> is my
            first solo project and utilizes a React/Redux front end and a Node,
            MongoDB back end. Share Your Yummies is a web app made to store
            recipes which is created by users. As a user you are able to create
            a recipe, add own recipe picture, search and view saved recipes.
            Landing page contains the instructions for the user so you have
            guided on how to use app.
          </p>

          <p>
            Technologies used:
            <strong>React/Redux,</strong>
            <strong>MongoDB, </strong>
            <strong>mLab, </strong>
            <strong>Node, </strong>
            <strong>Netlify, </strong>and
            <strong> Heroku</strong> for hosting.
          </p>

          <p className="links">
            <a
              className="link"
              target="_blank"
              href="https://shareyouryummies.netlify.com/"
            >
              Live App
            </a>
            <br />
            <a
              className="link"
              target="_blank"
              href="https://github.com/thinkful-ei19/seha-recipes-client"
            >
              Client
            </a>
            <br />
            <a
              className="link"
              target="_blank"
              href="https://github.com/thinkful-ei19/seha-recipes-server"
            >
              Server
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
