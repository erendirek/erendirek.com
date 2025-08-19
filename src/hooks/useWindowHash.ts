import { useEffect, useState } from "react";

export default function useWindowHash(): [string, (hash: string) => void] {
    const [hash, setHash] = useState("#home");

    useEffect(() => {
        const onHashChange = () => {
            setHash(window.location.hash);
        };
        window.addEventListener("hashchange", onHashChange);
        window.addEventListener("hash-updated", onHashChange);

        return () => {
            window.removeEventListener("hashchange", onHashChange);
            window.removeEventListener("hash-updated", onHashChange);
        };
    }, []);

    return [hash, setHash];
}
