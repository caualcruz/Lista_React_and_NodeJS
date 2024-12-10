/* eslint-disable react/prop-types */
import "./CoreConcept.css";
const CoreConcept = ({ id, titulo, imgSrc, conceitos, action }) => {
  return (
    <div id={`concept-${id}`} className="concept">
      <h2>{titulo}</h2>
      {imgSrc && <img src={imgSrc} alt="" />}
      <ul id="core-concept-list" onClick={action}>
        {conceitos.map((item, key) => {
          return <li key={key} >{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default CoreConcept;