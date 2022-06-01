import { useState, useEffect } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import generateCPF, {maskCPF, unmaskCPF} from './utils'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { BiCopy, BiRefresh, BiCheckCircle } from "react-icons/bi";
import Link from 'next/link';

function Tool() {
  const [masked, setMasked] = useState(true);
  const [cpf, setCPF] = useState('');
  

  return (<>
    <Box sx={{maxWidth: 400, margin: '0 auto', padding: '30px 0'}}>
      <TextField 
        value={masked ? maskCPF(cpf) : unmaskCPF(cpf) } fullWidth InputProps={{ readOnly: true }}
      />
        <FormGroup>
          <FormControlLabel control={<Switch checked={masked} onChange={(event) => {
            setMasked(event?.target.checked);
          }} />} label="Com Máscara" />
        </FormGroup>
        <Stack spacing={2} direction="row" sx={{mt: 2}}>
        <Button color="primary" variant="contained" onClick={() => setCPF(generateCPF())} disableElevation startIcon={<BiRefresh />}>Gerar CPF</Button>
        <CopyToClipboard text={masked ? maskCPF(cpf) : unmaskCPF(cpf) }>
          <Button color="primary" variant="outlined" disabled={!cpf} disableElevation startIcon={<BiCopy />}>Copiar</Button>
        </CopyToClipboard>
        <Link href={`/validar-cpf?cpf=${cpf}`} passHref>
          <Button color="success" disabled={!cpf} disableElevation startIcon={<BiCheckCircle />}>Validar</Button>
        </Link>
      </Stack>
    </Box>
  </>)
};

export default Tool;
