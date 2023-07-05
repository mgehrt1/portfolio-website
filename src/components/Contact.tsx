import { useState, FormEvent } from "react";

export default function Contact() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [firstNameMessage, setFirstNameMessage] = useState("");
    const [lastNameMessage, setLastNameMessage] = useState("");
    const [emailMessage, setEmailMessage] = useState("");
    const [messageMessage, setMessageMessage] = useState("");
    const [success, setSuccess] = useState(false);
 

    async function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const response = await fetch("/api/contact", {
            method: "POST",
            body: formData,
        });
        const data = await response.json();
        if (data.success) {
            setFirstName("");
            setLastName("");
            setEmail("");
            setMessage("");
            setSuccess(true);
        }
        if (data.firstName) {
            setFirstNameMessage(data.firstName);
        } else if(firstNameMessage) {
            setFirstNameMessage("");
        }
        if (data.lastName) {
            setLastNameMessage(data.lastName);
        } else if(lastNameMessage) {
            setLastNameMessage("");
        }
        if (data.email) {
            setEmailMessage(data.email);
        } else if(emailMessage) {
            setEmailMessage("");
        }
        if (data.message) {
            setMessageMessage(data.message);
        } else if(messageMessage) {
            setMessageMessage("");
        }
    }

    return (
        <section id="contact" className="flex flex-col items-center mb-80 pt-12 scroll-mt-24">
            <h2 className="mt-5 text-teal text-2xl">Contact</h2>
            <form onSubmit={submit} action="#contact" method="POST" className="flex flex-col px-4 mt-5 w-full">
                <div className="flex w-full gap-3">
                    <input type="text" name="firstname" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="bg-light-blue text-white rounded-2xl w-full h-16 pl-3"/>
                    <input type="text" name="lastname" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} className="bg-light-blue text-white rounded-2xl w-full h-16 pl-3"/>
                </div>
                <div className="flex w-full gap-3">
                    <label className="w-full pl-3">{firstNameMessage && <p className="text-red opacity-80">{firstNameMessage}</p>}</label>
                    <label className="w-full pl-3">{lastNameMessage && <p className="text-red opacity-80">{lastNameMessage}</p>}</label>
                </div>
                <input type="text" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-light-blue text-white rounded-2xl w-full h-16 pl-3 mt-3"/>
                <label className="pl-3">{emailMessage && <p className="text-red opacity-80">{emailMessage}</p>}</label>
                <textarea name="message" placeholder="Message" rows={8} value={message} onChange={(e) => setMessage(e.target.value)} className="bg-light-blue text-white rounded-2xl w-full pl-3 pt-3 mt-3 resize-none"></textarea>
                <label className="pl-3">{messageMessage && <p className="text-red opacity-80">{messageMessage}</p>}</label>
                <div className="flex justify-end">
                    {!success && <input type="submit" name="submit" value="Send" className="bg-pink-400 opacity-80 text-white rounded-2xl w-1/4 h-10 mt-3 text-lg cursor-pointer"/>}
                    {success && <div className="bg-lime-600 opacity-80 text-white rounded-2xl w-full h-10 mt-3 text-lg flex justify-center items-center">Thanks!</div>}
                </div>
            </form>
        </section>
    );
}