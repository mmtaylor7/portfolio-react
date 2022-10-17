import "../Footer/Footer.css";
import React from "react";

export default function Footer() {
  const externalLink = (destination) => {
    window.location.replace(destination);
  };

  return (
    <div className="footer-center">
      <footer className="footer-style text-center text-lg-start">
        <div
          className="text-center p-3 footer-text"
          onClick={() =>
            externalLink(
              "https://linkedin.com/in/mary-margaret-taylor-12985117b"
            )
          }
          style={{ cursor: "pointer" }}
        >
          - LinkedIn -
        </div>

        <div
          className="text-center p-3 footer-text"
          onClick={() => externalLink("https://github.com/mmtaylor7")}
          style={{ cursor: "pointer" }}
        >
          - GitHub -
        </div>
        <div
          className="text-center p-3 footer-text"
          onClick={() =>
            window.open(
              "mailto:taylor.marymargaret@gmail.com?subject=Subject&body=Body%20goes%20here"
            )
          }
          style={{ cursor: "pointer" }}
        >
          - Email -
        </div>
      </footer>
    </div>
  );
}
