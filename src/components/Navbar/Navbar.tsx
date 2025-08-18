"use client";

import React from "react";
import "./Navbar.css";
import clsx from "clsx";
import useWindowHash from "@/hooks/useWindowHash";

function ListItem({
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
                        active && "glow-noise"
                    )}
                >
                    {index}.
                </span>
                <span
                    className={clsx(
                        "text-palette-white group-hover:text-palette-green",
                        active && "!text-palette-green glow-noise"
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

    return (
        <nav className="h-32 flex items-center px-12 fixed w-full top-0">
            <div className="flex justify-end flex-1">
                <ul className="flex text-palette-white gap-x-8">
                    <ListItem
                        index={0}
                        text="Home"
                        address="home"
                        active={hash === "#home"}
                    />
                    <ListItem
                        index={1}
                        text="About"
                        address="about"
                        active={hash === "#about"}
                    />
                    <ListItem
                        index={2}
                        text="Projects"
                        address="projects"
                        active={hash === "#projects"}
                    />
                    <ListItem
                        index={3}
                        text="Blogs"
                        address="blogs"
                        active={hash === "#blogs"}
                    />
                    <ListItem
                        index={4}
                        text="Contact"
                        address="contact"
                        active={hash === "#contact"}
                    />
                </ul>
            </div>
        </nav>
    );
}
