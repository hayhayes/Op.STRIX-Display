import { useEffect, useState } from "react";
import './componets.css';

const lines = [
  "W.I.S.E. DIRECTORATE 02 — EYES ONLY — CLASSIFIED LEVEL 7",
  "",
  "OPERATION: SUNSET",
  "Document ID: FBP-7729-SNS",
  "Date: [REDACTED]",
  "Agent of Record: Twilight (Codename: L. Forger)",
  "Status: ACTIVE – Standby Mode",
  "Location: Berlint Sector 5, Civillian Infiltration Zone (CIZ)",
  "",
  "-----------------------------------------------",
  "FALLBACK PROTOCOLS // MISSION CONTINGENCY TREE",
  "-----------------------------------------------",
  "",
  "[1] PRIMARY OBJECTIVE COMPROMISE DETECTED",
  "    → Trigger Protocol Sigma-6 (Asset Evacuation)",
  "    → Secure Handler extraction via Line 4-Sub Node: \"Clocktower\"",
  "    → Deploy misdirection drone (Model: MISTEYE X7) in quadrant B-19",
  "",
  "[2] COVER IDENTITY AT RISK",
  "    → Execute Memory Scramble Routine (Device ID: Y-43 Anemone)",
  "    → Engage Local Authority Cover Script “Domestic Dispute”",
  "    → Relocate to Safehouse #004 – “The Pantry” (Status: Stocked)",
  "",
  "[3] CIVILIAN EXPOSURE ABOVE THRESHOLD",
  "    → Initiate Neighborhood Evac Drill: Code Phrase “Power Outage”",
  "    → Disable comms on Anya's Tracker Watch temporarily",
  "    → Notify Handler S: “Yor is cooking again”",
  "",
  "[4] DATA BREACH OR CYBERATTACK DETECTED",
  "    → Firewall Lockdown (Override Key: T0N1-TRNCH-COAT)",
  "    → Deploy Honeyfile \"Budget_2025_Taxes.xlsx\" with tracking beacon",
  "    → Isolate system & purge Drive Z (No Confirm Prompt)",
  "",
  "[5] AGENT INJURY OR APPREHENSION",
  "    → Administer self-erase serum (2.3cc max - DO NOT EXCEED)",
  "    → Transmit final log entry to W.I.S.E via dead-drop node 12",
  "    → Activate \"Forgers' Last Resort\" (See Appendix 9B)",
  "",
  "------------------------------------------------",
  "NOTES:",
  "- All fallback actions must be completed within 6m 30s of trigger.",
  "- Do NOT engage Handler “Thorn Princess” unless mission integrity >70%.",
  "- Anya must remain unaware of contingency steps at all times.",
  "",
  "Signed,",
  "Director Y // W.I.S.E. Berlint Branch",
  "",
  "**THIS DOCUMENT WILL SELF-DELETE UPON SCREEN LOCK**"
];

export default function Protocols() {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < lines.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, lines[lineIndex]]);
        setLineIndex((prev) => prev + 1);
        
      }, 100);
      return () => clearTimeout(timeout);
    }
   
  }, [lineIndex]);

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
      <div className="main animate-scroll-up">
        {displayedLines.map((line, idx) => (
          <div key={idx}><pre>{line}</pre></div>
        ))}
      </div>
      <style>{`
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-100%); }
        }

        .animate-scroll-up {
          animation: scroll-up linear 120s infinite;
        }
      `}</style>
    </div>
  );
}
