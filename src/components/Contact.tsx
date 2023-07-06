import { useState } from "react";

export default function Contact() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [nameError, setNameError] = useState("");
    const [messageError, setMessageError] = useState("");
    const [success, setSuccess] = useState(false);

    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const response = await fetch("/api/contact", {
            method: "POST",
            body: formData,
        });
        const data = await response.json();
        if (data.success) {
            const subject = 'Contact Form Submission';
            const body = `${message}\n\n- ${name}`;
        
            const mailtoLink = `mailto:matthewagehrt@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoLink;

            setName("");
            setMessage("");
            setNameError("");
            setMessageError("");
            setSuccess(true);
        } else {
            data.name ? setNameError(data.name) : setNameError("");
            data.message ? setMessageError(data.message) : setMessageError("");
        }
    }

    return (
        <section id="contact" className="flex flex-col items-center mb-80 pt-12 scroll-mt-24">
            <h2 className="mt-5 text-teal text-2xl">Contact</h2>
            <form onSubmit={submit} action="#contact" method="POST" className="flex flex-col px-4 mt-5 w-full">
                <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="bg-light-blue text-white rounded-2xl w-full h-16 pl-3" disabled={success} />
                <label className="pl-3">{nameError && <p className="text-red opacity-80">{nameError}</p>}</label>
                <textarea name="message" placeholder="Message" rows={10} value={message} onChange={(e) => setMessage(e.target.value)} className="bg-light-blue text-white rounded-2xl w-full pl-3 pt-3 mt-3 resize-none" disabled={success}></textarea>
                <label className="pl-3">{messageError && <p className="text-red opacity-80">{messageError}</p>}</label>
                <div className="flex justify-end">
                    {!success && <input type="submit" value="Contact Me" className="flex justify-center items-center bg-pink-400 opacity-80 text-white rounded-2xl w-1/3 h-10 mt-3 text-lg cursor-pointer" />}
                    {success && <div className="flex justify-center items-center bg-lime-600 opacity-80 text-white rounded-2xl w-full h-10 mt-3 text-lg">Thank you!</div>}
                </div>
            </form>
        </section>
    );
}