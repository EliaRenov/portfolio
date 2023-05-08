import { useState, useRef } from 'react';
import './Contact.css';
import { useFormspark } from "@formspark/use-formspark";


const Contact = () => {

    const [submit, submitting] = useFormspark({
        formId: "Q8o6hnfT",
      });

    const [isSubmitted, setIsSubmitted] = useState(false);
    
   

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

     async function handleSubmit(e) {
        e.preventDefault()

        await submit({ name, email, message });

        setName('')
        setEmail('')
        setMessage('')
        setIsSubmitted(true)
        setTimeout(() => setIsSubmitted(false), 5000)
    }

    return (
        <section className="contact" id="contact">
            <h2 className="contact-header">
                Contact me
            </h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                
                <div className="form-control name" >
                <label htmlFor="name">
                    Name
                </label>
                <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="form-control email" >
                <label htmlFor="email">
                    Email
                </label>
                <input id="email" type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="form-control message" >
                <label htmlFor="message">
                    Message
                </label>
                <textarea id="message" rows="5" value={message} onInput={e => setMessage(e.target.value)
                } />
                </div>
                {isSubmitted && <button disabled={submitting} type="submit" className="submit-btn success">
                Submitted
                </button>}
                {!isSubmitted && <button disabled={submitting} type="submit" className="submit-btn">
                    Submit
                </button>}
                
                
            </form>
        </section>
    )
}

export default Contact