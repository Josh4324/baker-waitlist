import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-inner">
        <h4 className="contact">Our Contact</h4>

        <div>
          <div className="footer-header">Send us an email</div>
          <div className="footer-text">Contact@bakerindustries.io</div>
        </div>
        <div>
          <div className="footer-header">Office Number</div>
          <div className="footer-text">016344119</div>
        </div>
        <div>
          <div className="footer-header">Visit us </div>
          <div className="footer-text">
            N0,74, Oduduwa Crescent, Ikeja GRA, Lagos,Nigeria
          </div>
        </div>
      </div>

      <div className="footer-f">
        &copy; 2022 Baker Industries Ltd.All rights Reserved
      </div>
    </div>
  );
}
