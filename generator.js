const uuid = require('uuid').v4;
const fs = require('fs').promises;

const allFlashCards = [
  {
    title: 'JSX',
    description:
      'JavaScript and XML. Linguagem de marcação que pode ser utilizada para a criação de componentes React de forma mais declarativa. É bem semelhante ao HTML.',
  },
  {
    title: 'React',
    description:
      'Biblioteca criada pelo Facebook para renderização otimizada. Pode ser utilizada em diversas plataformas como web, mobile e Realidade Virtual.',
  },
  {
    title: 'Componente React',
    description:
      'Representa código reutilizável pelo React. Em regra, deve começar com letra maiúscula. Pode ser customizável através de props',
  },
  {
    title: 'Hooks',
    description:
      'Estruturas que são acopladas às funções para aumentar o poder de componentes React. Podem permitir a utilização de estado e gerenciamento de efeitos colaterais, por exemplo.',
  },
  {
    title: 'Function Components',
    description:
      'Componentes baseados em função. São amplamente utilizados atualmente em detrimento às Class Components, que aos poucos podem se tornar obsoletas.',
  },
  {
    title: 'useState',
    description:
      'Hook nativo do React que permite o gerenciamento de estado da aplicação e de componentes.',
  },
  {
    title: 'Estado',
    description:
      "Também conhecido como 'state'. Pode ser representando por 'dados que mudam com o tempo' e que também podem ser manipulados pelos usuários, geralmente através de formulários, e também por API's, outros componentes, etc.",
  },
  {
    title: 'Efeitos colaterais',
    description:
      "Também conhecido como 'side effects'. Representa tudo o que o React não controla diretamente. Bons exemplos são a manipulação manual do DOM e requisições HTTP.",
  },
  {
    title: 'useEffect',
    description: 'Hook nativo do React para lidar com efeitos colaterais.',
  },
  {
    title: 'Virtual DOM',
    description:
      'Estrutura utilizada pelo React para manipulação do DOM em memória. Permite a atualização do DOM real somente onde necessário, o que pode garantir uma melhor performance da aplicação.',
  },
]
  .map(item => {
    return { id: uuid(), ...item };
  })
  .sort((a, b) => a.title.localeCompare(b.title));

async function start() {
  fs.writeFile(
    './flashcards.json',
    JSON.stringify({ flashcards: allFlashCards }, null, 2)
  );
}

start();
