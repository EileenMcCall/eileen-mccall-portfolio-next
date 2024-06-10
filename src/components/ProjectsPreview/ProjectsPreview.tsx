import buttonStyles from "@styles/buttons.module.css";
import ProjectTile from "../ProjectTile/ProjectTile";

export default function ProjectsPreview () {
    return (
        <section>
            <h2>Some of my projects:</h2>
            <div style={{display: "flex", flexDirection: "column", alignItems: "stretch"}}>
                <ProjectTile 
                    title="Nextjs Portfolio Website" 
                    description="This is the website you're on right now! After taking a year off from software development, I decided that I needed to refresh my brand. Of course, this means a new website!" 
                    link="/projects/nextjs-portfolio-website"
                />
                <ProjectTile
                    title="Lute"
                    description="Lute is an e-reader designed specifically for langauge learners. While reading, users can add terms to their dictionary, hover over a word to see its definition, and add images to facilitate memorization."
                    link="/projects/lute"
                />
                <ProjectTile
                    title="Word Feud"
                    description="Word Feud is a web and mobile word game played between two players in a head-to-head spelling challenge. I'm developing it in collaboration with Michael Bauer of Akerbeltz Publishing."
                    link="/projects/word-feud"
                />
                <button className={buttonStyles.button__primary}>See all projects</button>
            </div>
        </section>
    );
}