"use client";

import React, { useEffect, useState } from "react";
import styles from "./TypeWriterText.module.css";
import clsx from "clsx";

export default function TypeWriterText({
    className,
    text,
    animationDuration,
    cursor = false,
    reanimateOnScroll = false,
}: Readonly<{
    className?: string;
    text: string;
    animationDuration: number;
    cursor?: boolean;
    reanimateOnScroll?: boolean;
}>) {
    const [displayed, setDisplayed] = useState("");

    let displayInterval: NodeJS.Timeout | null = null;

    const animateText = () => {
        if (displayInterval) {
            clearInterval(displayInterval);
        }

        const animationDurationForLetter = animationDuration / text.length;
        let i = 1;

        displayInterval = setInterval(() => {
            setDisplayed(text.slice(0, i++));

            if (i >= text.length + 1 && displayInterval) {
                clearInterval(displayInterval);
            }
        }, animationDurationForLetter);
    };

    const onHashUpdated = () => {
        if (displayInterval) {
            clearInterval(displayInterval);
        }

        animateText();
    };

    useEffect(() => {
        animateText();

        if (reanimateOnScroll) {
            window.addEventListener("hash-updated", onHashUpdated);
        }

        () => {
            if (displayInterval) {
                clearInterval(displayInterval);
                window.removeEventListener("hash-updated", onHashUpdated);
            }
        };
    }, []);

    return (
        <p className={className} data-text={text}>
            {displayed}
            <span className={clsx(styles["cursor"], !cursor && "hidden")}>
                |
            </span>
        </p>
    );
}
