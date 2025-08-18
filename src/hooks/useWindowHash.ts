import { useEffect, useState } from "react";

export default function useWindowHash(): [string, (hash: string) => void] {
    const [hash, setHash] = useState("#home");

    useEffect(() => {
        const onHashChange = () => {
            setHash(window.location.hash);
            console.log(hash);
        };
        window.addEventListener("hashchange", onHashChange);

        return () => window.removeEventListener("hashchange", onHashChange);
    }, []);

    return [hash, setHash];
}
