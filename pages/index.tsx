import type { NextPage } from 'next'
import { Container, Box } from "@mui/material"
import { Link as MUILink } from '@mui/material';
import Link from "next/link";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import { useEffect, useState } from 'react';

import db from '@lib/db';

interface Props {
  subpages: subpages[]
}

type subpages = {
  title: string,
  slug: string,
  description: string
}

const Page: NextPage<Props> = ({ subpages }) => {

  const [terms, setTerms] = useState('');
  const [filtered, setFiltered] = useState(subpages);

  useEffect(() => {
    const filtered = subpages.filter(a => !!a.title.match(new RegExp(terms, 'gi')) || !!a.description.match(new RegExp(terms, 'gi')) );
    setFiltered(filtered);
  }, [terms])

  return (
    <>
      <Container>
        <Box>
          <h2>
            Ferramentas do Gerador de Tudo
          </h2>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField type="search" fullWidth label="Buscar" color="secondary" onChange={(e) => {
                setTerms(e.target.value);
              }} />
            </Grid>

            {filtered && filtered.map( (subpage) => (
              <Grid item xs={12} key={`tool-${subpage.slug}`}>
                <Link href={`/${subpage.slug}`} passHref>
                  <MUILink color="primary" underline="none">
                    <Card sx={{ display: {xs: 'block', sm: 'flex' }}}>
                      <CardMedia sx={{ width: { xs: 'auto', sm: 180 }, height: { xs: 'auto', sm: 180 } }}>
                        <Image src="/fallback.jpg" width="1080" height="1080"/>
                      </CardMedia>
                      <CardContent sx={{ width: {xs: '100%', sm: `calc(100% - 180px)`}}}>
                        <Typography gutterBottom variant="h5" component="div">
                          {subpage.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {subpage.description}
                        </Typography>
                      </CardContent>

                    </Card>
                  </MUILink>
                </Link>
              </Grid>
            ))}

            {!filtered.length && <Grid item xs={12}><Alert severity="warning" sx={{ mt: 2}}>Nenhum item encontrado...</Alert></Grid>}

          </Grid>
        </Box>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const subpages = await db.tool.findMany({ select: { title: true, slug: true, description: true }});

  return {
    props: { 
      subpages: subpages || []
    },
  }
}


export default Page
