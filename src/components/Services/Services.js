import { Card } from "../Card/Card";
import "./Services.css";

const Services = () => {


    const serviceLists = [
         {
            title: "Frontend Development",
            tools:["HTML5 | CSS | Bootstrap", "Wordpress", "Javascript", "React"]
         },

         {
            title: "Backend Development",
            tools:["API Development", "Express Js", "MongoDB", "Firebase"]
         },

         {
            title: "Mobile App Development",
            tools:["Ionic Framework", "Cordova", "Firebase"]
         }
    ]

  return (
    <div id="services" className="section-container service-content">
      <div className="text-align-left">
        {" "}
        <div className="heading-subtitle primary-color">Services</div>{" "}
        <h3 className="heading-title dark-color">What I do</h3>{" "}
        {/* <div class="heading-content dark-color">
          Donec imperdiet risus at tortor consequat maximus et eget magna. Cras
          ornare sagittis augue, id sollicitudin justo tristique ut.{" "}
        </div> */}
      </div>

      <div className="row service-lists">


  
     
      
       {serviceLists.map((service)=>{
           return <div key={service.title} className="col-md-6 col-lg-4">
          <Card key={service.title} title={service.title} tools={service.tools}/>
        </div>
      })}
        
       
      
      </div>
    </div>
  );
};

export default Services;
