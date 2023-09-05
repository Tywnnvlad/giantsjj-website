import sendgrid from "@sendgrid/mail";
import type { NextApiRequest, NextApiResponse } from "next";
import { stringify } from "querystring";

let SENDGRID_API_KEY: any = process.env.SENDGRID_API_KEY;

sendgrid.setApiKey(SENDGRID_API_KEY);

type Data = {
	message: string;
};

interface emailstuff {
	name: string;
	email: string;
	message: string;
}

async function sendEmail(req: NextApiRequest, res: NextApiResponse<Data>) {
	if (req.method === "GET") {
		return res.status(200);
	}
	if (req.method === "POST") {
		// setting data
		const data = {
			to: "gred_cal@yahoo.com",
			from: "giantsjiujitsu@proton.me",
			subject: `${req.body.subject}`,
			html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>

	  <div class="container" style="margin-left: 20px;margin-right: 20px;">
	  <h3>You've got a new mail from ${req.body.name}, their email is: ✉️${req.body.email} </h3>
	  <div style="font-size: 16px;">
	  <p>Message:</p>
	  <p>${req.body.comment}</p>
	  <br>
	  </div>
	  

	  </body>
      </html>`,
		};

		try {
			await sendgrid.send(data);
			res.status(200).json({ message: "Message has been sent succesfully" });
			console.log("msg sent lmao");
		} catch (error) {
			return res
				.status(500)
				.json({ message: `Problem sending the message ${error}` });
		}
	}
}
export default sendEmail;
// export default function handler(req: any, res: any) {
// 	res.status(200).json({ name: 'John Doe' });
// }
