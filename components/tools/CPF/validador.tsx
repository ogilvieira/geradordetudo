import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import {checkCPF, unmaskCPF} from './utils'
import { BiLinkExternal } from "react-icons/bi";
import Link from 'next/link';

function Tool() {
  const router = useRouter();
  const queryCPF:string = (typeof router.query.cpf === 'string') ? router.query.cpf : '';
  const [cpf, setCPF] = useState(unmaskCPF(queryCPF)); 
  const [valid, setValid] = useState(false);

  useEffect(() => {
    const checkValid = () => {
      setValid(checkCPF(cpf))
    };
    checkValid();
  }, [cpf])

  return (<>
    <Box sx={{maxWidth: 400, margin: '0 auto', padding: '30px 0'}}>
      <TextField value={cpf} label="Digite o CPF" inputProps={{ maxLength: 14 }} onChange={(event) => setCPF(unmaskCPF(event.target.value))} fullWidth/>

      {cpf && cpf.length && (<Alert color={valid ? 'success' : 'error'} sx={{mt: 2}}>Este é um CPF <strong>{valid ? 'Válido' : 'Inválido'}</strong></Alert>)}

      {cpf && cpf.length && (<Stack spacing={2} direction="row" sx={{mt: 2}}>
        <Link href="/gerador-cpf" passHref>
          <Button color="success" disableElevation endIcon={<BiLinkExternal />}>Gerador de CPF Válido</Button>
        </Link>
      </Stack>)}
    </Box>
  </>)
};

export default Tool;
