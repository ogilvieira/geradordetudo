import { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import getHash from "@utils/getHash";

import Box from "@mui/material/Box";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { BiCopy, BiRefresh } from "react-icons/bi";
import CODIGUIN_DATA from './codiguin.data';

function Tool() {
  const [option, setOption] = useState(0);
  const [result, setResult] = useState('');

  const handleGen = () => {
    let hash = `${CODIGUIN_DATA[option].prefix}${getHash(7)}`.toUpperCase();
    setResult(hash);
  }

  useEffect(() => {
    handleGen();
  }, [option])

  return (<>
    <Box sx={{padding: '30px 0'}}>
      
    <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} sx={{mt: 2, mb: 2}}>
        <TextField
          select
          label="Item Desejado:"
          value={option}
          fullWidth
          onChange={(event) => {
            setOption(+event?.target?.value);
          }}
        >
        {CODIGUIN_DATA.map((option, index) => (
          <MenuItem key={index} value={index}>
            {option.name}
          </MenuItem>
        ))}
        </TextField>


      <TextField value={result} disabled={!result} label="Codiguin" multiline inputProps={{readOnly: true}} fullWidth />
    </Stack>


      <Stack spacing={2} direction="row" sx={{mt: 2, mb: 2}}>
        <Button color="primary" variant="contained" onClick={() => handleGen()} disableElevation startIcon={<BiRefresh />}>Gerar Outro</Button>
        <CopyToClipboard text={result}>
          <Button color="primary" variant="outlined" disableElevation startIcon={<BiCopy />}>Copiar</Button>
        </CopyToClipboard>
      </Stack>
    </Box>
  </>)
};

export default Tool;
