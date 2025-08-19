import clsx from "clsx";
import Image from "next/image";
import styles from "./SlideShow.module.css";

export default function SlideShowElement({
    title,
    description,
    imageURL,
    imageAlt,
    link,
    className,
}: Readonly<{
    title: string;
    description: string;
    imageURL: string;
    imageAlt: string;
    link: string;
    className?: string;
}>) {
    return (
        <div className="h-full w-full">
            <div className="mx-6 h-full">
                <a href={link} target="_blank">
                    <div className="flex h-full flex-col overflow-hidden rounded-md">
                        <div className="flex h-9/12 w-full justify-center">
                            <div className="relative h-full w-full overflow-hidden rounded-lg">
                                <Image
                                    src={imageURL}
                                    alt={imageAlt}
                                    objectFit="cover"
                                    fill
                                />
                            </div>
                        </div>
                        <div className="mt-6 flex flex-1 flex-col justify-between">
                            <div className="flex justify-center">
                                <p
                                    className={clsx(
                                        "text-palette-yellow text-2xl",
                                        "yellow-text-glow",
                                    )}
                                >
                                    {title}
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <p className="text-palette-white text-xl">
                                    {description}
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}
