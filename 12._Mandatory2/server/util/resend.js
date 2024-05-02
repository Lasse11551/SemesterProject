import "dotenv/config";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_APIKEY)

export async function sendEmail() {
    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: 'lassenodejseksamen@gmail.com',
        subject: "Hello World",
        html: "<strong>it works!</strong>",
    })
}

