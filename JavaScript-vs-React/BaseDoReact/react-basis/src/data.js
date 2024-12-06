import imgComponent from './assets/components.png'
import imgJSX from './assets/jsx-ui.png'
import imgProps from './assets/config.png'
import imgState from './assets/state-mgmt.png'

export const conceitosChaves = [
  {
    id: 1,
    titulo: "Componentes",
    imgSrc: imgComponent,
    conceitos: [
      "Blocos fundamentais para a construção de IU. Constrói uma interface de usuário web por meio da combinação de multiplos componentes."
    ],
    exemplo: `
    function Welcome() {
      return <h1>Hello, World!</h1>;
    }
    `
  },
  {
    id: 2,
    titulo: "JSX",
    imgSrc: imgJSX,
    conceitos: [
      "Retorna o código HTML (potencialmente dinâmico) para definir a tag real que será renderizada no Browser."
    ],
    exemplo: `
    <div>
      <h1>Welcome {userName}</h1>
      <p>Time to learn React!</p>
    </div>
    `
  },
  {
    id: 3,
    titulo: "Props",
    imgSrc: imgProps,
    conceitos: [
      "Torna os componentes configuráveis (e, portanto, reutilizáveis) passando dados de entrada para eles.",
    ],
    exemplo: `
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }
  `
  },
  {
    id: 4,
    titulo: "State",
    imgSrc: imgState,
    conceitos: [
      "Dados gerenciados pelo React que, quando alterados, fazem o componente ser renderizado novamente e, assim, atualizando a interface de usuário",
    ],
    exemplo: `
    function Counter() {
      const [isVisible, setIsVisible] = useState(false);

      function handleClick() {
        setIsVisible(true);
      }

      return (
        <div>
          <button onClick={handleClick}>Show Details</button>
          {isVisible && <p>Amazing details!</p>}
        </div>
      );
    }`,

  },
];


export const objetivos = [
  "Criar aplicações otimizadas e de reação rápidas",
  "Criar webaps belos e dinâmicos",
  "Criar meu próprio website",
];