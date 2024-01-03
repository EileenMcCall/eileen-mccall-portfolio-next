import Link from "next/link";
import styles from "./MainNav.module.css";

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
        <li><a href="https://github.com/EileenMcCall" rel="noopener noreferrer" target="_blank">Github</a></li>
        <li><a href="https://tech.lgbt/@eileenmccall" rel="noopener noreferrer" target="_blank">Mastodon</a></li>
        <li><a href="https://www.linkedin.com/in/eileenmccall/" rel="noopener noreferrer" target="_blank">LinkedIn</a></li>
      </ul>
    </nav>
  );
}