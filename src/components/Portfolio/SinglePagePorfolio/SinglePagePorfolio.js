import "./SinglePagePorfolio.css";
import { Grid } from "@mui/material";
import cairopdx3 from "../../../assets/cairopdx3.png";
import cairopdx1 from "../../../assets/cairopdx1.png";
import cairopdx2 from "../../../assets/cairopdx2.png";
import { useEffect } from "react";

const SinglePagePorfolio = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <div className="single-page-portfolio">
      <div className="container-page">
        <div className="portfolio-detail-container">
          <h1 className="heading-title">CAIROPDX</h1>
          <p className="heading-subtitle">Website</p>
          <Grid container className="portfolio-detail-box">
            <Grid item xs={12} md={6}>
              <Grid container gap={2}>
                <Grid item xs={5} md={5}>
                  <div class="details-label">
                    {" "}
                    <strong> Year: </strong> <span> 2022 </span>
                  </div>
                </Grid>

                <Grid item xs={5} md={5}>
                  <div class="details-label">
                    {" "}
                    <strong> Technology: </strong>{" "}
                    <span> Wordpress, Elementor </span>
                  </div>
                </Grid>
                {/* 
                <Grid item md={4}>
                  <div class="details-label">
                    {" "}
                    <strong> Categories: </strong>{" "}
                    <span> Branding, UI UX Design </span>
                  </div>
                </Grid> */}
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <div className="text-end">
                <a
                  href="https://cairopdx.org/"
                  target="_blank"
                  className="btn cv-btn"
                  rel="noreferrer"
                >
                  Visit Website
                </a>
              </div>
            </Grid>

            <Grid item xs={12} md={6}>
              <div className="details-label desc-box">
                {" "}
                <strong> Description: </strong>{" "}
                <span>
                  {" "}
                  It is the mission of the Center for African Immigrants and
                  Refugees Organization (CAIRO) to advocate for and act to
                  increase equity and social justice through programs, services,
                  community organizing and immigrant children, youth and
                  families to thrive.{" "}
                </span>
              </div>
            </Grid>
          </Grid>
        </div>

        <div className="portfolio-img">
          <img src={cairopdx3} alt="cairopdx" />

          <Grid container gap={2} className="sub-gallery-list">
            <Grid item xs={12} md={7}>
              <img src={cairopdx2} alt="cairopdx" className="tablet" />
            </Grid>

            <Grid item xs={12} md={4}>
              <img src={cairopdx1} alt="cairopdx" className="mobile" />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default SinglePagePorfolio;
