import "./SocialIcons.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { Grid } from "@mui/material";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <Grid container gap={2}>
        <Grid item>
          <a href="/test">
           <GitHubIcon />
          </a>
        </Grid>

        <Grid item>
          <a href="/test" target="_blank" rel="noreferrer">
             <LinkedInIcon />
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

export default SocialIcons;
