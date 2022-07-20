import { Box } from '@mui/system';
import type { NextPage } from 'next'
import Head from 'next/head'
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Error from 'next/error'
import SiteBreadcrumbs from '@components/sitebreadcrumbs';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import db from '@lib/db';
import { BiCheckCircle } from 'react-icons/bi';
// import {Adsense} from '@ctrl/react-adsense';
import { FAQPage } from 'schema-dts';
import { JsonLd } from "react-schemaorg";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ToolsLoader from '@components/toolsLoader';
import NoSsr from '@mui/material/NoSsr';
import Image from "next/image";

type StaticPageData = {
  tool?: any
}

interface Props {
  errorCode: number,
  pageData: StaticPageData
}

const ToolPage: NextPage<Props> = ({ errorCode, pageData }) => {

  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  return (<>
      {pageData && pageData.tool && (<div>
        <Head>
          <title>{pageData.tool.seo_name || pageData.tool.title}</title>
          <meta name="description" content={pageData.tool.seo_description || pageData.tool.description} />
        </Head>

        <SiteBreadcrumbs links={[
          {
            title: pageData.tool.title,
            path: `/${pageData.tool.slug}`
          }
        ]}/>


        <Container>
          <Box>
            <Box sx={{display: 'grid', gridTemplateColumns: '100px 1fr', alignItems: 'center', gap: '10px', mt: 2}}>
              <Image src={`/tool/${pageData.tool.slug}.jpg`} alt={pageData.tool.title} width="100" height="100"/>
              <h1 style={{ lineHeight: '1.2em', fontSize: '1.5em' }}>{pageData.tool.title}</h1>
            </Box>

            <Paper sx={{ mt: 2, p: 2}} elevation={0}>
              <NoSsr>
                <ToolsLoader slug={pageData.tool.slug}/>
              </NoSsr>
            </Paper>
            <Box sx={{ mt: 2}}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px'}}>
                <p>Essa ferramenta foi útil? </p>
                <Button variant="contained" size="small" color="success" startIcon={<BiCheckCircle />}>Sim</Button>
              </Box>
            </Box>
            
            {pageData.tool.tags && (<Box sx={{
              mt: 2,
              display: 'flex',
              justifyContent: 'start',
              flexWrap: 'wrap',
              gap: '8px',
              listStyle: 'none', }}>

              {pageData.tool.tags.split(';').map( (tag: string, index: number) => (<Chip key={`tag-${index}`} size="small" label={tag} />))}
            </Box>)}

            {pageData.tool.warning && (<Alert severity="warning" sx={{ mt: 2}}>{pageData.tool.warning}</Alert>)}


            {pageData.tool.content && (<Box sx={{ mt: 2}}>
              <h2>Sobre</h2>
              <Paper sx={{ p: 2}}>{pageData.tool.content}</Paper>
            </Box>)}

            {pageData.tool.instructions && (<Box sx={{ mt: 2}}>
              <h2>Instruções</h2>
              <Paper sx={{ p: 2 }} elevation={0}>
                <ul>
                {pageData.tool.instructions.split('; ').map((item: string, index: number) => (
                  <li key={index}><p>{item}</p></li>
                ))}
                </ul>
              </Paper>
            </Box>)}

            {pageData.tool.questions && pageData.tool.questions.length > 0 && (<Box sx={{ mt: 2}}>
              <h2>Perguntas de {pageData?.tool?.title}</h2>
              {pageData.tool.questions.map((item: any, index: number) => (
                <Accordion key={index}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography><strong>{item.title}</strong></Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                    {item.content}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
              { pageData.tool.questions && (<JsonLd<FAQPage>
                  item={{
                    '@context': 'https://schema.org',
                    '@type': 'FAQPage',
                    'mainEntity': pageData.tool.questions.map((q: { title: string, content: string }) => ({
                      "@type": "Question",
                      "name": q.title,
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": q.content
                      }}))
                    }}
                />)}
            </Box>)}

          </Box>
        </Container>
        </div>)}
  </>)
}

type StaticPathParams = {
  params: {
    slug: string
  } 
}


export async function getStaticPaths() {
  const q = await db.tool.findMany({ select: { slug: true }});
  const paths: StaticPathParams[] = [];

  q.forEach((a: any) => {
    paths.push({ params: { slug: a.slug }})
  });

  return {
    paths: paths,
    fallback: true // false or 'blocking'
  };
}

export async function getStaticProps({ params } : StaticPathParams) {
  
  let pageData:StaticPageData = {};

  const tool = await db.tool.findUnique({ where: { slug: params.slug }, include: { questions: {
    select: { title: true, content: true }
  } }});
  
  const errorCode = tool ? false : 404;

  if(errorCode) {
    return {
      props: {
        errorCode,
        pageData: null
      }
    }
  }

  pageData.tool = tool;

  return {
    props: {
      errorCode,
      pageData: pageData
    },
  }
}



export default ToolPage
