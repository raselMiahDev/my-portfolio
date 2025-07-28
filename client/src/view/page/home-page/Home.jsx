import Hero from "./Hero"
import Contact from "../../components/contact/Contact";
import Project from "../../components/project/Project";
import Skills from "../../components/skills/Skills";
import BlogPage from "../blog/blog-page";

const Home = () => {
    return (
        <>
            <Hero/>
            <Project/>
            <Skills/>
            <BlogPage/>
            <Contact/>
        </>
    );
};

export default Home;