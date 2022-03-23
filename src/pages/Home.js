import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="main">
        <section className="section1">
          <div className="section1-inner">
            <h2 className="discover">
              Discover the best Real Estate Properties
            </h2>
            <div className="solution">
              We provide solutions to your real estate challenges using advanced
              technologies{" "}
            </div>
            <div className="emailbody">
              <div className="email">Email Address</div>
              <div className="dflex">
                <input
                  type="text"
                  className="email-input"
                  placeholder="Enter you email address"
                />
                <button className="email-button">Get early access</button>
              </div>
            </div>
          </div>
          <div className="section1-inner2">
            <div className="rect"></div>
            <img
              src="./images/build.svg"
              className="build"
              alt="interior design"
            />
          </div>
        </section>

        <section className="section2">
          <h3 className="header2">Why you should join our wait list</h3>
          <div className="header2-text">We want you to be in the know</div>
        </section>

        <section className="section3">
          <div className="box">
            <h5 className="header5">Early access to Offers</h5>
            <div className="section3-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              cursus id sodales ac ultrices. Ultrices volutpat neque, netus
              purus.
            </div>
          </div>
          <div className="box-shd">
            <h5 className="header5">Updates on our Launch</h5>
            <div className="section3-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              cursus id sodales ac ultrices. Ultrices volutpat neque, netus
              purus.
            </div>
          </div>
          <div className="box">
            <h5 className="header5">Discounts and Rewards</h5>
            <div className="section3-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              cursus id sodales ac ultrices. Ultrices volutpat neque, netus
              purus.
            </div>
          </div>
        </section>
      </main>
      <section className="section4">
        <div className="click">It Takes Just A Click</div>
        <button className="access">Get early access</button>
      </section>
      <Footer />
    </div>
  );
}
