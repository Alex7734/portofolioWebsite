import React, { useEffect } from "react";
import profilePic from "../assets/Alex.jpg";

const IntroSection = () => {

    useEffect(() => {
      // Load the themeChanger.js script dynamically
      import('../assets/script.js')
        .then((module) => {
          // The module will be executed once it's loaded
          console.log('Theme changer script loaded.');
        })
        .catch((error) => {
          console.error('Error loading theme changer script:', error);
        });
    }, []);

  return (
    <section className="s1">
      <div className="main-container">
        <div className="greeting-wrapper">
          <h1>Hi, I'm Alex Mihoc</h1>
        </div>

        <div className="intro-wrapper">
          <div className="nav-wrapper">
            <a href="">
              <div className="dots-wrapper">
                <div id="dot-1" className="browser-dot"></div>
                <div id="dot-2" className="browser-dot"></div>
                <div id="dot-3" className="browser-dot"></div>
              </div>
            </a>
            <ul id="navigation">
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="left-column">
            <img id="profile_pic" src={profilePic} alt="Dennis Ivanov" />
            <h5 style={{ textAlign: "center", lineHeight: 0 }}>
              Personalize Theme
            </h5>
            {/* Rest of the theme options and settings */}
            <div id="theme-options-wrapper">
              <div data-mode="light" id="light-mode" className="theme-dot"></div>
              <div data-mode="blue" id="blue-mode" className="theme-dot"></div>
              <div data-mode="green" id="green-mode" className="theme-dot"></div>
              <div data-mode="purple" id="purple-mode" className="theme-dot"></div>
            </div>
          </div>

          <div className="right-column">
            <div id="preview-shadow">
              <div id="preview">
                <div id="corner-tl" className="corner"></div>
                <div id="corner-tr" className="corner"></div>
                <h3>What I Do</h3>
                <p>
                  Software Engineering student<br/>
                  Junior Mobile Developer<br/>
                  Leader & Innovator 
                </p>
                <div id="corner-br" className="corner"></div>
                <div id="corner-bl" className="corner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
