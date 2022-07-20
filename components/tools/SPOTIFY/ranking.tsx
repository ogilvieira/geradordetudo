import { useState } from 'react';
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Graph from './pie/graph';
import { scopes, authEndpoint, clientId } from './spotify.data';
import getUrlHash from '@utils/getUrlHash';

function Tool() {
  const urlHash = getUrlHash();
  const queryTOKEN:string = (typeof urlHash.access_token === 'string') ? urlHash.access_token : '';
  const [token, setToken] = useState(queryTOKEN); 
  // window.location.hash = '';

  return (<>
    {!token && (<Box sx={{maxWidth: 400, margin: '0 auto', padding: '30px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>

      <Button color="success" variant="contained" size="large" disableElevation href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${window.location.origin}/spotify-ranking&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}>
        Login Spotify
      </Button>

      <p>Clique no botão acima para iniciar</p>
    </Box>)}
    {token && (<Graph token={token}/>)}
  </>)
};

export default Tool;
