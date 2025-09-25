import nodemailer from 'nodemailer';

export async function sendRegistrationEmail(email: string, username: string) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'aetherpulse.one@gmail.com',
      pass: process.env.GMAIL_PASS, // Gmail app password
    },
  });

  const mailOptions = {
    from: '"BodySync - AetherPulse" <aetherpulse.one@gmail.com>',
    to: email,
    subject: 'Welcome to BodySync!',
    html: `
      <h1>Welcome, ${username}!</h1>
      <p>Thanks for registering with BodySync.</p>
      <p>Your journey to total sync starts now!</p>
      <p>If you need any support, you can reply directly to this email — we’re here to help.</p>
      <p>— Team AetherPulse</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent:', info.response);
  } catch (error) {
    console.error('❌ Error sending email:', error);
  }
}
