import React, { useState, useEffect } from "react";
import './interactive.css';

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

  return <span className="inline-block mx-0.5 text-2xl">{displayChar}</span>;
};

const AnimatedSecretDecoder = () => {
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
    <div className="bg-black text-green-300 p-4 rounded-xl max-w-md mx-auto shadow-lg font-mono">
      <h2 className="text-xl mb-2">🧪 Animated Spy Decoder</h2>
      <input
        type="text"
        placeholder="Type your secret..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-2 mb-2 rounded bg-gray-800 text-white"
      />
      <div className="flex gap-2">
        <button
          onClick={handleDecode}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded"
        >
          Decode
        </button>
        <button
          onClick={handleReset}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
        >
          Reset
        </button>
      </div>
      {decodedArray.length > 0 && (
        <div className="mt-4 border-t border-green-500 pt-3 text-center text-2xl">
          {decodedArray.map((char, idx) => (
            <AnimatedLetter key={idx} finalChar={char} multi={idx}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default AnimatedSecretDecoder;
