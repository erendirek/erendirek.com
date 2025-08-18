import { orbitron, share_tech_mono, fira_code } from "@/ui/fonts";
import clsx from "clsx";
import React from "react";
import "./Home.css";
import { MoveRight } from "lucide-react";

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
        <div id="home" className="flex h-screen items-center">
            <div className="px-32">
                <div className="flex">
                    <div className="flex flex-1 flex-col justify-center">
                        <p
                            className={clsx(
                                `${share_tech_mono.className} antialiased`,
                                "text-palette-light-yellow text-8xl",
                                "main-text-glow-anim",
                            )}
                        >
                            Eren Direk
                        </p>
                        <p className="text-palette-white mt-12 text-xl">
                            I’m a self-taught developer who enjoys learning and
                            improving in different fields. Here, you can find my
                            projects, blog posts, and contact information.
                        </p>
                        <div className="mt-12 flex gap-x-12">
                            <MainButton text="Projects" hash="projects" />
                            <MainButton text="Contact Me" hash="contact" />
                        </div>
                    </div>
                    <div className="flex flex-1 items-center justify-center pt-24">
                        <div className="relative">
                            <div className="aspect-square w-[25rem]">
                                <div
                                    id="box-1"
                                    className="aspect-square w-[20rem]"
                                />
                                <div
                                    id="box-2"
                                    className="aspect-square w-[20rem]"
                                />
                                <div
                                    id="box-3"
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
