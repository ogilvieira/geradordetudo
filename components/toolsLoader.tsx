import React from 'react'
import Alert from "@mui/material/Alert";

type ToolMap = {
  [key: string]: React.ComponentType
}

const TOOL_MAP: ToolMap = {
  'gerador-cpf': React.lazy(() => import("./tools/CPF/gerador")),
  'validar-cpf': React.lazy(() => import("./tools/CPF/validador")),
  'gerador-cnpj': React.lazy(() => import("./tools/CNPJ/gerador")),
  'validar-cnpj': React.lazy(() => import("./tools/CNPJ/validador")),
  'conversor-texto-html': React.lazy(() => import("./tools/TEXTO/to-html")),
  'gerador-codiguin': React.lazy(() => import("./tools/FREEFIRE/codiguin")),
}

function ToolsLoader({ slug } : {slug: string}) {

  let Component = TOOL_MAP[slug] || null;

  return (<>
    {Component && (<React.Suspense fallback={<div>Carregando...</div>}>
      <Component />
    </React.Suspense>)}
    {!Component && (
      <Alert severity="error" sx={{ mt: 2}}>Ferramenta indisponível por enquanto...</Alert>
    )}
  </>)
};

ToolsLoader.defaultProps = {
  slug: ''
}

export default ToolsLoader;
