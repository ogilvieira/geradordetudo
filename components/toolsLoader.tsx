import React from 'react'

let Component = React.lazy(() => import("./tools/gerador-cnpj"));

function ToolsLoader({ slug } : {slug: string}) {
  console.log(slug);

  return (<>
    <React.Suspense fallback={<div>Carregando...</div>}>
      <Component />
    </React.Suspense>
  </>)
};

ToolsLoader.defaultProps = {
  slug: ''
}

export default ToolsLoader;
