"use client";

import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { Children, HTMLAttributes, useEffect, useState } from "react";

export default function SlideShow({
    children,
    className,
}: Readonly<{
    children?: React.ReactNode;
    className?: string;
}>) {
    const [current, setCurrent] = useState(0);
    const [shownContentCount, setShownContentCount] = useState(2);

    const prev = () => {
        const childCount = Children.count(children);
        const limit = childCount - shownContentCount + 1;
        const newCurrent = (current - 1 + limit) % limit;
        setCurrent(newCurrent);
    };

    const next = () => {
        const childCount = Children.count(children);
        const limit = childCount - shownContentCount + 1;
        const newCurrent = (current + 1) % limit;
        setCurrent(newCurrent);
    };

    useEffect(() => {
        const onSizeChanged = () => {
            const sizeX = window.innerWidth;
            let scc = 0;
            scc = sizeX < 1024 ? 1 : 2;

            setShownContentCount(scc);
        };

        window.addEventListener("resize", onSizeChanged);

        return () => window.removeEventListener("resize", onSizeChanged);
    }, []);

    useEffect(() => {
        console.log(shownContentCount);
    }, [shownContentCount]);

    return (
        <div className={clsx(className)}>
            <div className="flex h-full">
                <div className="flex w-1/12 items-center justify-start">
                    <button onClick={prev}>
                        <ChevronLeft
                            size={64}
                            className={clsx(
                                "text-palette-yellow",
                                "yellow-svg-glow",
                            )}
                        />
                    </button>
                </div>
                <div className="flex flex-1 overflow-hidden">
                    <div
                        id="track"
                        className="flex w-full transition-all"
                        style={{
                            transform: `translateX(-${current * (100 / shownContentCount)}%)`,
                        }}
                    >
                        {Children.map(children, (child) => (
                            <div
                                className="h-full shrink-0"
                                style={{
                                    width: `${100 / shownContentCount}%`,
                                }}
                            >
                                {child}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex w-1/12 items-center justify-end">
                    <button onClick={next}>
                        <ChevronRight
                            size={64}
                            className={clsx(
                                "text-palette-yellow",
                                "yellow-svg-glow",
                            )}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}
