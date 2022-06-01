import { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import generateCNPJ, {maskCNPJ, unmaskCNPJ} from './utils'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { BiCopy, BiRefresh, BiCheckCircle } from "react-icons/bi";
import Link from 'next/link';

function Tool() {
  const [masked, setMasked] = useState(true);
  const [cnpj, setCNPJ] = useState('');
  

  return (<>
    <Box sx={{maxWidth: 400, margin: '0 auto', padding: '30px 0'}}>
      <TextField 
        value={masked ? maskCNPJ(cnpj) : unmaskCNPJ(cnpj) } fullWidth InputProps={{ readOnly: true }}
      />
        <FormGroup>
          <FormControlLabel control={<Switch checked={masked} onChange={(event) => {
            setMasked(event?.target.checked);
          }} />} label="Com Máscara" />
        </FormGroup>
        <Stack spacing={2} direction="row" sx={{mt: 2, mb: 2}}>
        <Button color="primary" variant="contained" onClick={() => setCNPJ(generateCNPJ())} disableElevation startIcon={<BiRefresh />}>Gerar cnpj</Button>
        <CopyToClipboard text={masked ? maskCNPJ(cnpj) : unmaskCNPJ(cnpj) }>
          <Button color="primary" variant="outlined" disabled={!cnpj} disableElevation startIcon={<BiCopy />}>Copiar</Button>
        </CopyToClipboard>
      </Stack>
      <Link href={`/validar-cnpj?cnpj=${cnpj}`} passHref>
        <Button color="success" disabled={!cnpj} disableElevation startIcon={<BiCheckCircle />}>Validar</Button>
      </Link>
    </Box>
  </>)
};

export default Tool;
