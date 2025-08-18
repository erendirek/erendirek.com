"use client";

import { useEffect, useState } from "react";
import { indexToHash, hashToIndex, count } from "@/config/scrollMap";
import useWindowHash from "@/hooks/useWindowHash";

export default function ScrollHandler() {
    const [hash, setHash] = useWindowHash();
    const [lastKnownScroll, setLastKnownScroll] = useState(0);

    useEffect(() => {
        const handleScroll = (e: Event) => {
            console.log("SEA");
            const scrollAmount = window.scrollY - lastKnownScroll;
            setLastKnownScroll(window.scrollY);

            const newIndex =
                hashToIndex[hash] + scrollAmount / Math.abs(scrollAmount);
            const newHash = indexToHash[newIndex % count];

            console.log(newHash);
            if (newHash) {
                setHash(newHash);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [hash]);

    return null;
}
