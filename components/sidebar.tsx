import { Fragment, useEffect, useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import List from '@mui/material/List';
import Link from 'next/link'
import { Link as MUILink } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import ListSubheader from "@mui/material/ListSubheader";

function Sidebar(props: { clickLink: Function, menuItems: any[] }) {
  return (
    <>
      <Toolbar />

      {props.menuItems && props.menuItems.map( (menu:any, index:number) => (
      <List onClick={() => props.clickLink && props.clickLink()} dense key={`menu-${index}`}>
        <Link href={menu.path} key={`menu-${index}`} passHref>
          <ListSubheader component={MUILink}>
            <span>{menu.title}</span>
          </ListSubheader>
        </Link>
        {menu?.items && menu.items.map((item:any, itemIndex:number) => (
          <Link href={item.path} key={`menu-${index}-${itemIndex}`} passHref>
            <ListItem disablePadding>
              <ListItemButton component="a" href={item.path}>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      ))}
    </>
  )
};

export default Sidebar;
