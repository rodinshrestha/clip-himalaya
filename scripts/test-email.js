const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nimatasii@gmail.com',
    pass: 'zccr bdln okny qqhg',
  },
});

transporter
  .verify()
  .then(() => {
    console.log('SMTP connection OK, sending test email...');
    return transporter.sendMail({
      from: '"Clip Himalaya" <nimatasii@gmail.com>',
      to: 'tasinima818@gmail.com',
      subject: 'Test Email from Clip Himalaya',
      html: '<h2>This is a test</h2><p>If you see this, email notifications are working.</p>',
    });
  })
  .then((info) => {
    console.log('Email sent successfully!', info.messageId);
  })
  .catch((err) => {
    console.error('FAILED:', err.message);
  });
