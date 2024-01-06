import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import MainNav from '@/components/MainNav/MainNav'
import ContactForm from '@/components/ContactForm/ContactForm'

export default function Home() {
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
  ]

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
        <ul className={styles.toolsList}>
          {
            tools.map(({alt, src}, i) => (
              <li key={i}><Image alt={alt} height={imageHeight} width={imageHeight} src={src} /></li>
            ))
          }
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
