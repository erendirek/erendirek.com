import TypeWriterText from "@/components/TypeWriterText/TypeWriterText";
import { share_tech_mono } from "@/ui/fonts";
import clsx from "clsx";
import React, { ReactNode } from "react";
import { LuLinkedin, LuGithub, LuLink, LuMail } from "react-icons/lu";
import { IconType } from "react-icons";

function ContactLink({
    iconType,
    text,
    link,
}: {
    iconType: IconType;
    text: string;
    link: string;
}) {
    return (
        <div className="flex">
            <a href={link} target="_blank">
                <div className="group flex items-center gap-x-3">
                    {(() => {
                        return React.createElement(iconType, {
                            className:
                                "text-palette-white group-hover:group-hover-white-svg-shadow",
                            size: 32,
                        });
                    })()}
                    <p className="text-palette-white group-hover:group-hover-white-text-shadow hidden text-2xl lg:block">
                        {text}
                    </p>
                </div>
            </a>
        </div>
    );
}
export default function Contact() {
    return (
        <div id="contact" className="section relative h-screen snap-start">
            <div className="container mx-auto flex h-full flex-col pt-32">
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
                        text="cat contact"
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
                <div className="mt-8 flex h-full flex-1 items-stretch px-4 lg:mt-24 lg:pt-8">
                    <div className="flex flex-1 flex-col lg:flex-row">
                        <div className="pb-4 lg:flex-1">
                            <div className="flex flex-1 justify-center gap-x-12 gap-y-8 lg:flex-col">
                                <ContactLink
                                    iconType={LuLinkedin}
                                    text="erndrk"
                                    link="https://www.linkedin.com/in/erndrk/"
                                />
                                <ContactLink
                                    iconType={LuGithub}
                                    text="erendirek"
                                    link="https://github.com/erendirek"
                                />
                                {/* <ContactLink
                                iconType={LuLink}
                                text="erendirek.com"
                                link="https://erendirek.com"
                            /> */}
                                <ContactLink
                                    iconType={LuMail}
                                    text="erendirek2145@gmail.com"
                                    link="mailto:erendirek2145@gmail.com"
                                />
                            </div>
                        </div>
                        <div className="lg:flex-1">
                            <form className="w-full">
                                <div className="flex flex-col gap-y-2">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-palette-black border-palette-white text-palette-white peer order-1 border-2 px-2 py-1 outline-none"
                                    />
                                    <label
                                        htmlFor="email"
                                        className="text-palette-white peer-focus:group-hover-white-text-shadow text-lg transition-all md:text-xl"
                                    >
                                        Email:
                                    </label>
                                </div>
                                <div className="mt-4 flex flex-col gap-y-2">
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        className="bg-palette-black border-palette-white text-palette-white peer order-1 border-2 px-2 py-1 outline-none"
                                    />
                                    <label
                                        htmlFor="title"
                                        className="text-palette-white peer-focus:group-hover-white-text-shadow text-lg transition-all md:text-xl"
                                    >
                                        Subject:
                                    </label>
                                </div>
                                <div className="mt-4 flex flex-col gap-y-2">
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={3}
                                        className="bg-palette-black border-palette-white text-palette-white peer order-1 border-2 px-2 py-1 outline-none"
                                    />
                                    <label
                                        htmlFor="message"
                                        className="text-palette-white peer-focus:group-hover-white-text-shadow text-lg transition-all md:text-xl"
                                    >
                                        Message:
                                    </label>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="text-palette-black border-palette-yellow bg-palette-yellow hover:text-palette-yellow hidden w-full border-2 py-4 text-xl font-bold hover:bg-transparent"
                                    >
                                        Submit
                                    </button>
                                    <div className="text-palette-red border-palette-red red-svg-glow w-full border-2 py-4 text-xl font-bold hover:bg-transparent">
                                        <p className="text-center">
                                            submit:error
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
