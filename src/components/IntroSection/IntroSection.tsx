import Image from "next/image";
import styles from "./IntroSection.module.css";
import GitHubLogo from "../icons/GithubLogo";
import MastodonLogo from "../icons/MastodonLogo";
import LinkedinLogo from "../icons/LinkedInLogo";
import EmailIcon from "../icons/EmailIcon";
import headshotPng from "@public/headshot.png";
import SocialIcons from "../SocialIcons/SocialIcons";

export default function IntroSection () {
    return (
        <section className={styles.intro}>
        <div className={styles.intro__container}>
            <Image
                alt="headshot" 
                src={headshotPng} 
                className={styles.intro__image}
            />
            <div className={styles.intro__text}>
                <h1>
                    <span className={styles.intro__intro}>
                        Hello! I'm
                    </span>
                    <span className={styles.intro__name}>
                        Eibhlìn<br />NicColla
                    </span>
                </h1>
                <SocialIcons />
            </div>
        </div>
        <p className={styles.intro__description}>I'm an American web developer, Gaelic learner, and soon-to-be Cape Bretoner. I'm out to help small businesses and endangered languages thrive through quality software, apps, and websites.</p>
        <p className={styles.intro__description}>I don't have a blog, so the best way to keep up with what I'm working on is by following me over on <a href="https://tech.lgbt/@eibhlinniccolla" rel="noopener noreferrer" target="_blank">Mastodon</a>.</p>
    </section>
    );
}
