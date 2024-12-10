import imgComponent from './assets/components.png'
import imgJSX from './assets/jsx-ui.png'
import imgProps from './assets/config.png'
import imgState from './assets/state-mgmt.png'
import imgEvents from './assets/events-icon.png'
import imgHooks from './assets/hooks-icon.png'
import imgContext from './assets/context-icon.png'
import imgEffects from './assets/effects-icon.png'

export const conceitosChaves = [
  [
    {
      id: 0,
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
      id: 1,
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
      id: 2,
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
      id: 3,
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
  ],
  [
    {
    id: 4,
    titulo: "Eventos",
    imgSrc: imgEvents,
    conceitos: [
      "Permitem capturar ações do usuário, como cliques, teclas pressionadas, movimentos do mouse, etc., e responder dinamicamente a essas ações."
    ],
    exemplo: `
    function Button() {
      function handleClick() {
        alert('Button clicked!');
      }
      
      return (
        <button onClick={handleClick}>
          Click Me
        </button>
      );
    }
    `
  },
  {
    id: 5,
    titulo: "Hooks",
    imgSrc: imgHooks,
    conceitos: [
      "Funções especiais do React que permitem usar recursos como estado e ciclo de vida em componentes funcionais."
    ],
    exemplo: `
    function Counter() {
      const [count, setCount] = useState(0);

      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );
    }
    `
  },
  {
    id: 6,
    titulo: "Context",
    imgSrc: imgContext,
    conceitos: [
      "Proporciona uma forma de passar dados como tema, idioma ou autenticação através de uma árvore de componentes sem precisar propagar manualmente via props."
    ],
    exemplo: `
    const ThemeContext = React.createContext('light');

    function App() {
      return (
        <ThemeContext.Provider value="dark">
          <Toolbar />
        </ThemeContext.Provider>
      );
    }

    function Toolbar() {
      return (
        <div>
          <ThemedButton />
        </div>
      );
    }

    function ThemedButton() {
      const theme = React.useContext(ThemeContext);
      return <button className={theme}>Button</button>;
    }
    `
  },
  {
    id: 7,
    titulo: "Efeitos colaterais",
    imgSrc: imgEffects,
    conceitos: [
      "Gerenciam ações que devem ser executadas como consequência de mudanças no estado ou nas props de um componente."
    ],
    exemplo: `
    function Timer() {
      const [seconds, setSeconds] = useState(0);

      useEffect(() => {
        const interval = setInterval(() => {
          setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval); // Cleanup
      }, []);

      return <p>Time elapsed: {seconds} seconds</p>;
    }
    `
  }]
];



export const objetivos = [
  "Criar aplicações otimizadas e de reação rápidas",
  "Criar webaps belos e dinâmicos",
  "Criar meu próprio website",
];