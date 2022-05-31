import { Box } from '@mui/system';
import type { NextPage } from 'next'
import Head from 'next/head'
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Error from 'next/error'
import SiteBreadcrumbs from '@components/sitebreadcrumbs';
import Alert from '@mui/material/Alert';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import db from '@lib/db';
import formatDate from 'utils/formatDate';
import NoSsr from '@mui/base/NoSsr';
import { BiCheckCircle } from 'react-icons/bi';
import {Adsense} from '@ctrl/react-adsense';
import { FAQPage } from 'schema-dts';
import { JsonLd } from "react-schemaorg";

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
          <title>{pageData.tool.seo_title || pageData.tool.title}</title>
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
            <h1>{pageData.tool.title}</h1>
            <small>Última atualização: {formatDate(new Date(pageData.tool.updatedAt), 'DD/MM/YYYY HH:mm')}</small>


            <Adsense
                key={'currentPath'}
                client='ca-pub-5396947550532993'
                slot='4037548675'
                style={{ display: 'block' }}
                layout='in-article'
                format='fluid'
              />

            <NoSsr>

              <Box sx={{ mt: 2}}>
                
                <Paper sx={{ p: 2 }}>
                <p>FERRAMENTA AQUI</p>
                </Paper>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px'}}>
                  <p>Essa ferramenta foi útil? </p>
                  <Button variant="contained" size="small" color="success" startIcon={<BiCheckCircle />}>Sim</Button>
                </Box>
              </Box>
            </NoSsr>
            
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


            {pageData.tool.content && (<Paper elevation={0} sx={{ p: 2, mt: 2}}>
              <h2>Sobre</h2>
              <div><p>{pageData.tool.content}</p></div>
            </Paper>)}

            {pageData.tool.instructions && (<Paper elevation={0} sx={{ p: 2, mt: 2}}>
              <h2>Instruções</h2>
              <div>
                <ul>
                {pageData.tool.instructions.split('; ').map((item: string, index: number) => (
                  <li key={index}><p>{item}</p></li>
                ))}
                </ul>
              </div>
            </Paper>)}

            {pageData.tool.questions && pageData.tool.questions.length > 0 && (<Paper elevation={0} sx={{ p: 2, mt: 2}}>
              <h2>Perguntas de {pageData?.tool?.title}</h2>
              {pageData.tool.questions.map((item: any, index: number) => (
                <div key={index}>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
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
            </Paper>)}

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
