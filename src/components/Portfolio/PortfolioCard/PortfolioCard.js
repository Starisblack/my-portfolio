import "./PortfolioCard.css";
import { ArrowRightAlt } from "@mui/icons-material";
import { Link } from "react-router-dom";
import cairopdx from "../../../assets/cairopdx.png"

export const PortfolioCard = () => {
  return (
    <div>
     <div class="single-project">
                <div class="img">
                <img src={cairopdx} alt="" style={{opacity: "1"}}/></div>
                <div class="content">
                    <p class="type">Website</p>
                    <h2 class="title">CAIROPDX</h2>
                    <p class="text">
                    It is the mission of the Center for African Immigrants and Refugees Organization (CAIRO)...
                    </p>
                    <Link class="read btn-style-1" to="/projects/1">See Project  <ArrowRightAlt /> </Link>
                </div>
            </div>
    </div>
  );
};
