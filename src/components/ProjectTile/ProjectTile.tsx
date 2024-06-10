import Link from "next/link";
import styles from "./ProjectTile.module.css";

export default function ProjectTile ({ title, description, link }: { title: string, description: string, link: string }) {
    return (
        <article className={styles.tile}>
            <h3>{ title }</h3>
            <p>{ description }</p>
            <Link href={ link }>See more</Link>
        </article>
    );
}
