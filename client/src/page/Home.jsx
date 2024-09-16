import Contact from "../components/contact/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header"
import Hero from "../components/Hero"
import Project from "../components/project/Project";
import Skills from "../components/skills/Skills";

const Home = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <Project/>
            <Skills/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default Home;