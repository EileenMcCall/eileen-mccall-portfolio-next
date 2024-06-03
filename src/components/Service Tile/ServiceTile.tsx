import styles from "./ServiceTile.module.css";

type PropTypes = {
    title: string; 
    icon?: string; 
    description: string;
}

export default function ServiceTile ({ title, icon, description }: PropTypes) {
    return (
        <article className={styles.tile}>
            <h4 className={styles.title}>{ title }</h4>
            <p className={styles.description}>{ description }</p>
        </article>
    );
}