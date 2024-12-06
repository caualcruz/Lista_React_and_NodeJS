/* eslint-disable no-unused-vars */
import "./MeuObjetivoComReact.css";
import { objetivos } from "../../../data"
const MeuObjetivoComReact = () => {
  return (
    <>
      <h2>Meus Objetivos com React</h2>
      <div className="goal-card">
        <ul>
          {objetivos.map((objetivo, index) => (
            <li key={index}>{objetivo}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MeuObjetivoComReact;