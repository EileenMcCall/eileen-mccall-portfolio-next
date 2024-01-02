import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Eileen McCall</h1>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><a rel="noopener noreferrer" target="_blank" href="/Resume.pdf">Resume</a></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
    
        <ul>
          <li><a href="https://github.com/EileenMcCall" rel="noopener noreferrer" target="_blank">Github</a></li>
          <li>Mastodon</li>
          <li><a href="https://www.linkedin.com/in/eileenmccall/" rel="noopener noreferrer" target="_blank">LinkedIn</a></li>
        </ul>
      </nav>
    </main>
  )
}
