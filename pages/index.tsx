import type { NextPage } from 'next'
import Head from 'next/head'
import SiteBreadcrumbs from '@components/sitebreadcrumbs'
import { Container, Box, Paper } from "@mui/material"
import { Link as MUILink } from '@mui/material';
import Link from 'next/link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

import db from '@lib/db';

interface Props {
  subpages: subpages[]
}

type subpages = {
  title: string,
  slug: string  
}

const Page: NextPage<Props> = ({ subpages }) => {
  return (
    <>
      <Container>
        <Box>
          <h2>
            Ferramentas do Gerador de Tudo
          </h2>

          <Paper sx={{mt: 2}}>

            <List component="nav" aria-label="Ferramentas">
            {subpages && subpages.map( (subpage) => (
            <ListItem key={`tool-${subpage.slug}`} disablePadding>
              <Link href={ `/tool/${subpage.slug}` } passHref>
                <ListItemButton component={MUILink}>
                  <ListItemText primary={subpage.title} />
                </ListItemButton>
              </Link>
            </ListItem>
            ))}
            </List>
          </Paper>
        </Box>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const subpages = await db.tool.findMany({ select: { title: true, slug: true }});

  return {
    props: { 
      subpages: subpages || []
    },
  }
}


export default Page
