import { share_tech_mono } from "@/ui/fonts";
import clsx from "clsx";
import React from "react";
import TypeWriterText from "@/components/TypeWriterText/TypeWriterText";
import SlideShow from "@/components/SlideShow/SlideShow";
import SlideShowElement from "@/components/SlideShow/SlideShowElement";

export default function Projects() {
    return (
        <div id="projects" className="section h-screen snap-start">
            <div className="container mx-auto h-full pt-32">
                <div className="flex pt-4">
                    <p
                        className={clsx(
                            `${share_tech_mono.className} antialiased}`,
                            "text-center text-6xl",
                            "text-palette-green lg:text-7xl",
                            "header-green-glow-animation",
                            "hidden md:block",
                        )}
                    >
                        [eren ~]$&#x2800;
                    </p>
                    <TypeWriterText
                        text="cat projects"
                        animationDuration={600}
                        cursor
                        reanimateOnScroll
                        className={clsx(
                            `${share_tech_mono.className} antialiased}`,
                            "text-center text-5xl md:text-6xl",
                            "text-palette-green lg:text-7xl",
                            "header-green-glow-animation",
                            "flex-1 text-center md:text-left",
                        )}
                    />
                </div>
                <div className="mt-32 flex h-96 items-stretch px-4">
                    <SlideShow className="hidden flex-1">
                        <SlideShowElement
                            title="Yaten's Horror Session"
                            description="My first game published on Google Play."
                            imageURL="https://play-lh.googleusercontent.com/DEFNnl683Z9a-th7uJb8cx6h7ntIetyxItNlxkIP-m6t4noOsUqZG2yAUJohac98Zrg=w416-h235-rw"
                            imageAlt="yhs-1-image"
                            link="https://play.google.com/store/apps/details?id=com.YEDgames.YatensHorrorSession&hl=tr"
                        />
                        <SlideShowElement
                            title="Yaten's Horror Session II"
                            description="My second game published on Google Play."
                            imageURL="https://play-lh.googleusercontent.com/ttZ_Ys0kP8yEK6QiRVpSDFSpJeOrCAA867HKAwL4REmrOcdM6e7x3Q8c57A-0b3kORs=w416-h235-rw"
                            imageAlt="yhs-2-image"
                            link="https://play.google.com/store/apps/details?id=com.YEDgames.yatenshorrorsessionii&hl=tr"
                        />
                    </SlideShow>
                </div>
            </div>
        </div>
    );
}
