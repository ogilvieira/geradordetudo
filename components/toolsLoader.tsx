import React from 'react'
import Alert from "@mui/material/Alert";

let GeradorCNPJ = React.lazy(() => import("./tools/gerador-cnpj"));

type ToolMap = {
  [key: string]: React.ComponentType
}

const TOOL_MAP: ToolMap = {
  'gerador-cnpj': GeradorCNPJ
}

function ToolsLoader({ slug } : {slug: string}) {
  console.log(slug);

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
