import PortfolioTabs from "./Tabs/Tabs";
import "./Portfolio.css"
// import { SecondCard } from "../Card/Card";






const Portfolio = () => {
  return (
    <div id="portfolio" className="section-container">
         <div className="heading-subtitle primary-color">
                Portfolio
              </div>{" "}
              <h3 className="heading-title">Projects</h3>
              <PortfolioTabs
               />
              
              
    </div>
  )
}


export default Portfolio;
