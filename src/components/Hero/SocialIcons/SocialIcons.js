import "./SocialIcons.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { Grid } from "@mui/material";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <Grid container gap={2}>
        <Grid item>
          <a href="https://github.com/Starisblack?tab=repositories"
             target="_blank"
             rel="noreferrer"
          >
           <GitHubIcon />
          </a>
        </Grid>

        <Grid item>
          <a href="https://www.linkedin.com/in/samuel-ogunniyi-74983a151" target="_blank" rel="noreferrer">
             <LinkedInIcon />
          </a>
        </Grid>

        
        <Grid item>
          <a href="https://api.whatsapp.com/send?phone=+2348104208431&amp;text=Hi, Samuel Ogunniyi" target="_blank" rel="noreferrer">
             <WhatsAppIcon />
          </a>
        </Grid>

      </Grid>
    </div>
  );
};

export default SocialIcons;
