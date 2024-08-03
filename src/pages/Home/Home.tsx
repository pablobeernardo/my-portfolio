import Navbar from "../../components/Navbar/Navbar"
import About from "./sections/About/About"
import Footer from "./sections/Footer/footer"
import Hero from "./sections/Hero/Hero"
import Projects from "./sections/Projects/Projects"

const Home = () =>{

    return (
      <>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Footer />
      </>
    )
  }
  
  export default Home
  