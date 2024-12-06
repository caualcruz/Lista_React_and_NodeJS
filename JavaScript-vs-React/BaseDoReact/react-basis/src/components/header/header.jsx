/* eslint-disable no-unused-vars */

import "./Header.css";
import athomReact from "../../assets/athom-react.png";
const randomWords = () => {
  const words = ["conceitos", "fundamentos", "definições"];
  const indice = Math.floor(Math.random() * words.length);
  return words[indice];
};

const Header = () => {
  const imgSrc = athomReact;

  return (
    <header>
      {imgSrc && <img src={imgSrc}/>}
      <h1>Fundamentos do React</h1>
      <p>Iremos aplicar aqui {randomWords()} práticos e resumidos do React.</p>
    </header>
  );
};

export default Header;