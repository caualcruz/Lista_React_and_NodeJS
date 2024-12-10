/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import ObjetivoComReact from "../MeuObjetivoComReact/MeuObjetivoComReact.jsx";
import { conceitosChaves } from "../../data.js"
import SessionConcept from "../coreSessionContent/coreSessionContent.jsx";
import CoreConcept from "../coreconcept/CoreConcept.jsx"; 

const MainContent = () => {


  return (
  <>
  <main>
    <ObjetivoComReact />
    {conceitosChaves && conceitosChaves.map((linha, key) => {
      return <SessionConcept key={key}  dados={linha} />
    })} 
  </main>
</>
  )}
    
export default MainContent;