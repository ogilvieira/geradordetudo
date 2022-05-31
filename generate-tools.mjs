import { PrismaClient } from '@prisma/client';
import { title } from 'process';

const prisma = new PrismaClient()

const toCreateArr = [
  {
    "key" : "gerador-cartao-credito",
    "type" : "GENERATOR",
    "name": "Gerador de Cartão de Crédito",
    "description" : "Utilize nosso gerador de cpf, basta clicar em \"Gerar CPF\" e pronto!!! Um novo número de CPF válido será gerado. Você ainda tem opção de colocar ou não os \"pontos\" entre os números.",
    "seo_name": "Gerador de Cartão de Crédito Online Grátis",
    "seo_description" : "Utilize nosso gerador de cpf, basta clicar em \"Gerar CPF\" e pronto!!! Um novo número de CPF válido será gerado. Você ainda tem opção de colocar ou não os \"pontos\" entre os números.",
    "instructions" : [],
    "icon_fa" : "far fa-credit-card"
  },
  {
    "key" : "gerador-cnpj",
    "type" : "GENERATOR",
    "name": "Gerador de CNPJ",
    "description" : "Utilize nosso gerador de cpf, basta clicar em \"Gerar CPF\" e pronto!!! Um novo número de CPF válido será gerado. Você ainda tem opção de colocar ou não os \"pontos\" entre os números.",
    "seo_name": "Gerador de CNPJ Online Grátis",
    "seo_description" : "Utilize nosso gerador de cpf, basta clicar em \"Gerar CPF\" e pronto!!! Um novo número de CPF válido será gerado. Você ainda tem opção de colocar ou não os \"pontos\" entre os números.",
    "instructions" : [],
    "icon_fa" : "fas fa-building",
    "questions" : [
      {
        "title" : "lorem",
        "text" : "lorem ipsum dolor"
      }
    ]
  },
  {
    "key" : "gerador-codiguin",
    "type" : "GENERATOR",
    "name": "Gerador de CODIGUIN Free Fire",
    "description" : "CODIGUINS aleatórios para os itens mais raros do Free Fire.",
    "seo_name": "Gerador de CODIGUIN Free Fire Grátis Online",
    "seo_description" : "CODIGUINS aleatórios para os itens mais raros do Free Fire. Calça Angelical, Passe, Incubadora e novos itens.",
    "instructions" : [
      "Selecione o item que deseja tentar obter com o código aleatório.",
      "Clique no botão \"Gerar Código\"",
      "Copie o código usando o botão \"Copiar\"",
      "Acesse o site de recompensas https://reward.ff.garena.com/pt e faça login com os dados da sua conta no Free Fire",
      "Siga as instruções do site para tentar obter a recompensa"
    ],
    "active": true,
    "icon_fa" : "fas fa-gamepad",
    "about" : "CODIGUIN Free Fire (código do Free Fire) é uma combinação de 12 caracteres formada por uma sequência de números e letras e que fornecem aos jogadores a chance de obter vários itens do jogo gratuitamente.\n A única forma de conseguir uma sequência com um código válido é através de ações nas redes sociais e nenhuma ferramenta na internet tem acesso ao servidor da Garena para gerar itens válidos de Free Fire.",
    "warning" : "Gerador de CODIGUIN é um recurso aleatório e não oficial da Garena Free Fire, é muito pequena a chance de conseguir a sequência correta com esse gerador, portanto, os jogadores devem estar cientes que este é um recurso totalmente aleatório e não há nenhuma garantia de que o código irá funcionar.",
    "questions" : [
      {
        "title" : "Como funciona o Gerador de CODIGUIN Free Fire?",
        "text" : "Esta ferramenta gera uma combinação de 12 caracteres aleatórios e não oficiais da Garena para tentar a possibilidade de resgate de items raros."
      },
      {
        "title" : "É possível conseguir um CODIGUIN válido?",
        "text" : "As chances são bem pequenas."
      },
      {
        "title" : "Gerador de CODIGUIN Free Fire dá \"ban\"?",
        "text" : "Não, ao utilizar este recurso os jogadores não estão burlando nenhuma regra do Free Fire, portanto, é possível utilizar os códigos gerados quantas vezes quiser."
      },
      {
        "title" : "Como é feito o resgate do CODIGUIN?",
        "text" : "O resgate do CODIGUIN é realizado no site oficial da Garena: https://reward.ff.garena.com/pt"
      },
      {
        "title" : "Quais itens posso tentar obter com o CODIGUIN gerado?",
        "text" : "Os itens possíveis são: Calça Angelical, Passe de Elite, Incubadora, Barba do Velho, AK Chama do Dragão, Bandeirão, La Casa de Papel, CR7 (Personagem Chrono), MP40 Iniciativa Cobra, Kit Angelical, 100 Dimas BOOYAH, 500 Dimas BOOYAH, Dunk Master, Cartão Passe de Elite, Corinthians, Incubadora XM8 e Paredão das Rimas"
      }
  
    ]
  },
  {
    "key": "gerador-cpf",
    "type" : "GENERATOR",
    "name": "Gerador de CPF",
    "description" : "Gerador fácil e online de CPF (Cadastro de Pessoa Físicas) gratuíto.",
    "seo_name": "Gerador de CPF Online Grátis",
    "seo_description" : "Gerador fácil e online de CPF (Cadastro de Pessoa Físicas) gratuíto.",
    "instructions" : [
      "Selecione as opções de com pontuação ou sem pontuação.",
      "Clique no botão \"Gerar CPF\"",
      "Copie o código usando o botão \"Copiar\""
    ],
    "active": true,
    "icon_fa" : "far fa-id-card",
    "about" : "O Gerador de CPF permite gerar números de CPF com ou sem pontuação de forma simples. Basta seguir as instruções e pronto. O número pode ser utilizado para testes de scripts de validação e outros.",
    "warning" : "A ferramenta online de Gerador de CPF tem como objêtivo ajudar desenvolvedores, programadores, estudantes, analistas de sistemas e testadores a gerar CPF válidos que são necessários para realizar testes em softwares em estágio de desenvolvimento. Não nos responsabilizamos pelo uso indevido dos dados que são gerados de forma aleatória respeitando as regras de criação de cada documento.",
    "questions" : [
      {
        "title" : "De onde vem os números do CPF?",
        "text" : "Os números são gerados de forma aleatória seguindo as regras definidas pela Receita Federal do Brasil para a criação do documento."
      }
    ]
  },
  {
    "key": "gerador-link-whatsapp",
    "type" : "GENERATOR",
    "name": "Gerador de Link WhatsApp",
    "description" : "Crie agora mesmo seu link para WhatsApp grátis e online de forma rápida e fácil.",
    "seo_name": "Gerador de Link WhatsApp",
    "seo_description" : "Crie agora mesmo seu link para WhatsApp grátis e online de forma rápida e fácil.",
    "instructions" : [
      "Insira o seu número do WhatsApp",
      "Escreva a mensagem padrão que será exibida",
      "Clique no botão \"Gerar link\"",
      "Copie o link e compartilhe",
      "Antes de compartilhar, recomendamos que faça o teste do link"
    ],
    "icon_fa" : "fab fa-whatsapp",
    "active": true,
    "warning" : "Não armazenamos nenhuma das informações que foram preenchidas.",
    "about" : "O gerador de links para o WhatsApp é uma ótima ferramenta para ações de marketing ou relacionamento. Com o link para mensagens personalizadas do WhatsApp, você poderá utilizar em campanhas, redes sociais, email marketing, banners e etc. O bom de encurtar e personalizar links e mensagens do WhatsApp é que funcionará no desktop e no mobile da mesma forma. Faça bom uso da ferramenta encurtadora de WhatsApp.",
    "questions" : [
      {
        "title": "Erro: \"O número de telefone compartilhado através de url é inválido.\" ",
        "text" : "Tente verificar se o número digitado esta correto e que possui o DDI brasileiro (+55)."
      },
      {
        "title": "O Gerador de Link WhatsApp é Pago?",
        "text" : "Não, a ferramenta de Gerador de Link WhatsApp é totalmente gratuíta."
      },
      {
        "title": "O Gerador de Link WhatsApp salva meus dados?",
        "text" : "Não, todos os dados informados são utilizados somente para gerar o link de WhatsApp para o usuário. Os dados não são armazenados em nossos sistemas."
      },
      {
        "title": "É possível usar o Gerador de Link WhatsApp para enviar imagens, sons ou vídeos?",
        "text" : "Não, o link para WhatsApp é exclusivamente para envio de mensagens de texto defininas previamente para o número selecionado mediante ao clique do link com a mensagem codificada."
      }
    ]
  },
  {
    "key": "gerador-lorem-ipsum",
    "type" : "GENERATOR",
    "name": "Gerador de Lorem Ipsum",
    "description" : "Utilize nosso gerador de cpf, basta clicar em \"Gerar CPF\" e pronto!!! Um novo número de CPF válido será gerado. Você ainda tem opção de colocar ou não os \"pontos\" entre os números.",
    "seo_name": "Gerador de Lorem Ipsum Online Grátis",
    "seo_description" : "Utilize nosso gerador de cpf, basta clicar em \"Gerar CPF\" e pronto!!! Um novo número de CPF válido será gerado. Você ainda tem opção de colocar ou não os \"pontos\" entre os números.",
    "instructions" : [],
    "icon_fa" : "fas fa-align-left"
  },
  {
    "key": "conversor-texto-html",
    "type" : "CONVERTER",
    "name": "Conversor de Texto para HTML",
    "description" : "Ferramenta par converter texto para HTML fácil e grátis.",
    "seo_name": "Converter Texto para HTML",
    "seo_description" : "Ferramenta par converter texto para HTML fácil e grátis.",
    "instructions" : [
      "Insira o texto que deseja converter no campo \"Texto\".",
      "Clique no botão \"Gerar HTML\".",
      "As quebras de linha do texto serão convertidas em parágrafos.",
      "Copie o código para utilizar.",
      "Você pode configurar para que os caractéres especiais do código sejam convertidos para o formato unicode e evitar problemas com charset.",
      "Você pode configurar o tamanho e tipo de identação do código se preferir."
    ],
    "icon_fa" : "far fa-file-alt",
    "active": true,
    "warning" : null,
    "about" : "O Conversor de Texto para HTML é uma excelente ferramenta para agilizar o processo de transformas os textos recebidos por e-mail em parágrafos HTML. Deixe seu processo de desenvolvimento mais fácil usando nossa ferramenta.",
    "questions" : [
      {
        "title": "O Conversor de Texto para HTML formata o código automáticamente?",
        "text" : "Não, o texto é convertido em parágrafos baseados nas quebras de linha do texto original apenas. Para adicionar formatação (negrito, itálico, cores...) é necessário editar o código quando for utilizar."
      },
      {
        "title": "O Conversor de Texto para HTML é Gratuíto?",
        "text" : "Sim, a ferramenta é totalmente gratuíta."
      }
    ]
  }      
].map(a => {
  return {
    slug: a.key,
    title: a.name,
    active: a.active,
    description: a.description || '',
    content: a.about || '',
    seo_name: a.seo_name || a.name,
    seo_description: a.seo_description || '',
    active: !!a.active,
    warning: a.warning || '',
    instructions: a.instructions.join('; '),
    tags: "",
    questions: a.questions ? a.questions.map(b => ({ title: b.title, content: b.text })) : []
  }
})

console.log(toCreateArr);

const proms = [];

toCreateArr.forEach(a => {
  let prom = new Promise(async (resolve, reject) => {
    let questions = a.questions;
    delete a.questions;

    const tool = await prisma.tool.create({ data: a });

    const subProms = [];

    questions.forEach(b => {
      b.toolId = tool.id;
      
      let subProm = new Promise(async (res, rej) => {
        await prisma.question.create({ data: b });
        res();
      });
      
      subProms.push(subProm);
    })

    await Promise.all(subProms);
    resolve();

  });

  proms.push(prom);
});

await Promise.all(proms); 
