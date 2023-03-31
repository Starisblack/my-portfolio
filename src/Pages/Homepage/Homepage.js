import { AboutMe } from "../../components/About/AboutMe"
// import Education from "../../components/Education/Education"
// import Experience from "../../components/Experience/Experience"
import Hero from "../../components/Hero/Hero"
import Portfolio from "../../components/Portfolio/Portfolio"
import Services from "../../components/Services/Services"


const Homepage = () => {
  return (
    <div>
      <Hero />
      <Services/>
      <AboutMe />
      {/* <Education />
      <Experience /> */}
      <Portfolio />
    </div>
  )
}

export default Homepage