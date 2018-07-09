import React from "react";
import "./footer.css";

const footerDate = () => {
  return new Date().getFullYear();
};

export default function FooterDate() {
  return (
    <section id="footer" className="footer">
      <footer className="footer-date">
        <div className="row">
          <p className="footer__text">
            Seha Gulnar Dalay &copy; {footerDate()}
          </p>
        </div>
      </footer>
    </section>
  );
}
