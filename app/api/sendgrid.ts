import sendgrid from '@sendgrid/mail';
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
	try {
		await sendgrid.send({
			to: 'gred_cal@yahoo.com',
			from: 'gred_cal@yahoo.com',
			subject: `${req.body.subject}`,
			html: `<div>Hello World</div>`,
		});
	} catch (error) {
		return res.status(error.statusCode || 500).json({ error: error.message });
	}
	return res.status(200).json({ error: '' });
}
export default sendEmail;
