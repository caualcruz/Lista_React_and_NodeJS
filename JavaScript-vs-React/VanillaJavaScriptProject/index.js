//Conteúdo
const content = [
  [
    "JavaScript é uma linguagem de programação que permite adicionar interatividade e lógica a páginas web e aplicações. Ela é conhecida por sua capacidade de manipular elementos HTML, responder a eventos do usuário, e realizar operações assíncronas.",
    "O termo Vanilla JavaScript se refere ao JavaScript 'puro', ou seja, sem o uso de bibliotecas ou frameworks externos como React, Angular ou jQuery. É a base sobre a qual essas ferramentas são construídas.",

  ],
  [
    "JavaScript é uma linguagem de programação fundamental para o desenvolvimento web e, cada vez mais, para outras áreas",
    "Presença dominante na web: é linguagem mais popular nas frameworks de desenvolvimento web e, dentre elas, lista-se o React!",
    "Versatilidade:  JavaScript pode ser utilizado para desenvolvimento de aplicações mobile (com frameworks como React Native), aplicações desktop (com Electron), jogos e até mesmo backend (com Node.js).",
    "Oportunidade no mercado de trabalho: amplia as possibilidades de trabalho em diferentes áreas do conhecimento com a mesma linguagem."
  ],
  [
    "Variáveis; Operadores; Estruturas de Controle; Funções; Objetos; Arrays.",
    "Interação com o DOM (Document Object Model).",
    "Conceitos Avançados: Programação Assíncrona; Requisições HTTP, manipulação de APIs; ES6+ (ECMAScript 6 e posterior); DOM APIs; Expressões Regulares; Depuração e Testes.",
    "Boas Práticas: Código limpo e legível; Padrões de projeto; Modularidade e reutilização de código; Performance e otimização."
  ],
  [
    "Frameworks populares para desenvolvimento front-end: React, Vue e Angular, por exemplo",
    "Node.js: Ambiente de execução JavaScript para backend",
    "jQuery: Biblioteca para simplificar a manipulação do DOM"
  ],
  [
    `Exemplo da sintaxe de método em arrow function:
    <pre>
      <code>
      const exemplo = () =>{
        return 'this is JavaScript'
        }
        </code>
    </pre>
    `,

    ` Exemplo de sintaxe de criação de um objeto:
    <pre>
      <code>
        const Pessoa = {
          nome: 'Victor',
          sobrenome: 'Silva'
        }
      </code>
    </pre>
  `
  ]
];
//Get em array dos botões
const buttons = [
  {
    id: 0,
    idName: 'btn-what-is-vanillajs',
    get: document.getElementById("btn-what-is-vanillajs")
  },
  {
    id: 1,
    idName: 'btn-why-js',
    get: document.getElementById("btn-why-js")
  },
  {
    id: 2,
    idName: 'btn-core-features',
    get: document.getElementById("btn-core-features")
  },
  {
    id: 3,
    idName: 'btn-resources',
    get: document.getElementById("btn-resources")
  },
  {
    id: 4,
    idName: 'btn-examples',
    get: document.getElementById("btn-examples")
  }
]

//Onde o conteúdo "das tabs" será gerado
const tabContent = document.getElementById("tab-content");


//Função para gerar o conteúdo das tabs
function displayContent(items) {
  let listContent = ``;

  items.forEach(item => listContent += `<li>${item}</li>`)
 
  tabContent.innerHTML = ""; // Limpa o conteúdo existente
  
  const list = document.createElement("ul");
  list.innerHTML = listContent; // Insere um novo conteúdo
  
  tabContent.append(list);
}

function highlightButton(btn) {
  // Limpa as estilzações existentes
  buttons.forEach(button => {
    button.get.className = "";
  })
  btn.className = "active"; // Define a nova estilização
}

function handleClick(event) {
  event.preventDefault(); // Para evitar que a página seja recarregada ao clicar no botão
  highlightButton(event.target); // Aplica classe css para realçar o botão, isto é, "fazer o highlight"
  const btnId = event.target.id; // Puxa o id do botão onde houve o evento click (lembrando: id no tipo texto)
  const btnNumberId = buttons.find(button => button.idName === btnId).id // Retorna o id numérico referente ao botão clicado no array buttons
  displayContent(content[btnNumberId]); // Vai apontar para o indice do array content equivalente ao button, isto é, vai gerar o conteúdo equivalente ao botão clicado. 

}


displayContent(content[0]);

//Adiciona listeners referente a click para ação de handleClick em cada botão instanciado no array buttons 
buttons.forEach(button => {
  button.get.addEventListener("click", handleClick);
})
