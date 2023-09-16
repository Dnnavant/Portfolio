import AboutMe from "./Components/AboutMe/AboutMe";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";
import HomeSection from "./Components/HomeSection/HomeSection";
import HomeSection2 from "./Components/HomeSection2/HomeSection2";
import Navbar from "./Components/Navbar/Navbar";
import ProjectsSection from "./Components/ProjectsSection/ProjectsSection";
function App() {

  return (
      <div>
        {/* <Navbar/>
        <HomeSection/> */}
        <HomeSection2/>
        <AboutMe/>
        <ProjectsSection/>
        <ContactMe/>
        <Footer/>
      </div>
        
  );
}

export default App;
