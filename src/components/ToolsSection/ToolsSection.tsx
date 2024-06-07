import Image from "next/image";
import styles from "./ToolsSection.module.css";

export default function ToolsSection () {
    const imageHeight = 50;
    var tools = [
        { alt: "JavaScript", src: "javascript.svg" },
        { alt: "TypeScript", src: "typescript.svg" },
        { alt: "HTML", src: "html.svg" },
        { alt: "CSS", src: "css.svg" },
        { alt: "React.js", src: "react.svg" },
        { alt: "Angular", src: "angular.svg" },
        { alt: "Next", src: "next-dark.svg" },
        { alt: "Remix", src: "remix-icon.svg" },
        { alt: "Astro", src: "astro.svg" },
        { alt: "Node.js", src: "node-icon.svg" },
        { alt: "Prisma", src: "prisma.svg" },
        { alt: "Jest", src: "jest.svg" },
        { alt: "MongoDB", src: "mongo.svg" },
        { alt: "Figma", src: "figma.svg" },
    ];

    return (
        <section>
            <h2>Tools</h2>
            <p>Here are the tools that I use for my web development projects:</p>
            <ul className={styles.tools__list}>
                {
                    tools.map(({ alt, src }, i) => (
                        <li className={styles.tools__item} key={i}>
                            <Image
                                alt={alt} 
                                height={imageHeight} 
                                width={imageHeight} 
                                src={src} 
                            />
                        </li>
                    ))
                }
            </ul>
        </section>
    );
}