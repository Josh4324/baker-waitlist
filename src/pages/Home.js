import React, { useRef } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NotificationManager } from "react-notifications";

export default function Home() {
  const emailRef = useRef();
  const postEmail = async () => {
    try {
      if (emailRef.current.value === "") {
        emailRef.current.value = "";
        return NotificationManager.error("Please enter your email", "Error");
      }

      let regex =
        /^[\/\!#\$\%&'\*\+\-\=\?\^_`\{\|\}~A-Za-z0-9]+[\.-]?[\/\!#\$\%&'\*\+\-\=\?\^_`\{\|\}~A-Za-z0-9]*@\w+([\.-]?\w+)*(\.\w{2,40})+$/;
      if (regex.test(emailRef.current.value) === false) {
        emailRef.current.value = "";
        return NotificationManager.error(
          "Please enter your email in the correct format",
          "Error"
        );
      }
      NotificationManager.info("Email sent to waitlist", "Info");
      let emailValue = emailRef.current.value;
      const res = await axios.post(
        `https://attendance.bakerindustries.io/api/v1/email`,
        {
          email: emailValue,
        }
      );
      console.log(res);
      if (res.data.code === 201) {
        emailRef.current.value = "";
        NotificationManager.success("Email added to waitlist", "Success");
      }
    } catch (err) {
      emailRef.current.value = "";
      NotificationManager.error("An error occurred", "Error");
    }
  };
  return (
    <div>
      <Header />

      <main className="main">
        <section className="section1">
          <div className="section1-inner" id="email">
            <h2 className="discover">
              Discover the best Real Estate Properties
            </h2>
            <div className="solution">
              We provide solutions to your real estate challenges using advanced
              technologies{" "}
            </div>
            <div className="emailbody">
              <div className="email">Email Address</div>
              <div className="dflexnpm run buil">
                <input
                  type="text"
                  className="email-input"
                  ref={emailRef}
                  placeholder="Enter you email address"
                />
                <button onClick={postEmail} className="email-button">
                  Get early access
                </button>
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
              Being on our waitlist gives you early access to our various
              amazing offers. Here, it's you before anybody else. You'll be the
              first to know when new assets arrive, and view before the whole
              world does. Just like the elite groups, You wouldn't want to skip
              this offer!
            </div>
          </div>
          <div className="box-shd">
            <h5 className="header5">Updates on our Launch</h5>
            <div className="section3-text">
              As one of the leading Proptech companies worldwide, we are going
              to be dishing out advanced property technologies that have been
              carefully thought out and planned by professionals.
            </div>
          </div>
          <div className="box">
            <h5 className="header5">Discounts and Rewards</h5>
            <div className="section3-text">
              Being on our waitlist grants you firsthand access to our regular
              discounts and rewards.
            </div>
          </div>
        </section>
      </main>
      <section className="section4">
        <div className="click">It Takes Just A Click</div>
        <a href="#email">
          <button className="access">Get early access</button>
        </a>
      </section>
      <Footer />
    </div>
  );
}
