import React, { useState, useEffect } from "react";
import './pages.css';

const emojiMap = {
  a: "🕵️‍♂️", b: "🐶", c: "🎩", d: "📡", e: "🎯",
  f: "🕶", g: "🚨", h: "🔍", i: "📘", j: "🛰",
  k: "📎", l: "💣", m: "📻", n: "🎒", o: "💼",
  p: "🧥", q: "🧳", r: "💌", s: "🔐", t: "📓",
  u: "💡", v: "📠", w: "📞", x: "📍", y: "🎬",
  z: "🔦", " ": " "
};

const getRandomChar = () => {
  const symbols = Object.values(emojiMap).filter((e) => e !== " ");
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const AnimatedLetter = ({ finalChar, multi }) => {
  const [displayChar, setDisplayChar] = useState(getRandomChar());

  useEffect(() => {
    let steps = 15;
    if(multi > 0){steps += (multi*5)}
    const interval = setInterval(() => {
      if (steps <= 0) {
        setDisplayChar(finalChar);
        clearInterval(interval);
      } else {
        setDisplayChar(getRandomChar());
        steps--;
      }
    }, 100);

    return () => clearInterval(interval);
  }, [finalChar]);

  return <span className="inline-block mx-0.5 emoji">{displayChar}</span>;
};

export default function AnimatedSecretDecoder (){
  const [input, setInput] = useState("");
  const [decodedArray, setDecodedArray] = useState([]);

  const handleDecode = () => {
    const chars = input.toLowerCase().split("").map((char) => {
      return emojiMap[char] || "❓";
    });
    setDecodedArray(chars);
  };

  const handleReset = () => {
    setInput("");
    setDecodedArray([]);
  };

  return (
    <div className="page cyber-ui">
      <div className="cipher">
        <h2 className="heading"><img src="spy.svg" alt="spy"/> Emoji Cipher</h2>
        <input
          type="text"
          placeholder="Type your secret..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="button-row">
          <button
            onClick={handleDecode}
          >
            Decode
          </button>
          <button
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
        {decodedArray.length > 0 && (
          <div className="mt-4 border-t border-green-500 pt-3 text-center text-2xl emojis">
            {decodedArray.map((char, idx) => (
              <AnimatedLetter key={idx} finalChar={char} multi={idx}/>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};


