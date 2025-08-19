import React from "react";
import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Blogs from "./Blogs/Blogs";
import Contact from "./Contact/Contact";

export default function Body() {
    return (
        <main className="min-h-screen">
            <Home />
            <About />
            <Projects />
            <Blogs />
            {/* <Contact /> */}
        </main>
    );
}
