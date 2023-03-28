import { useState } from "react";
import "../App.css";

const Buttons = (props) => {
  const [button1Class, setButton1Class] = useState("normal");
  const [button2Class, setButton2Class] = useState("normal");

  const clickHandler = (type) => {
    props.setActiveButton(type);
    setButton1Class(type === 1 ? "active" : "normal");
    setButton2Class(type === 2 ? "active" : "normal");
  };

  return (
    <div className="button-container">
      <button
        className={`button -${button1Class} center`}
        onClick={clickHandler.bind(null, 1)}
      >
        Text to speech
      </button>
      <button
        className={`button -${button2Class} center`}
        onClick={clickHandler.bind(null, 2)}
      >
        speech to text
      </button>
    </div>
  );
};

export default Buttons;
