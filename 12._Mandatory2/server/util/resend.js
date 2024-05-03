import "dotenv/config";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_APIKEY)

export async function sendEmailSignup() {
    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: 'lassenodejseksamen@gmail.com',
        subject: "Welcome!",
        html: "<strong>You have now signed up!</strong>",
    })
}

