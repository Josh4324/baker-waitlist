import React from "react";

export default function Header() {
  return (
    <div>
      <div className="header">
        <div>
          <img className="logo" src="./images/logo.svg" alt="logo" />
        </div>
        <div className="social-full">
          <div className="social">
            <a
              href="https://facebook.com/bakerindustriesng"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="simg"
                src="./images/facebook.svg"
                alt="facebook"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/bakerindustries/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="simg"
                src="./images/linkedin.svg"
                alt="linkedin"
              />
            </a>
            <a
              href="https://www.instagram.com/bakerindustries_/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="simg"
                src="./images/instagram.svg"
                alt="instagram"
              />
            </a>
            <a
              href="https://twitter.com/bakerind_"
              target="_blank"
              rel="noreferrer"
            >
              <img className="simg" src="./images/twitter.svg" alt="twitter" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
