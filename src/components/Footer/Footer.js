import "../Footer/Footer.css";
import React from "react";

export default function Footer() {
  const externalLink = () => {
    window.location.replace(destination);
  };

  return (
    <div className="footer-center">
      <footer className="footer-style text-center text-lg-start">
        <div
          className="text-center p-3 footer-text"
          onClick={window.open(
            "mailto:email@example.com?subject=Subject&body=Body%20goes%20here"
          )}
        >
          - LinkedIn -
        </div>

        <div
          className="text-center p-3 footer-text"
          onClick={externalLink("https://github.com/mmtaylor7")}
        >
          - GitHub -
        </div>
        <div
          className="text-center p-3 footer-text"
          onClick={externalLink("taylor.marymargaret@gmail.com")}
        >
          - Email -
        </div>
      </footer>
    </div>
  );
}
