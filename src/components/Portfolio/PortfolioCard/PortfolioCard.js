import "./PortfolioCard.css";
import { ArrowRightAlt } from "@mui/icons-material";
// import { Link } from "react-router-dom";
// import cairopdx3 from "../../../assets/cairopdx3.png";

export const PortfolioCard = ({ data }) => {
  return (
    <div className="listing-container">
      {data?.map((itemData) => {
        return (
          <div key={itemData.id} className="single-project" >
            <div className="container_foto"  style={{backgroundImage: `url(${itemData.img})` }}>
              {/* <div className="type">
                <span>{itemData.type}</span>
              </div> */}
              <div className="ver_mas text-center">
                <a
                  className="read btn-style-1"
                  href={itemData.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Website <ArrowRightAlt />{" "}
                </a>
              </div>
            {/*   <article class="text-left">
                <h2>
              CAIRO-PDX
              <br />
            </h2> */}
                {/* <h4>
              It is the mission of the Center for African Immigrants and
              Refugees Organization (CAIRO)...
            </h4>
              </article>  */}
{/* 
              <img src={itemData.img} alt={itemData.name} /> */}
            </div>
            {/* <div class="img">
                <img src={cairopdx} alt="" style={{opacity: "1"}}/>
                </div>
                <div class="content">
                    <p class="type">Website</p>
                    <h2 class="title">CAIROPDX</h2>
                    <p class="text">
                    It is the mission of the Center for African Immigrants and Refugees Organization (CAIRO)...
                    </p>
                    <Link class="read btn-style-1" to="/projects/1">See Project  <ArrowRightAlt /> </Link>
                </div> */}
          </div>
        );
      })}
    </div>
  );
};
