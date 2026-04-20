import { useEffect, useState } from "react";
import './componets.css';

const lines = [
  "W.I.S.E. DIRECTORATE 02 — EYES ONLY — CLASSIFIED LEVEL 7",
  "  ",
  "OPERATION: SUNSET",
  "Document ID: FBP-7729-SNS",
  "Date: [REDACTED]",
  "Agent of Record: Twilight (Codename: L. Forger)",
  "Status: ACTIVE – Standby Mode",
  "Location: Berlint Sector 5, Civillian Infiltration Zone (CIZ)",
  "  ",
  "-----------------------------------------------",
  "FALLBACK PROTOCOLS // MISSION CONTINGENCY TREE",
  "-----------------------------------------------",
  "  ",
  "[1] PRIMARY OBJECTIVE COMPROMISE DETECTED",
  "    → Trigger Protocol Sigma-6 (Asset Evacuation)",
  "    → Secure Handler extraction via Line 4-Sub Node: \"Clocktower\"",
  "    → Deploy misdirection drone (Model: MISTEYE X7) in quadrant B-19",
  "  ",
  "[2] COVER IDENTITY AT RISK",
  "    → Execute Memory Scramble Routine (Device ID: Y-43 Anemone)",
  "    → Engage Local Authority Cover Script “Domestic Dispute”",
  "    → Relocate to Safehouse #004 – “The Pantry” (Status: Stocked)",
  "  ",
  "[3] CIVILIAN EXPOSURE ABOVE THRESHOLD",
  "    → Initiate Neighborhood Evac Drill: Code Phrase “Power Outage”",
  "    → Disable comms on Anya's Tracker Watch temporarily",
  "    → Notify Handler S: “Yor is cooking again”",
  "  ",
  "[4] DATA BREACH OR CYBERATTACK DETECTED",
  "    → Firewall Lockdown (Override Key: T0N1-TRNCH-COAT)",
  "    → Deploy Honeyfile \"Budget_2025_Taxes.xlsx\" with tracking beacon",
  "    → Isolate system & purge Drive Z (No Confirm Prompt)",
  "  ",
  "[5] AGENT INJURY OR APPREHENSION",
  "    → Administer self-erase serum (2.3cc max - DO NOT EXCEED)",
  "    → Transmit final log entry to W.I.S.E via dead-drop node 12",
  "    → Activate \"Forgers' Last Resort\" (See Appendix 9B)",
  "  ",
  "------------------------------------------------",
  "NOTES:",
  "- All fallback actions must be completed within 6m 30s of trigger.",
  "- Do NOT engage Handler “Thorn Princess” unless mission integrity >70%.",
  "- Anya must remain unaware of contingency steps at all times.",
  "   ",
  "Signed,",
  "Director Y // W.I.S.E. Berlint Branch",
  "   ",
  "**THIS DOCUMENT WILL SELF-DELETE UPON SCREEN LOCK**",
];

export default function Protocols() {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    setIsScrolling(true);
    if (lineIndex < lines.length) {
    const timeout = setTimeout(() => {
      setDisplayedLines((prev) => [...prev, lines[lineIndex]]);
      setLineIndex((prev) => prev + 1);
    }, 1200);

    return () => clearTimeout(timeout);
  }

  
}, [lineIndex, isScrolling]);

useEffect(() => {
  if (isScrolling) {
    const timeout = setTimeout(() => {
      // reset everything
      setDisplayedLines([]);
      setLineIndex(0);
      setIsScrolling(false);
    }, 93000); // match animation duration

    return () => clearTimeout(timeout);
  }
}, [isScrolling]);

  return (
    <div className="window overflow-hidden protocols" 
      style={{
        backgroundColor: '#383838', 
        borderColor: '#7af683', 
        color: '#9afffa', 
        height: '35rem', 
        width: '45rem',
        padding: '1rem'
      }}>
      <div className={`main ${isScrolling ? 'animate-scroll-up' : ''}`}>
          {displayedLines.map((line, idx) => (
            <div className="typewriter" key={`a-${idx}`}><pre>{line}</pre></div>
          ))}
        
      </div>
      <style>{`
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-100%); }
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        .animate-scroll-up {
          animation: scroll-up linear 70s infinite;
          animation-delay: 23s;
        }
        
        .typewriter {
          overflow: hidden; /* Ensures the content is not revealed until the animation */
          white-space: nowrap; /* Keeps the content on a single line */
          animation: 
            typing 1s steps(40, end);
        }
        .main{
          
          height: 190vh;
        }
       
      `}</style>
    </div>
  );
}
