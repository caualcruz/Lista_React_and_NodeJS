import { useState } from "react";
import "./styles.css";

const content = [
  [
    "React é porpularmente conhecido",
    "Facilita a construção de frontends complexos",
    "Tem muitos recursos, é flexível e muito poderoso",
    "Possui um ecossistema avito e versátil"
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (tais como: useEffect())",
    "Renderização Dinâmica"
  ],
  [
    "Página oficial (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (construção de apps para mobiles)"
  ],
  [
    "Airbnb",
    "Uber",
    "Microsoft",
  ],
 

];

export default function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div>
      <header>
        <img src="react-logo-xs.png" alt="React logo" />
        <div>
          <h1>React.js</h1>
          <p>Ferramenta que é utilizada para desenvolvimento e redenrização de UIs (Frontend Web) </p>
        </div>
      </header>

      <div id="tabs">
        <menu>
          <button
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
            Por que usar React?
          </button>
          <button
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            Conceitos Fundamentais
          </button>
          <button
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
          >
            Assunto Relacionado e Referência
          </button>
          <button
            className={activeContentIndex === 3 ? "active" : ""}
            onClick={() => setActiveContentIndex(3)}
          >
            Empresas que usam o React 
          </button>
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}