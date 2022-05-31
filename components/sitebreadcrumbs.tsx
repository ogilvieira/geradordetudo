import Divider from '@mui/material/Divider';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { BiHome } from "react-icons/bi";
import { Link as MUILink } from '@mui/material';
import Link from 'next/link'

function SiteBreadcrumbs(prop: { links: BreadcrumbLink[] }) {

  return (<>
  <Breadcrumbs sx={{ p: 2 }} maxItems={3} aria-label="breadcrumb">
    <Link href="/" passHref>
      <MUILink underline="hover" color="primary">
        <BiHome/>
      </MUILink>
    </Link>

    {prop.links && prop.links.map( (link, index) => (<Link
      key={index}
      href={link.path}
      passHref
    >
      <MUILink underline={index == prop.links.length-1 ? "always" : "hover"} color="secondary">
      {link.title}
      </MUILink>
    </Link>))}
    </Breadcrumbs>
  <Divider/>
  </>)
};

type BreadcrumbLink = {
  title: string;
  path: string;
};

SiteBreadcrumbs.defaultProps = {
  links: []
}

export default SiteBreadcrumbs;
