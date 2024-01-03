import ContactForm from "@/components/ContactForm/ContactForm";

export default function Projects () {
    return (
        <>
            <h2>Projects:</h2>
            <p>Below you'll find a list of all of the projects I've worked on.</p>
            <ul>
                <li>
                    <article>
                        <h3>Next.js Portfolio Website</h3>
                        <p>The website you're currently visiting!</p>
                        <div>
                            <a>Keep reading</a>
                            <a>Github</a>
                        </div>
                    </article>
                </li>
            </ul>
            <ContactForm />
        </>
    );
}