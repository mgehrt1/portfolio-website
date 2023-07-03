import type { APIRoute } from "astro";
import { XataClient } from "../../xata";
const xata = new XataClient({ apiKey: import.meta.env.XATA_API_KEY });

export const post: APIRoute = async ({ request }) => {
    const errors = {firstName: "", lastName: "", email: "", message: "", success: false}
    const data = await request.formData();
    const firstName = data.get("firstname");
    const lastName = data.get("lastname");
    const email = data.get("email");
    const message = data.get("message");
    // Validate the data
    if (typeof firstName !== "string" || firstName.length < 1) {
        errors.firstName += "Please enter your first name.";
    }
    if (typeof lastName !== "string" || lastName.length < 1) {
        errors.lastName += "Please enter your last name.";
    }
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (typeof email !== "string" || email.length < 1 || !emailRegex.test(email)) {
        errors.email += "Please enter a valid email.";
    }
    if (typeof message !== "string" || message.length < 1) {
        errors.message += "Please enter a message.";
    }
    if (errors.firstName || errors.lastName || errors.email || errors.message) {
        return new Response(
        JSON.stringify(errors),
        { status: 400 }
        );
    }

    await xata.db.Contact.create({
          firstName: firstName as string,
          lastName: lastName as string,
          email: email as string,
          message: message as string,
        });

    errors.success = true;
    return new Response(
        JSON.stringify(errors),
        { status: 200 }
    );
};