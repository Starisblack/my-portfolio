import "./AboutMe.css";
import { Grid } from "@mui/material";

import React from "react";
import Skills from "../Skills/Skills";

export const AboutMe = () => {
  return (
    <div className="section-container">
      <Grid container>
        <Grid item md={6}>
            <div>
              <div class="heading-subtitle primary-color">
                FULL STACK DEVELOPER
              </div>{" "}
              <h3 class="heading-title">About Me</h3>{" "}
              {/* <div class="heading-content">
                My name is Samuel. I Started coding in 2021 and I like creating cool projects.{" "}
              </div> */}
            </div>

            <div class="about-desc-text">
              I am a javascript engineer working majorly on frontend, backend
              and UI of applications with technologies like React, Redux,
              React-Hooks, Ionic, Cordova, NodeJS, Express, CSS, MongoDB, Material UI and Well
              understanding of Web application migration from server to client
              (Javascript, REST). Hands on experience with CSS optimization
              using Bootstrap. Who is also proficient in wordpress development
              and theming. Passionate about building accessible web
              and mobile apps that users love. A quick learner and a team worker that gets
              the job done.<span> And I ❤️ Food.</span>{" "}
            </div>
          
        </Grid>
        
        

        <Grid item md={6} className="icons-container">
          <Skills />
        </Grid>
      </Grid>
    </div>
  );
};
