import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import {checkCNPJ, unmaskCNPJ} from './utils'
import { BiLinkExternal } from "react-icons/bi";
import Link from 'next/link';

function Tool() {
  const router = useRouter();

  const [cnpj, setCNPJ] = useState(unmaskCNPJ(router.query?.cnpj || '')); 
  const [valid, setValid] = useState(false);

  useEffect(() => {
    setValid(checkCNPJ(cnpj))
  })

  return (<>
    <Box sx={{maxWidth: 400, margin: '0 auto', padding: '30px 0'}}>
      <TextField value={cnpj} label="Digite o CNPJ" inputProps={{ maxLength: 14 }} onChange={(event) => setCNPJ(unmaskCNPJ(event.target.value))} fullWidth/>

      {cnpj && cnpj.length && (<Alert color={valid ? 'success' : 'error'} sx={{mt: 2}}>Este é um CNPJ <strong>{valid ? 'Válido' : 'Inválido'}</strong></Alert>)}

      {cnpj && cnpj.length && (<Stack spacing={2} direction="row" sx={{mt: 2}}>
        <Link href="/gerador-cnpj" passHref>
          <Button color="success" disableElevation endIcon={<BiLinkExternal />}>Gerador de CNPJ Válido</Button>
        </Link>
      </Stack>)}
    </Box>
  </>)
};

export default Tool;
