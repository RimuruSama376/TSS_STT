import React, { useEffect, useState } from "react";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const SpeechToText = (props) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const [prev, setPrev] = useState("");
  useEffect(() => {
    setPrev(props.textRef.current.value + " ");
    return () => {
      SpeechRecognition.stopListening();
    };
  }, []);

  useEffect(() => {
    if (transcript !== "") {
      props.textRef.current.value = prev + transcript;
    }
  }, [transcript]);

  const resetHandler = () => {
    resetTranscript();
    props.textRef.current.value = "";
    setPrev("");
  };

  if (!browserSupportsSpeechRecognition) {
    return <p>Your browser doesn't support speech recognition</p>;
  }

  const clickHandler = () => {
    if (listening) SpeechRecognition.stopListening();
    else
      SpeechRecognition.startListening({
        continuous: true,
        interimResults: true,
      });
  };

  return (
    <>
      <button
        className={`button -${listening ? "listening" : "submit"} center`}
        onClick={clickHandler}
      >
        Start/Stop generating text
      </button>
      <button className="button -submit center" onClick={resetHandler}>
        Reset Text
      </button>
    </>
  );
};
export default SpeechToText;
