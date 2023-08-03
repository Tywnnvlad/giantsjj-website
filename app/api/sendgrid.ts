import sendgrid from '@sendgrid/mail';
import type { NextApiRequest, NextApiResponse } from 'next';
import { stringify } from 'querystring';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

type Data = {
	message: string;
};

interface emailstuff {
	name: string;
	email: string;
	message: string;
}

async function sendEmail(req: NextApiRequest, res: NextApiResponse<Data>) {
	if (req.method === 'POST') {
		// idk what this is for maybe body?
		const {
			name,
			email,
			message,
		}: { name: string; email: string; message: string } = req.body;

		// setting data
		const data = {
			to: 'gred_cal@yahoo.com',
			from: 'gred_cal@yahoo.com',
			subject: `${req.body.subject}`,
			html: `<div>Hello World</div>`,
		};

		try {
			await sendgrid.send(data);
			res.status(200).json({ message: 'Message has been sent succesfully' });
			console.log('msg sent lmao');
		} catch (error) {
			return res
				.status(500)
				.json({ message: `Problem sending the message ${err}` });
		}
	}
}
export default sendEmail;
