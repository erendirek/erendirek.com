"use client";

import { useEffect, useState } from "react";

export default function IntersectionObserverController() {
    useEffect(() => {
        const sections = document.querySelectorAll(".section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((element) => {
                    if (element.isIntersecting) {
                        const id = element.target.id;

                        window.history.replaceState(null, "", `#${id}`);

                        window.dispatchEvent(
                            new CustomEvent("hash-updated", {
                                detail: {
                                    id: element.target.id,
                                },
                            }),
                        );
                    }
                });
            },
            { threshold: 0.6 },
        );

        sections.forEach((sec) => observer.observe(sec));

        return () => observer.disconnect();
    }, []);

    return null;
}
