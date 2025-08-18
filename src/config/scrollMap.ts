export const indexToHash: Record<number, string> = {
    0: "home",
    1: "about",
    2: "projects",
    3: "blogs",
    4: "contact",
};

export const hashToIndex: Record<string, number> = Object.fromEntries(
    Object.entries(indexToHash).map(([k, v]) => [v, Number(k)])
);

export const count = 5;
