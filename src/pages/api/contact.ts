import type { APIRoute } from "astro";

export const post: APIRoute = async ({ request }) => {
    const errors = {name: "", message: "", success: false}
    const data = await request.formData();
    const name = data.get("name");
    const message = data.get("message");
    // Validate the data
    if (typeof name !== "string" || name.length < 1) {
        errors.name += "Please enter your name.";
    }
    if (typeof message !== "string" || message.length < 1) {
        errors.message += "Please enter a message.";
    }
    if (errors.name || errors.message) {
        return new Response(
        JSON.stringify(errors),
        { status: 400 }
        );
    }

    errors.success = true;
    return new Response(
        JSON.stringify(errors),
        { status: 200 }
    );
};