const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (_email, name) => {
    sgMail.send({
        to: 'phablovilasboas25@gmail.com',
        from: 'phablovilasboas25@gmail.com',
        subject: 'Thanks for joining in!',
        text: `
            Welcome to the app, ${name}. Let me know how you get along with the app.
        `,
        //html: '',
    });    
};

const sendCancelationEmail = (_email, name) => {
    sgMail.send({
        to: 'phablovilasboas25@gmail.com',
        from: 'phablovilasboas25@gmail.com',
        subject: 'Sorry to see you go',
        text: `Goodbye, ${name}. I Hope to see you back sometime soon.`
    });
};

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
};



