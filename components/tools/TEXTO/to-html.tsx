import { useState, useEffect } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { BiCopy, BiRefresh, BiEdit } from "react-icons/bi";
import textToHtml from './utils/textToHtml';

function Tool() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [encode, setEncode] = useState(true);
  const [tabSize, setTabSize] = useState(2);
  const [useSpace, setUseSpace] = useState(true);
  const [showResult, setShowResult] = useState(false);

  const handleConverter = () => {
    setResult(textToHtml(text, encode, tabSize, useSpace));
  }

  useEffect(() => {
    if( showResult ){
      handleConverter();
    }
  }, [encode, tabSize, useSpace])

  return (<>
    <Box sx={{padding: '30px 0'}}>
      
      {!showResult && (<>
        <TextField value={text} label="Texto original" multiline minRows={4} onChange={(event) => setText(event?.target.value)} fullWidth />
        
        <Stack spacing={2} direction="row" sx={{mt: 2}}>
          <Button color="primary" disabled={!text} variant="contained" onClick={() => {
            setShowResult(true);
            handleConverter();
          }} disableElevation startIcon={<BiRefresh />}>Converter para HTML</Button>
        </Stack>

      </>)}


      {showResult && (<>
      <Box sx={{display: 'flex', mb: 2, mt: 2, flexWrap: 'wrap', gap: '8px'}}>

        <FormGroup>
          <Tooltip title={'Os caractéres especiais serão convertidos para códigos HTML especiais.'}>
          <FormControlLabel control={<Switch checked={encode} onChange={(event) => {
            setEncode(event?.target.checked);
          }} />} label="Encodar caractéres" />
          </Tooltip>
        </FormGroup>


        <TextField
          select
          value={tabSize}
          size="small"
          onChange={(event) => {
            let _tabsize:number = +(event?.target?.value) || 2;
            setTabSize(_tabsize);
          }}
        >
        {[1,2,3,4].map((option) => (
          <MenuItem key={option} value={option}>
            {option} {useSpace ? 'Espaço(s)' : 'Tab(s)'}
          </MenuItem>
        ))}
        </TextField>

        <FormGroup>
          <Tooltip title={'Ao invés de Tab será usado Espaços para identação do html.'}>
          <FormControlLabel control={<Switch checked={useSpace} onChange={(event) => {
            setUseSpace(event?.target.checked);
          }} />} label="Usar espaços" />
          </Tooltip>
        </FormGroup>

      </Box>


      <TextField value={result} label="Resultado em HTML" multiline inputProps={{readOnly: true}} fullWidth />


      <Stack spacing={2} direction="row" sx={{mt: 2, mb: 2}}>
        <Button color="primary" variant="contained" onClick={() => setShowResult(false)} disableElevation startIcon={<BiEdit />}>Editar</Button>
        <CopyToClipboard text={result}>
          <Button color="primary" variant="outlined" disableElevation startIcon={<BiCopy />}>Copiar</Button>
        </CopyToClipboard>
      </Stack>
      </>)}

    </Box>
  </>)
};

export default Tool;
