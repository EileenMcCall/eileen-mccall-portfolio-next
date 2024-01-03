export default function ContactForm() {
    return (
        <section>
            <h3>Contact me:</h3>
            <p>Interested in working with me? Use the form below!</p>
            <form>
                <label htmlFor="email">Email</label>
                <input name="email" type="email" />
                <label htmlFor="subject">Subject</label>
                <input name="subject" type="text" />
                <label htmlFor="message">Message</label>
                <textarea name="message"></textarea>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}