/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import CoreConcept from "../coreconcept/CoreConcept.jsx";
import "../main/MainContent.css";

import { useState } from "react";
import { conceitosChaves } from "../../data.js"
import TabButton from "../tabbutton/TabButton.jsx";



const SessionConcept = ({dados}) => {

    const [tabContent, setTabContent] = useState(0);

    const handleConceptClick = (e) => {
        alert(e.target.innerText);
    }


    const handleTabButton = (id) => {
        setTabContent(id);
    }
    return (
        <section className="core-concepts">
            <div className="concepts">
                {dados && dados.map((conteudo, key) => {
                    return <CoreConcept key={key} {...conteudo} action={handleConceptClick} />;
                })}
            </div>
            <div className="examples">
                <h2>Exemplos de código</h2>
                <menu>
                    {/* <TabButton titulo='Botão'  /> */}
                    {dados && dados.map((conteudo, key) => {
                        return <TabButton key={key} onClick={() => { handleTabButton(key) }}>{conteudo.titulo}</TabButton>
                    })}
                </menu>
                <div className="tab-content">
                    <h3>Exemplo de código em {dados[tabContent].titulo}</h3>
                    <p></p>
                    <pre>
                        <code>
                            {dados[tabContent].exemplo}
                        </code>
                    </pre>
                </div>
            </div>
        </section>

    )
}

export default SessionConcept;