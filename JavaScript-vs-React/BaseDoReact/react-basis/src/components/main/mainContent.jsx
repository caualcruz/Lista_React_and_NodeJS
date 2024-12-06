/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import CoreConcept from "../coreconcept/CoreConcept.jsx";
import "./MainContent.css";
import MeuObjetivoComReact from "./MeuObjetivoComReact/MeuObjetivoComReact.jsx";
import { useState } from "react";
import { conceitosChaves } from "../../data.js"
import TabButton from "../tabbutton/TabButton.jsx";

const MainContent = () => {

  const [tabContent, setTabContent] = useState(1);

  const handleConceptClick = (e) => {
    alert(e.target.innerText);
  }

  const handleTabButton = (id) => {
    //console.log(e.target.innerText);
    setTabContent(id);
  }

  return (
    <main>
      <MeuObjetivoComReact />
      <section id="core-concepts">
        {conceitosChaves && conceitosChaves.map((conceitoChave, key) => {
          // Exemplo de props via 'Spread Operators ...conceitoChave e exemplo de Handler de click no componente CoreConcept '
          return <CoreConcept key={key} {...conceitoChave} action={handleConceptClick} />;
        })}
      </section>
      <section id="examples">
        <h2>Exemplos</h2>
        <menu>
          {/* <TabButton titulo='Botão'  /> */}
          {conceitosChaves && conceitosChaves.map((conceitoChave, key) => {
            return <TabButton key={key} onClick={() => { handleTabButton(key) }}>{conceitoChave.titulo}</TabButton>
          })}
        </menu>
        <div id="tab-content">
          <h3>Exemplo de código em {conceitosChaves[tabContent].titulo}</h3>
          <p></p>
          <pre>
            <code>
              {conceitosChaves[tabContent].exemplo}
            </code>
          </pre>
        </div>
      </section>
    </main>
  );
};

export default MainContent;