import { Resend } from 'resend';

const resend = new Resend('re_4F33emdW_9iUSMey34qAicp6Kd27aL1Np');


function sendEmail() {
    resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'lassenodejseksamen@gmail.com',
    subject: 'Hello World',
    html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
    });
}