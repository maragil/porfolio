import { Resend } from 'resend';

const resend = new Resend('re_TNRMGzTg_K2mwtq2NDoGFedzgnY6v26qY');

(async function() {
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'Hello World',
      html: '<strong>It works!</strong>'
    });

    console.log(data);
  } catch (error) {
    console.error(error);
  }
})();

// resend.emails.send({
//   from: 'onboarding@resend.dev',
//   to: 'araujomaria84@gmail.com',
//   subject: 'Hello World',
//   html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
// });

