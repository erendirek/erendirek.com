import React from "react";
import styles from "./About.module.css";
import clsx from "clsx";
import { share_tech_mono } from "@/ui/fonts";
import TypeWriterText from "@/components/TypeWriterText/TypeWriterText";

export default function About() {
    return (
        <div id="about" className="section h-screen snap-start">
            <div className="container mx-auto pt-32">
                <div className="flex">
                    <p
                        className={clsx(
                            `${share_tech_mono.className} antialiased}`,
                            "text-palette-green text-7xl",
                            "header-green-glow-animation",
                        )}
                    >
                        [eren ~]$&#x2800;
                    </p>
                    <TypeWriterText
                        text="cat about"
                        animationDuration={600}
                        cursor
                        reanimateOnScroll
                        className={clsx(
                            `${share_tech_mono.className} antialiased}`,
                            "text-palette-green text-7xl",
                            "header-green-glow-animation",
                        )}
                    />
                </div>
                <div className="flex">
                    <div className="flex-1 px-4">
                        <p className="text-palette-white mt-12 text-2xl leading-10">
                            I’m a self-taught developer and Computer Science
                            student with a strong passion for technology. Since
                            2020, I’ve been exploring and improving myself in
                            various fields including game development, backend
                            and frontend development, and networking. My
                            experience ranges from building games that reached
                            over{" "}
                            <span
                                className={clsx(
                                    "text-palette-yellow",
                                    "yellow-text-glow",
                                )}
                            >
                                500,000+ downloads
                            </span>{" "}
                            to working with programming languages such as C#,
                            Java, C/C++, and Rust. I enjoy learning new skills,
                            experimenting with different technologies, and
                            continuously expanding my knowledge in software
                            development and engineering.
                        </p>
                    </div>
                    <div className="flex flex-1 items-center justify-center px-4 pt-24">
                        <div className="relative">
                            <div className="aspect-square w-[25rem]">
                                <div
                                    id={styles["box-1"]}
                                    className="aspect-square w-[20rem]"
                                />
                                <div
                                    id={styles["box-2"]}
                                    className="aspect-square w-[20rem]"
                                />
                                <div
                                    id={styles["box-3"]}
                                    className="aspect-square w-[20rem]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
