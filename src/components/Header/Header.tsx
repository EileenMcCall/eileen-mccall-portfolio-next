import MainNav from "../MainNav/MainNav";
import styles from "./Header.module.css"

export default function Header () {
    return (
        <header className={styles.header}>
            <div>
                <h1>Eibhlìn NicColla</h1>
                <MainNav />
            </div>
        </header>
    );
}