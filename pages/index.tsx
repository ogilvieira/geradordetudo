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
import Head from 'next/head'
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

  <Head>
    <title>Gerador de Tudo</title>
    <meta name="description" content="Ferramentas online gratuitas, geradores de cpf, conta bancária, pessoas, cnpj, cep, rg, validadores, encoders e muitas outras úteis para programadores." />
  </Head>

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
          <p>Ferramentas online gratuitas, geradores de cpf, conta bancária, pessoas, cnpj, cep, rg, validadores, encoders e muitas outras úteis para programadores.</p>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField type="search" fullWidth label="Buscar" color="secondary" onChange={(e) => {
                setTerms(e.target.value);
              }} />
            </Grid>

            {filtered && filtered.map( (subpage) => (
              <Grid item xs={12} md={4} key={`tool-${subpage.slug}`}>
                <Link href={`/${subpage.slug}`} passHref>
                  <MUILink color="primary" underline="none">
                    <Card>
                      <Box sx={{ display: 'flex'}}>
                        <CardMedia sx={{ width: 100, height: 100 }}>
                          <Image src={`/tool/${subpage.slug}.png`} alt={subpage.title} width="1080" height="1080"/>
                        </CardMedia>
                        <CardContent sx={{ width: `calc(100% - 100px)`, display: 'flex', alignItems: 'center', pb: 0}}>
                          <Typography variant="body1" component="h2">
                            {subpage.title}
                          </Typography>
                        </CardContent>
                      </Box>
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
  const subpages = await db.tool.findMany({ select: { title: true, slug: true, description: true }, where: { active: true }, orderBy: { title: 'asc' }});

  return {
    props: { 
      subpages: subpages || []
    },
  }
}


export default Page
