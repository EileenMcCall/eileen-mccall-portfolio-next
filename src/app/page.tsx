import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm/ContactForm'
import GitHubLogo from '@/components/icons/GithubLogo';
import MastodonLogo from '@/components/icons/MastodonLogo';
import LinkedinLogo from '@/components/icons/LinkedInLogo';

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
            <section className={styles.intro}>
                <div className={styles.intro__container}>
                    <Image style={{borderRadius: "5px"}} width={250} height={250} alt="headshot" src="/headshot.png" className={styles.intro__image}/>
                    <div className={styles.intro__text}>
                        <h2>
                            <span className={styles.intro__intro}>
                                Hello! I'm
                            </span>
                            <span className={styles.intro__name}>
                                Eibhlìn NicColla
                            </span>
                        </h2>
                        <ul className={styles.intro__socials}>
                            <li>
                            <a href="https://github.com/EibhlinNicColla" rel="noopener noreferrer" target="_blank">
                                <GitHubLogo/>
                            </a>
                            </li>
                            <li>
                            <a href="https://tech.lgbt/@eibhlinniccolla" rel="noopener noreferrer" target="_blank">
                                <MastodonLogo />
                            </a>
                            </li>
                            <li>
                            <a href="https://www.linkedin.com/in/eileenmccall/" rel="noopener noreferrer" target="_blank">
                                <LinkedinLogo />
                            </a>
                            </li>
                        </ul>
                    </div>

                </div>
                <p style={{maxWidth: "575px", marginBottom: "24px", lineHeight: "35px"}}>I'm an American-Canadian web developer, Gaelic learner, and musician based out of Cape Breton, Nova Scotia. I'm out to help small businesses and endangered langauges thrive through quality software, apps, and websites.</p>
                <p style={{maxWidth: "575px"}}></p>
            </section>
            {/* <section>
                <h3>Tools</h3>
                <p>Here are the tools that I use for my web development projects:</p>
                <ul className={styles.toolsList}>
                    {
                        tools.map(({ alt, src }, i) => (
                            <li className="tool" key={i}><Image alt={alt} height={imageHeight} width={imageHeight} src={src} /></li>
                        ))
                    }
                </ul>
            </section>
            <ContactForm /> */}
        </main>
    )
}
