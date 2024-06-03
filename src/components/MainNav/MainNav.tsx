import Link from "next/link";
import styles from "./MainNav.module.css";
import MastodonLogo from "../icons/MastodonLogo";
import GitHubLogo from "../icons/GithubLogo";
import LinkedinLogo from "../icons/LinkedInLogo";

export default function MainNav () {
  return (
    <nav className={styles.nav}>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><a rel="noopener noreferrer" target="_blank" href="/Resume.pdf">Resume</a></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        {/* <li><Link href="/blog">Blog</Link></li> */}
        <li><Link href="/about">About</Link></li>
      </ul>

      <ul>
        <li>
          <a href="https://github.com/EibhlinNicColla" rel="noopener noreferrer" target="_blank">
            <GitHubLogo />
          </a>
        </li>
        <li>
          <a href="https://tech.lgbt/@eileenmccall" rel="noopener noreferrer" target="_blank">
            <MastodonLogo />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/eileenmccall/" rel="noopener noreferrer" target="_blank">
            <LinkedinLogo />
          </a>
        </li>
      </ul>
    </nav>
  );
}