"use client"

import formStyles from "@styles/forms.module.css";
import buttonStyles from "@styles/buttons.module.css";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import Banner from "../Banner/Banner";
import SocialIcons from "../SocialIcons/SocialIcons";

export default function ContactForm() {
    var [ formData, setFormData ] = useState({
        email: "",
        subject: "",
        message: ""
    });

    var [ checkboxChecked, setCheckboxChekced ] = useState(false);

    var [ status, setStatus ] = useState({
        submitted: false,
        submitting: false,
        error: false
    });

    var buttonDisabled: boolean = status.submitting
        || !Boolean(formData.email)
        || !Boolean(formData.subject)
        || !Boolean(formData.message);

    return (
        <section>
            <h2>Contact me:</h2>
            <p>Are you a Gaelic speaker/learner, small business, or not-for-profit organization based in Nova Scotia? Want to work with me? Use the form below and tell me about your project and I'll be happy to get back to you!</p>

            { status.submitted
                ? <Banner 
                    type={status.error ? "error" : "primary"}
                    text={status.error
                        ? "Something went wrong! If the issue persists, feel free to create an issue on Github!" 
                        :"Thank you for your submission, I'll get back to you as soon as possible."
                    }
                />
                : (null)
            }

            <form className={formStyles.form} onSubmit={handleSubmit} style={{marginTop: "16px"}}>
                <div className={formStyles.form__group}>
                    <label className={formStyles.form__label} htmlFor="email">Email</label>
                    <input 
                        className={formStyles.form__input} 
                        name="email" 
                        onChange={handleChange} 
                        required
                        type="email" 
                        value={formData.email}
                    />
                </div>

                <div className={formStyles.form__group}>
                    <label className={formStyles.form__label} htmlFor="subject">Subject</label>
                    <input 
                        className={formStyles.form__input} 
                        name="subject" 
                        onChange={handleChange}
                        required 
                        type="text" 
                        value={formData.subject}
                    />
                </div>

                <div className={formStyles.form__group}>
                    <label className={formStyles.form__label} htmlFor="message">Message</label>
                    <textarea 
                        className={formStyles.form__input} 
                        name="message"
                        onChange={handleChange}
                        required
                        value={formData.message}
                    ></textarea>
                </div>

                <input 
                    type="checkbox" 
                    name="contactMe" 
                    checked={checkboxChecked}
                    style={{ display:"none !important" }}
                    tabIndex={-1}
                    autoComplete="off"
                    onChange={(e) => setCheckboxChekced(e.target.checked)}
                ></input>
                <button className={buttonStyles.button__primary} type="submit" disabled={buttonDisabled}>Submit</button>
            </form>
            <SocialIcons />
        </section>
    );

    function handleChange (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>): void {
        var { name, value } = event.target;

        console.log(name, value);

        setFormData(function (prev) {
            return {
                ...prev,
                [name]: value
            }
        });
    }

    async function handleSubmit (event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        if (checkboxChecked) {
            handleServerResponse(true);
            return;
        }

        setStatus({
            submitted: false,
            submitting: true,
            error: false
        });

        try {
            await axios({
                method: "POST",
                url: "https://formspree.io/f/xgegjbvb",
                data: formData
            })

            handleServerResponse(true);
        } catch (error) {
            handleServerResponse(false)
        }
    }

    function handleServerResponse (isOkay: boolean) {
        setStatus({
            submitting: false,
            submitted: true,
            error: isOkay
        })
    }
}