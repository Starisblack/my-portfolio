import { Animation } from "../../utils/animation";
import { Card } from "../Card/Card";
import "./Services.css";

const Services = () => {
  const serviceLists = [
    {
      title: "Frontend Development",
      tools: ["HTML5 | CSS | Bootstrap", "Wordpress", "Javascript", "React"],
    },

    {
      title: "Backend Development",
      tools: ["API Development", "Express Js", "MongoDB", "Firebase"],
    },

    {
      title: "Mobile App Development",
      tools: ["Ionic Framework", "Cordova", "Firebase"],
    },
  ];

  return (
    <div id="services" className="section-container service-content">
      <div className="text-align-left">
        {" "}
        <Animation type="fade-up">
        <div className="heading-subtitle primary-color">Services</div>{" "}
        <h3 className="heading-title dark-color">What I do</h3>{" "}
        </Animation>
      </div>

      <div className="row service-lists">
        {serviceLists.map((service) => {
          return (
            <div key={service.title} className="col-md-6 col-lg-4">
            <Animation key={service.title} type="fade-up">
              <Card
                title={service.title}
                tools={service.tools}
              />
            </Animation>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
