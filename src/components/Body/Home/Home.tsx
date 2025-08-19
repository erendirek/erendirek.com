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
                    <p className="text-palette-light-yellow group-hover:text-palette-black text-3xl font-semibold transition-colors">
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
            className="section flex h-screen w-screen snap-start items-center overflow-hidden"
        >
            <div className="container mx-auto">
                <div className="flex">
                    <div className="flex flex-1 flex-col justify-center px-4">
                        <TypeWriterText
                            text="eren direk"
                            animationDuration={400}
                            cursor
                            className={clsx(
                                `${share_tech_mono.className} antialiased`,
                                "text-palette-light-yellow text-8xl",
                                styles["main-text-glow-anim"],
                                "typewriter",
                            )}
                        />

                        <p className="text-palette-white mt-12 text-xl">
                            I’m a self-taught developer who enjoys learning and
                            improving in different fields. Here, you can find my
                            projects, blog posts, and contact information.
                        </p>
                        <div className="mt-12 flex gap-x-12">
                            <MainButton text="projects" hash="projects" />
                            <MainButton text="contact me" hash="contact" />
                        </div>
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
