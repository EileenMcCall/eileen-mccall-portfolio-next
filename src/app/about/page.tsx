import Image from "next/image";
import styles from "./AboutPage.module.css"

export default function About () {
    return (
        <>
            <h2>Hey! I'm Eileen <i className={styles.pronouns}>She/Her</i>&nbsp; :)</h2>

            <p>I'm a self-taught fullstack-frontend software engineer. I've been doing web development professionally since 2017.</p>
            <p>In my spare time I like learning languages, playing the mandolin, and fiber arts.</p>
            <p>Also here's a picture of my dog, Obi:</p>
            <Image
                src="/obi-cropped.png"
                height={650}
                width={1000} 
                style={{width: "100%", height: "auto" }}
                alt="A small white dog with a big smile on his face"
            />

            <h3>We Write Code</h3>
            <p>I got my first big break in 2017 when I was lucky enough to be brought on board as a junior developer at We Write Code, a software development company based out of Des Moines, IA. </p>
            <figure>
                <Image 
                    height={500}
                    width={1000} 
                    src="/wwc-team.jpg" 
                    alt="Me with the We Write Code team" 
                    style={{width: "100%", height: "500px" }}
                />
                  <figcaption>The We Write Code gang and I circa 2019, I miss these goofballs :')</figcaption>
            </figure>

        </>
    );
}