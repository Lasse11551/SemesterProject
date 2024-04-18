import { Resend } from 'resend';

const resend = new Resend(process.env.API_KEY);


function sendEmail() {
    resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'lassenodejseksamen@gmail.com',
    subject: 'Hello World',
    html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
    });
}