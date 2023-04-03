import "./AboutMe.css";
import { Grid } from "@mui/material";
import { Animation } from "../../utils/animation";
import Skills from "../Skills/Skills";

export const AboutMe = () => {
  return (
    <div  id="aboutMe" className="section-container">
      <Grid container>
        <Grid item md={6}>
            <div>
            
              <div className="heading-subtitle primary-color">
               <Animation type="fade-right">
                FULL STACK DEVELOPER
                </Animation>
              </div>{" "}
              <Animation type="fade-right">
              <h3 className="heading-title">About Me</h3>{" "}
              </Animation>
            </div>

            <div className="about-desc-text">
            <Animation type="fade-right">
              I am a javascript engineer working majorly on frontend, backend
              and UI of applications with technologies like React, Redux,
              React-Hooks, Ionic, Cordova, NodeJS, Express, CSS, MongoDB, Material UI and Well
              understanding of Web application migration from server to client
              (Javascript, REST). Hands on experience with CSS optimization
              using Bootstrap. Who is also proficient in wordpress development
              and theming. Passionate about building accessible web
              and mobile apps that users love. A quick learner and a team worker that gets
              the job done.<span> And I ❤️ Food.</span>{" "}
              </Animation>
            </div>
          
        </Grid>
        
        

        <Grid item md={6} className="icons-container">
       
          <Skills />
    
        </Grid>
      </Grid>
    </div>
  );
};
