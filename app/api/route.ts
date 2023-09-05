import type { NextApiRequest, NextApiResponse } from 'next';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
	return new Response('Hello World!', {
		status: 200,
	});
}
