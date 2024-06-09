import styles from "./SocialIcons.module.css";
import GitHubLogo from "../icons/GithubLogo";
import LinkedinLogo from "../icons/LinkedInLogo";
import MastodonLogo from "../icons/MastodonLogo";

export default function SocialIcons () {
    return (
        <ul className={styles.list}>
            <li>
                <a 
                    className="icon" 
                    href="https://github.com/EibhlinNicColla" 
                    rel="noopener noreferrer" 
                    target="_blank"
                >
                    <GitHubLogo />
                </a>
            </li>
            <li>
                <a 
                    className="icon" 
                    href="https://tech.lgbt/@eibhlinniccolla" 
                    rel="noopener noreferrer" 
                    target="_blank"
                >
                    <MastodonLogo />
                </a>
            </li>
            <li>
                <a 
                    className="icon" 
                    href="https://www.linkedin.com/in/eileenmccall/" 
                    rel="noopener noreferrer" 
                    target="_blank"
                >
                    <LinkedinLogo />
                </a>
            </li>
        </ul>
    );
}