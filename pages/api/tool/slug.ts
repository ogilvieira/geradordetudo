// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../lib/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const slug: string = req.query.slug[0] || '';

  const tool = db.tool.findUnique({ where: { slug: slug }});

  res.setHeader('Cache-Control', 's-maxage=86400')
  res.status(200).json(tool)
}
