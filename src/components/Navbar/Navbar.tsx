"use client";

import React, { useEffect, useState } from "react";
import "./Navbar.css";
import clsx from "clsx";
import useWindowHash from "@/hooks/useWindowHash";
import { List, Menu } from "lucide-react";

function ListItemToggeledNav({
    text,
    active = false,
    address,
}: Readonly<{
    text: string;
    active?: boolean;
    address: string;
}>) {
    return (
        <a href={`#${address}`}>
            <li className="group flex cursor-pointer justify-center py-4 text-xl">
                <span
                    className={clsx(
                        "text-palette-white group-hover:text-palette-green",
                        active && "!text-palette-green glow-noise",
                    )}
                >
                    {text}
                </span>
            </li>
        </a>
    );
}

function ListItemUntoggledNav({
    index,
    text,
    active = false,
    address,
}: Readonly<{
    index: number;
    text: string;
    active?: boolean;
    address: string;
}>) {
    return (
        <a href={`#${address}`}>
            <li className="group cursor-pointer text-xl">
                <span
                    className={clsx(
                        "text-palette-green",
                        active && "glow-noise",
                    )}
                >
                    {index}.
                </span>
                <span
                    className={clsx(
                        "text-palette-white group-hover:text-palette-green",
                        active && "!text-palette-green glow-noise",
                    )}
                >
                    {text}
                </span>
            </li>
        </a>
    );
}

export default function Navbar() {
    const [hash, _] = useWindowHash();
    const [navOpen, setNavOpen] = useState(false);

    useEffect(() => {
        console.log(hash);
    }, [hash]);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    useEffect(() => {
        const onScroll = () => {
            setNavOpen(false);
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav className="fixed top-0 z-[100] w-screen">
            <div className="bg-palette-black/75 relative flex min-h-32 md:hidden">
                <div className="flex h-32 flex-1 items-center justify-center">
                    <button className="p-4" onClick={toggleNav}>
                        <Menu
                            className={clsx(
                                "text-palette-green transition-all",
                                navOpen && "green-svg-glow",
                            )}
                            size={42}
                            style={{
                                transform: navOpen
                                    ? "rotate(90deg)"
                                    : "rotate(0deg)",
                                transitionTimingFunction:
                                    "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                            }}
                        />
                    </button>
                </div>
                <div
                    className="bg-palette-black/75 absolute top-0 mt-32 w-full transition-all"
                    style={{
                        transform: navOpen ? "scale(1,1)" : "scale(1,0)",
                        transformOrigin: "top",
                    }}
                >
                    <ul className="">
                        <ListItemToggeledNav
                            text="home"
                            address="home"
                            active={hash === "#home"}
                        />
                        <ListItemToggeledNav
                            text="about"
                            address="about"
                            active={hash === "#about"}
                        />
                        <ListItemToggeledNav
                            text="projects"
                            address="projects"
                            active={hash === "#projects"}
                        />
                        <ListItemToggeledNav
                            text="blogs"
                            address="blogs"
                            active={hash === "#blogs"}
                        />
                        <ListItemToggeledNav
                            text="contact"
                            address="contact"
                            active={hash === "#contact"}
                        />
                    </ul>
                </div>
            </div>
            <div className="hidden h-32 items-center px-12 md:flex">
                <div className="flex flex-1 justify-end">
                    <ul className="text-palette-white flex gap-x-8">
                        <ListItemUntoggledNav
                            index={0}
                            text="home"
                            address="home"
                            active={hash === "#home"}
                        />
                        <ListItemUntoggledNav
                            index={1}
                            text="about"
                            address="about"
                            active={hash === "#about"}
                        />
                        <ListItemUntoggledNav
                            index={2}
                            text="projects"
                            address="projects"
                            active={hash === "#projects"}
                        />
                        <ListItemUntoggledNav
                            index={3}
                            text="blogs"
                            address="blogs"
                            active={hash === "#blogs"}
                        />
                        <ListItemUntoggledNav
                            index={4}
                            text="contact"
                            address="contact"
                            active={hash === "#contact"}
                        />
                    </ul>
                </div>
            </div>
        </nav>
    );
}
