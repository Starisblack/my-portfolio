import "./Tabs.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import { PortfolioCard } from "../PortfolioCard/PortfolioCard";
import { portfolioData } from "../PortfolioData/portfolioData";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const PortfolioTabs = ({ web }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  

  return (
    <Box sx={{ width: "100%" }} className="tabs-container">
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Web Development" {...a11yProps(1)} />
          <Tab label="Mobile App Development" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <PortfolioCard data={portfolioData} />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <PortfolioCard data={portfolioData.filter(data => data.type === "Website")} />
          
      </TabPanel>

      <TabPanel value={value} index={2}>
      <PortfolioCard data={portfolioData.filter(data => data.type === "Mobile")} />
      </TabPanel>
    </Box>
  );
};

export default PortfolioTabs;
