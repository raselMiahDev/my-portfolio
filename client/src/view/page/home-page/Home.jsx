import Header from "../../components/common/Header"
import Hero from "./Hero"
import Contact from "../../components/contact/Contact";
import Footer from "../../components/common/Footer";
import Project from "../../components/project/Project";
import Skills from "../../components/skills/Skills";

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