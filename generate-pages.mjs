import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

const pagesToCreate = [
  {
    title: "Termos de Uso",
    slug: "termos-de-uso",
    description: "Termos de uso do Gerador de Tudo",
    content: `<p>
      Ao acessar ao <strong>Gerador de Tudo</strong> você deve estar ciente e de acordo com os termos de uso aqui estabelecidos. Caso não esteja de acordo com os termos, por favor, não utilize o site. O <strong>Gerador de Tudo</strong> se reserva ao direito de alterar a qualquer momento os termos de uso.
    </p>
    <hr>

    <h2>Licença de uso</h2>
    <p>
      O <strong>Gerador de Tudo</strong> garante acesso limitado apenas aos que estiverem de acordo e cumprirem os termos de uso. O <strong>Gerador de Tudo</strong> se reserva ao direito de limitar o acesso a qualquer um, a qualquer momento e por qualquer motivo.
    </p>
    <hr>

    <h2>Responsabilidade de uso</h2>
    <p>
      Todos os conteúdos deste site são apenas para fins informativos, não devem ser considerados completos, atualizados, e não se destinam a ser utilizado no lugar de uma consulta jurídica, médica, financeira, ou de qualquer outro profissional. Os conteúdos são fornecidos sem qualquer tipo de garantia. Todo e qualquer risco da utilização dos conteúdos é assumido pelo próprio usuário.
    </p>
    `
  },
  {
    title: "Política de Privacidade",
    slug: "politica-de-privacidade",
    description: "Política de Privacidade do Gerador de Tudo",
    content: `<p>
      O <strong>Gerador de Tudo</strong>, reconhece que a privacidade é importante.
    </p>
    <p>
      O <strong>Gerador de Tudo</strong> recebe e mantém informações de seu browser nos nossos servidores, incluindo seu IP ou endereço de referência e a página que você procurou. Além desta informação, a única outra informação pessoal que nós coletamos sobre você é a que nos for fornecida em nossos formulários online. O <strong>Gerador de Tudo</strong> será a única dententora desta informação. Esta informação somente será usada para nosso acompanhamento estatístico do número de visitas.
    </p>
    <p>
      O <strong>Gerador de Tudo</strong> usa cookies e outras tecnologias para melhorar a sua experiência on-line e para saber como você usa nossos serviços, com a finalidade de melhorar a qualidade deles.
    </p>
    <p>
      Usamos empresas de publicidade de terceiros para veicular anúncios durante a sua visita ao nosso website. Essas empresas podem usar informações (que não incluem o seu nome, endereço, endereço de e-mail ou número de telefone) sobre suas visitas a este e a outros websites a fim de exibir anúncios relacionados a produtos e serviços de seu interesse. Para obter mais informações sobre essa prática e saber como impedir que as empresas utilizem esses dados, clique aqui.
    </p>
    <h2>Anúncios Google:</h2>
    <p>
      O Google, como fornecedor de terceiros, utiliza cookies para exibir anúncios no seu site.
    </p>
    <p>
      Com o cookie DART, o Google pode exibir anúncios para seus usuários com base nas visitas feitas aos seus e a outros sites na Internet.
    </p>
    <p>
      Os usuários podem desativar o cookie DART visitando a Política de privacidade da rede de conteúdo e dos anúncios do Google.
    </p>
    <p>
      Esta política pode ser atualizada sem aviso prévio, portanto revise-a periodicamente para assegurar-se de estar informado sobre estas mudanças.
    </p>`
  }
]

const proms = [];

pagesToCreate.forEach(a => {
  proms.push(prisma.pages.create({ data: a }));
});

await Promise.all(proms); 
