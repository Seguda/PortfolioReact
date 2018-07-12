import React from "react";
import "./contact.css";
import angelist from "../../assets/angelist.png";
import email from "../../assets/email.png";
import github from "../../assets/github.png";
import linkedIn from "../../assets/linkedIn.png";

export default function ContactInfo() {
  return (
    <section id="contact" className="contact">
      <h2 className="contact_heading">Contact</h2>
      <div className="contact-text">
        <p>Thanks for reviewing my portfolio.</p>
        <p>
          If you’d like to know more or discuss any opportunities, please don’t
          hesitate to reach out.
        </p>
      </div>
      <div className="icons">
        <a
          href="mailto:sehagulnar@gmail.com?"
          target="_blank"
          className="contact-link"
        >
          <img src={email} alt="email" className="icon" />

          {/* <p>Email</p> */}
        </a>
        <a
          href="https://www.linkedin.com/in/seha-gulnar-dalay-03073415/"
          target="_blank"
          className="contact-link"
        >
          <img src={linkedIn} alt="linkedIn" className="icon" />
          {/* <p>LinkedIn</p> */}
        </a>

        <a
          href="https://github.com/seguda"
          target="_blank"
          className="contact-link"
        >
          <img src={github} alt="github" className="icon" />
          {/* <p>Github</p> */}
        </a>
        <a
          href="https://angel.co/seha-gulnar-dalay/"
          target="_blank"
          className="contact-link"
        >
          <img src={angelist} alt="angelist" className="icon" />
          {/* <p>AngelList</p> */}
        </a>
      </div>
    </section>
  );
}
