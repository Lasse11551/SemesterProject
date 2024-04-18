import { Resend } from 'resend';

const resend = new Resend('re_c2ySjCCh_PZyA9ehN3C49t33t4FvgwtN6');

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'l.lysskov@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});