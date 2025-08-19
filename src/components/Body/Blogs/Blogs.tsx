import TypeWriterText from "@/components/TypeWriterText/TypeWriterText";
import { share_tech_mono } from "@/ui/fonts";
import clsx from "clsx";
import React from "react";
import styles from "./Blogs.module.css";

export default function Blogs() {
    return (
        <div id="blogs" className="section h-screen snap-start">
            <div className="container mx-auto flex h-full flex-col pt-32">
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
                        text="cat blogs"
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
                <div className="mt-12 flex flex-1 items-stretch px-4">
                    <p
                        className={clsx(
                            "text-palette-red text-5xl",
                            "red-text-glow",
                        )}
                    >
                        cat: blogs: No such file or directory
                    </p>
                </div>
            </div>
        </div>
    );
}
