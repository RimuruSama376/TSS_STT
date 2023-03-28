import "./App.css";
import React, { useState, useRef } from "react";
import TextToSpeech from "./components/TextToSpeech";
import SpeechToText from "./components/SpeechToText";
import Buttons from "./components/Buttons";
function App() {
  const textRef = useRef();
  const [activeButton, setActiveButton] = useState(0);

  const title =
    activeButton === 0
      ? "Please click on a button above!"
      : activeButton === 1
      ? "Text to speech convertor"
      : "speech to text convertor";

  // const [prev, setPrev] = useState();
  //daf
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h3>Simple text to speech and speech to text generator</h3>
        </header>
        <div className="main-div raisedbox">
          <Buttons setActiveButton={setActiveButton} />
          <h4>{title}</h4>
          {activeButton !== 0 && (
            <textarea className="textarea" ref={textRef}></textarea>
          )}
          {activeButton === 1 && <TextToSpeech textRef={textRef} />}
          {activeButton === 2 && <SpeechToText textRef={textRef} />}
        </div>
      </div>
    </>
  );
}

export default App;
