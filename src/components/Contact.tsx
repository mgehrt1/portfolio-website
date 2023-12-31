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

        const errors = { name: "", message: "", success: true };
        const name = formData.get("name");
        const message = formData.get("message");
        // Validate the data
        if (typeof name !== "string" || name.length < 1) {
            errors.name += "Please enter your name.";
            errors.success = false;
        }
        if (typeof message !== "string" || message.length < 1) {
            errors.message += "Please enter a message.";
            errors.success = false;
        }

        if (errors.success) {
            const subject = "Contact Form Submission";
            const body = `${message}\n\n- ${name}`;

            const mailtoLink = `mailto:matthewagehrt@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoLink;

            setName("");
            setMessage("");
            setNameError("");
            setMessageError("");
            setSuccess(true);
        } else {
            errors.name ? setNameError(errors.name) : setNameError("");
            errors.message ? setMessageError(errors.message) : setMessageError("");
        }
    };

    let buttonText: string = success ? "Thanks!" : "Contact Me";

    return (
        <section id="contact" className="flex flex-col items-center mb-80 pt-12 scroll-mt-24">
            <h2 className="mt-5 text-teal text-2xl">Contact</h2>
            <form onSubmit={submit} action="#contact" method="POST" className="flex flex-col px-4 mt-5 w-full">
                <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="bg-light-blue text-white rounded-2xl w-full h-16 pl-3" disabled={success} />
                <label className="pl-3">{nameError && <p className="text-red opacity-80">{nameError}</p>}</label>
                <textarea name="message" placeholder="Message" rows={10} value={message} onChange={(e) => setMessage(e.target.value)} className="bg-light-blue text-white rounded-2xl w-full pl-3 pt-3 mt-3 resize-none" disabled={success}></textarea>
                <label className="pl-3">{messageError && <p className="text-red opacity-80">{messageError}</p>}</label>
                <div className="flex justify-end">
                    <input type="submit" value={buttonText} className={`flex justify-center items-center opacity-80 text-white rounded-2xl h-10 mt-3 lg:text-lg md:text-lg text-md  ${success ? "transition-width duration-500 ease-in-out w-full bg-lime-600" : "w-1/3 bg-pink-400 cursor-pointer"}`} disabled={success} />
                </div>
            </form>
        </section>
    );
}
