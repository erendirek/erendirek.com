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
            <div className="mx-2 h-full lg:mx-6">
                <a href={link} target="_blank">
                    <div className="flex h-full flex-col overflow-hidden rounded-md">
                        <div className="flex w-full justify-center">
                            <div className="relative aspect-auto w-full overflow-hidden rounded-lg">
                                <Image
                                    src={imageURL}
                                    alt={imageAlt}
                                    width={2048}
                                    height={2048}
                                    className="h-auto w-full"
                                />
                            </div>
                        </div>
                        <div className="mt-3 flex flex-1 flex-col justify-start">
                            <div className="flex justify-center">
                                <p
                                    className={clsx(
                                        "text-palette-yellow text-center text-xl md:text-2xl",
                                        "yellow-text-glow",
                                    )}
                                >
                                    {title}
                                </p>
                            </div>
                            <div className="mt-2 flex justify-center">
                                <p className="text-palette-white text-center text-lg md:text-xl">
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
