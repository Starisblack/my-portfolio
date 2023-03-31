import PortfolioTabs from "./Tabs/Tabs";
import "./Portfolio.css"
import { PortfolioCard } from "./PortfolioCard/PortfolioCard";



const Portfolio = () => {
  return (
    <div id="portfolio" className="section-container">
         <div class="heading-subtitle primary-color">
                Portfolio
              </div>{" "}
              <h3 class="heading-title">Projects</h3>
              <PortfolioTabs />
              <PortfolioCard /> 
    </div>
  )
}


export default Portfolio;
