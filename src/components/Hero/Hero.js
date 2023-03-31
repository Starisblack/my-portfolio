import React from "react";
import "./Hero.css";
import arrow from "../../assets/images/icons8-right-arrow.gif"
import { Grid } from "@mui/material";
import SocialIcons from "./SocialIcons/SocialIcons";

const Hero = () => {
  return (
            <div
              className="hero-content"
            >
              <Grid container className="flex-v-align">
                <Grid item xs={12}  md={6}>
                  <div className="home-text hp-left">
                    <div className="item">
                      <h1 className="hello-title">Hello, I'm</h1>
                    </div>
                    <h1>Samuel Ogunniyi</h1>
                    <p className="intro-text">
                      I’m a Full Stack Developer & I’m very passionate and
                      dedicated to my work. I have acquired the skills and
                      knowledge necessary to make your project a success.
                    </p>
                     <SocialIcons />
                    <div className="hero-buttons">
                      <a
                        href="?"
                        target="_blank"
                        className="btn cv-btn"
                        rel="noreferrer"
                      >
                        Download CV
                      </a>

                      <a
                        className="title-color"
                        href="#portfolio"
                      >
                        <span className="work-btn">My Works </span>{" "}
                        <span className="work-icon">
                          {" "}
                          <img src={arrow} alt="arrow"/>
                          {/* <i
                            // icon will be here
                          ></i> */}
                        </span>
                      </a>
                      {/* <a
                        href="https://lmpixels.com/wp/leven-wp/contact/"
                        target="_self"
                        id=""
                        className="btn cv-btn"
                      >
                        Contact
                      </a> */}
                    </div>
                  </div>
                </Grid>

                <Grid  item xs={12}  md={5} className="img-container">
                  <div className="home-photo">
                    <div
                      className="hp-inner"
                      style={{
                        backgroundPosition:
                          "calc(50% + -4.06371px) calc(50% + 8.32536px)",
                      }}
                    ></div>
                  </div>
                </Grid>
              </Grid>
            </div>
  );
};

export default Hero;
