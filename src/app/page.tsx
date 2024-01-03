import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import MainNav from '@/components/MainNav/MainNav'
import ContactForm from '@/components/ContactForm/ContactForm'

export default function Home() {
  return (
    <main>
      <h2>Welcome! Bienvenue! Fàilte!</h2>
      <section>
        <h3>My name is Eileen</h3>
        <Image width={500} height={500} alt="headshot" src="/headshot.png" />
        <p></p>
      </section>
      <section>
        <h3>Tools</h3>
        <p>Here are the tools that I use for my web development projects:</p>
        <ul>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>React</li>
          <li>Angular</li>
          <li>Next.js</li>
          <li>Remix</li>
          <li>Astro</li>
          <li>Node.js</li>
          <li>Jest</li>
          <li>Prisma</li>
          <li>MongoDB</li>
          <li>Figma</li>
        </ul>
      </section>
      <section>
        <h3>Services:</h3>
        <p>Here are the services I offer:</p>
        <ul>
          <li>Web Application Development</li>
          <li>Website Design</li>
          <li>Code mentorship</li>
        </ul>
      </section>
      <ContactForm />
    </main>
  )
}
