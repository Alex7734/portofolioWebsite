import React from "react";
import mePic from "../assets/me.jpg";
import "../assets/AboutSection.css"

const AboutSection = () => {
  const socialLinksContainer = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "70%",
    margin: "auto",
    marginTop: "20px",
  };

  return (
    <>
      <section className="s2">
        <div className="main-container">
          <div className="about-wrapper">
            <div className="about-me">
              <h4>More about me</h4>
              <p>
                I build new projects and start-up ideas for fun. Participating
                in hackathons and accelerators is my way of meeting new people
                and learning new things.
              </p>
              <p>
                While I keep busy learning & working, I also enjoy playing
                chess, reading books & writing history analysis articles.
              </p>
              <hr />
              <p>
                Student @{" "}
                <a target="_blank" href="https://www.utcluj.ro/">
                  Technical University of Cluj-Napoca
                </a>
                <br />
                Junior Mobile Developer @{" "}
                <a target="_blank" href="https://www.linnify.com/">
                  Linnify
                </a>
                <br />
                President @ Club Sportiv Hara Sighisoara
                <br />
                Treasurer @ Rotaract Sighisoara
                <br />
                Former Chess Instructor @{" "}
                <a
                  target="_blank"
                  href="https://www.fiverr.com/alexmihoc/help-you-with-your-chess-game/"
                >
                  Fiverr
                </a>
                <br />
                <a target="_blank" href="CV.pdf">
                  Download Resume
                </a>
              </p>
              <h4>Skills</h4>

              {/* Skills list */}
              <div id="skills">
                <ul>
                  <li>
                    <u>Technical:</u>
                  </li>
                  <li>React Native</li>
                  <li>Django</li>
                  <li>React</li>
                  <li>Python</li>
                  <li>Firebase</li>
                </ul>

                <ul>
                  <li>
                    <u>Soft:</u>
                  </li>
                  <li>Leadership</li>
                  <li>Project Management</li>
                  <li>Communication</li>
                  <li>Problem-solving</li>
                  <li>Time management</li>
                </ul>
              </div>
            </div>
            <div>
              <img id="social_img" src={mePic} alt="Social Media" />
              <div style={socialLinksContainer}>
                <a
                  target="_blank"
                  style={{ fontFamily: "Roboto Mono, monospace" }}
                  href="https://www.linkedin.com/in/alexandru-mihoc-1956171a1"
                >
                  LinkedIn
                </a>
                <a
                  style={{ fontFamily: "Roboto Mono, monospace" }}
                  target="_blank"
                  href="https://www.instagram.com/alex._mihoc"
                >
                  Instragram
                </a>
                <a
                  style={{ fontFamily: "Roboto Mono, monospace" }}
                  target="_blank"
                  href="https://github.com/Alex7734"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
