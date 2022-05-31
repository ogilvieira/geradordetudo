// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import db from '@lib/db';

type Menu = {
  title: string,
  path: string,
  items?: Array<Menu>
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const menuItems:Array<Menu> = [];

  const queryTools = await db.tool.findMany({ select: { title: true, slug: true }, orderBy: { title: 'asc' }});

  const tools: Menu[] = queryTools.map((tool: any) => <Menu>{
    title: tool.title,
    path: `/tool/${tool.slug}`
  })
  
  menuItems.push({
    "title": "Ferramentas",
    "path": "/tool",
    "items" : tools
  })

  const queryPages = await db.pages.findMany({ select: { title: true, slug: true }, orderBy: { title: 'asc' }});
  const pages: Menu[] = queryPages.map((page: any) => <Menu>{
    title: page.title,
    path: `/pages/${page.slug}`
  })

  menuItems.push({
    "title": "Páginas",
    "path": "/pages",
    "items" : pages
  })

  res.setHeader('Cache-Control', 's-maxage=86400')
  res.status(200).json(menuItems)
}
