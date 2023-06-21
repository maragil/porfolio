import { Resend } from 'resend';

const resend = new Resend('re_TNRMGzTg_K2mwtq2NDoGFedzgnY6v26qY');

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'araujomaria84@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});

