import Hero from "./Hero"
import Contact from "../../components/contact/Contact";
import Project from "../../components/project/Project";
import Skills from "../../components/skills/Skills";

const Home = () => {
    return (
        <>
            <Hero/>
            <Project/>
            <Skills/>
            <Contact/>
        </>
    );
};

export default Home;