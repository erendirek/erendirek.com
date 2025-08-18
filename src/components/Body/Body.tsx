import React from "react";
import Home from "./Home/Home";
import About from "./About/About";

export default function Body() {
    return (
        <main className="min-h-screen">
            <Home />
            <About />
        </main>
    );
}
