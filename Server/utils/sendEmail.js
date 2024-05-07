const nodeMailer = require('nodemailer');

const sendEmail = async (options) => {
    const transporter = nodeMailer.createTransport({
        service: 'Gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        },
        authMethod: 'LOGIN',
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: options.to,
        subject: options.subject,
        text: options.message
    };

    await transporter.sendMail(mailOptions);
}

module.exports = sendEmail;