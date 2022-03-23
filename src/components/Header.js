import React from "react";

export default function Header() {
  return (
    <div>
      <div className="header">
        <div>
          <img className="logo" src="./images/logo.svg" alt="logo" />
        </div>
        <div className="social-full">
          <div className="shead">@BakerIndustries_ </div>
          <div className="social">
            <img className="simg" src="./images/facebook.svg" alt="facebook" />
            <img className="simg" src="./images/linkedin.svg" alt="linkedin" />
            <img
              className="simg"
              src="./images/instagram.svg"
              alt="instagram"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
