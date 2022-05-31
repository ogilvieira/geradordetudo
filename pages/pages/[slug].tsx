import { Box } from '@mui/system';
import type { NextPage } from 'next'
import Head from 'next/head'
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Error from 'next/error'
import SiteBreadcrumbs from '@components/sitebreadcrumbs';
import db from '@lib/db';

interface Props {
  errorCode: number,
  pageData: any
}

const PageDetail: NextPage<Props> = ({ errorCode, pageData }) => {

  if (errorCode) {
    return <Error statusCode={errorCode} />
  }
  
  return (<>
      {pageData && (<div>
        <Head>
          <title>{pageData.title}</title>
          <meta name="description" content={pageData.description} />
        </Head>

        <SiteBreadcrumbs links={[
          {
            title: "Páginas",
            path: "/pages"
          },
          {
            title: pageData.title,
            path: `/pages/${pageData.slug}`
          }
        ]}/>

        <Container>
          <Box>
            <h1>{pageData.title}</h1>

            <Paper sx={{ p: 2, mt: 2}}>
              <div dangerouslySetInnerHTML={{ __html: pageData.content }}></div>
            </Paper>
          </Box>
        </Container>
        </div>)}
  </>)
}


export async function getStaticPaths() {
  const q = await db.pages.findMany({ select: { slug: true }});
  const paths: StaticPathParams[] = [];

  q.forEach((a: any) => {
    paths.push({ params: { slug: a.slug }})
  });

  return {
    paths: paths,
    fallback: true // false or 'blocking'
  };
}

type StaticPathParams = {
  params: {
    slug: string
  } 
}

export async function getStaticProps({ params } : StaticPathParams) {
  const pageData = await db.pages.findUnique({ select: { title: true, slug: true, description: true, content: true }, where: { slug: params.slug }});
  const errorCode = pageData ? false : 404;

  if(errorCode) {
    return {
      props: {
        errorCode,
        pageData: null
      }
    }
  }  

  return {
    props: {
      errorCode,
      pageData
    }
  }
}



export default PageDetail
