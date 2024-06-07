import formStyles from "@styles/forms.module.css";

export default function ContactForm() {
    return (
        <section>
            <h2>Contact me:</h2>
            <p>Are you a Gaelic speaker/learner, small business, or not-for-profit organization based in Nova Scotia? Want to work with me? Use the form below and tell me about your project and I'll be happy to get back to you!</p>
            <form>
                <div className={formStyles.form__group}>
                    <label className={formStyles.form__label} htmlFor="email">Email</label>
                    <input className={formStyles.form__input} name="email" type="email" required />
                </div>
                <div className={formStyles.form__group}>
                    <label className={formStyles.form__label} htmlFor="subject">Subject</label>
                    <input className={formStyles.form__input} name="subject" type="text" required />
                </div>
                <div className={formStyles.form__group}>
                    <label className={formStyles.form__label} htmlFor="message">Message</label>
                    <textarea className={formStyles.form__input} name="message" required></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}