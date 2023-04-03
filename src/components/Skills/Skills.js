import { Grid } from "@mui/material";
import "./Skills.css";
import bootstrap from "../../assets/images/desktopIcons/icons8-bootstrap-96.png";
import css from "../../assets/images/desktopIcons/icons8-css3-96.png";
import html from "../../assets/images/desktopIcons/icons8-html-5-is-a-software-solution-stack-that-defines-the-properties-and-behaviors-of-web-page-96.png";
import ionic from "../../assets/images/desktopIcons/icons8-ionic-96.png";
import react from "../../assets/images/desktopIcons/icons8-react-native-96.png";
import javascript from "../../assets/images/desktopIcons/icons8-javascript-96.png";
import nodeJs from "../../assets/images/desktopIcons/icons8-node-js-96.png";
import wordpress from "../../assets/images/desktopIcons/icons8-wordpress-96.png";
import mongodb from "../../assets/images/desktopIcons/icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png";
import { Animation } from "../../utils/animation";



const Skills = () => {
  const desktopIcons = [ wordpress, bootstrap, css, html, javascript, ionic, react, nodeJs, mongodb];

  return (
    <div className="tech-container">
    <Animation type="fade-right">
      <p className="heading-subtitle">Tech Stack</p>

      <Grid  className="skill-container" container gap={3}>
        {desktopIcons.map((icon) => {
          return (
            <Grid key={icon} item  xs={2} md={3}>
              <img  className="tech-icon" src={icon} alt={icon} />
            </Grid>
          );
        })}
        
      </Grid>
      </Animation>
    </div>
  );
};

export default Skills;
