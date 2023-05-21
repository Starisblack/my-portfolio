import "./PortfolioCard.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
// import { Link } from "react-router-dom";
// import cairopdx3 from "../../../assets/cairopdx3.png";

export const PortfolioCard = ({ data }) => {
  return (
    <div className="listing-container">
      {data?.map((itemData) => {
        return (
          <div key={itemData.id} className="single-project">
            <div
              className="container_foto"
              // style={{ backgroundImage: `url(${itemData.img})` }}
            >
              <div className="overlay"></div>
              <div
                className="portfolio-content"
                style={{ position: "relative", zIndex: "10" }}
              >
                <h1>{itemData.name}</h1>
                <p className="portfolio-desc">
                 {itemData.desc}
                </p>
                <ul class="portfolio-tech-list">
                {itemData.tech.map(tec => {
                   return  <li>{tec}</li>
                })}
                </ul>
                <div className="portfolio-footer-icon">
                 {itemData.gitUrl && <a href={itemData.gitUrl} className="link">
                  <GitHubIcon  />
                  </a>}
                  <a href={itemData.url} className="link">
                  <ArrowOutwardIcon sx={{ fontSize: 30 }} />
                  </a>
                </div>
              </div>
        
            </div>
          </div>
        );
      })}
    </div>
  );
};
