import React, { useState, useEffect } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import "../App.css";

const TextToSpeech = (props) => {
  const { speak, voices } = useSpeechSynthesis();
  const [selectedVoice, setSelectedVoice] = useState(null);

  useEffect(() => {
    // Set the default voice on component mount
    setSelectedVoice(voices[0]);
  }, [voices]);

  const clickHandler = () => {
    speak({ text: props.textRef.current.value, voice: selectedVoice });
  };

  const handleVoiceChange = (event) => {
    const selectedVoiceName = event.target.value;
    const selectedVoice = voices.find(
      (voice) => voice.name === selectedVoiceName
    );
    setSelectedVoice(selectedVoice);
  };

  return (
    <>
      <div className="select-wrapper">
        <select
          className="select"
          value={selectedVoice?.name}
          onChange={handleVoiceChange}
        >
          {voices.map((voice) => (
            <option key={voice.name} value={voice.name}>
              {voice.name}
            </option>
          ))}
          <option value="Google US English">Google US English</option>
          <option value="Microsoft Zira">Microsoft Zira</option>
        </select>
      </div>
      <button className="button -submit center" onClick={clickHandler}>
        Generate Speech
      </button>
    </>
  );
};

export default TextToSpeech;
