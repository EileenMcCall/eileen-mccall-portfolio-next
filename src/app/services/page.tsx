import ContactForm from "@/components/ContactForm/ContactForm";

export default function Services () {
    return (
        <>
            <h2>Services</h2>
            <section>
                <h3>Web Development</h3>
                <p>I have been in software development for 7 years, I know what I'm doing, please hire me.</p>
            </section>
            <section>
                <h3>Website Design</h3>
                <p>I build websites too, who would have thought. Here are some examples:</p>
            </section>
            <section>
                <h3>Code Mentorship</h3>
                <p>Wanna learn how to code? Too much of a stupid son of a bitch to learn how to do it yourself? That's okay, I will help you.</p>
            </section>
            <ContactForm />
        </>
    );
}