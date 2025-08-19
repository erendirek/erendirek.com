import { orbitron, share_tech_mono, fira_code } from "@/ui/fonts";
import clsx from "clsx";
import React from "react";
import styles from "./Home.module.css";
import { MoveRight } from "lucide-react";
import TypeWriterText from "@/components/TypeWriterText/TypeWriterText";

function MainButton({ text, hash }: Readonly<{ text: string; hash: string }>) {
    return (
        <a href={`#${hash}`}>
            <div className="border-palette-light-yellow hover:bg-palette-light-yellow group rounded-md border-2 px-4 py-2">
                <div className="flex items-center gap-x-4">
                    <p
                        className={clsx(
                            "text-palette-light-yellow group-hover:text-palette-black text-xl font-semibold transition-colors lg:text-2xl xl:text-3xl",
                        )}
                    >
                        {text}
                    </p>
                    <MoveRight
                        className="text-palette-light-yellow group-hover:text-palette-black transition-colors"
                        size={32}
                        strokeWidth={3}
                    />
                </div>
            </div>
        </a>
    );
}

export default function Home() {
    return (
        <div
            id="home"
            className={clsx(
                "section flex h-screen w-full snap-start items-center overflow-hidden",
            )}
        >
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row">
                    <div className="flex flex-1 flex-col items-stretch justify-center px-4 pt-32">
                        <TypeWriterText
                            text="eren direk"
                            animationDuration={400}
                            cursor
                            className={clsx(
                                `${share_tech_mono.className} antialiased`,
                                "text-center text-6xl lg:text-left",
                                "text-palette-light-yellow lg:text-7xl xl:text-8xl",
                                styles["main-text-glow-anim"],
                                "typewriter",
                            )}
                        />

                        <p className="text-palette-white mt-12 text-center text-xl lg:text-left lg:text-2xl">
                            I’m a self-taught developer who enjoys learning and
                            improving in different fields. Here, you can find my
                            projects, blog posts, and contact information.
                        </p>
                        <div className="mt-12 hidden gap-x-2 lg:flex">
                            <MainButton text="projects" hash="projects" />
                            <MainButton text="contact me" hash="contact" />
                        </div>
                    </div>
                    <div
                        className={clsx(
                            "flex flex-1 items-center justify-center px-4 pt-16",
                        )}
                    >
                        <div className="relative">
                            <div
                                className={clsx(
                                    "aspect-square",
                                    "lg:w-[25rem]",
                                    "w-[20rem]",
                                )}
                            >
                                <div
                                    id={styles["box-1"]}
                                    className={clsx(
                                        "aspect-square",
                                        "lg:w-[20rem]",
                                        "w-[15rem]",
                                    )}
                                />
                                <div
                                    id={styles["box-2"]}
                                    className={clsx(
                                        "aspect-square",
                                        "lg:w-[20rem]",
                                        "w-[15rem]",
                                    )}
                                />
                                <div
                                    id={styles["box-3"]}
                                    className={clsx(
                                        "aspect-square",
                                        "lg:w-[20rem]",
                                        "w-[15rem]",
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
