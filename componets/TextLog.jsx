import { useEffect, useState, useRef } from "react";
import './componets.css';
import './colors.css';

const terminalLog = [
    "████████████████████████████████████████████████████████████████████████",
    "[ ACCESSING SYSTEM LOG: TWILIGHT_NODE_07 ]       Clearance: LEVEL 7 (Eyes Only)",
    "████████████████████████████████████████████████████████████████████████",
    "",
    "> USER: TWFybmllUm9zZQ== (Loid Forger)",
    "> TERMINAL ID: WSTLS-HQ-Z3-07",
    "> LOCAL TIME: 2025-04-21 23:59:02",
    "> LOCATION: SUBNET MASKED [HOME NODE: OPEARTIONAL COVER “PSYCHIATRIST”]",
    "> ENCRYPTION: ACTIVE | SIGNAL MASKING: ENABLED",
    "",
    "[ 04:00:12 ] :: INITIATE_SYSTEM_WAKE()",
    "    ↳ Biometric scan success [Retina + Pulse + Cortisol baseline]",
    "    ↳ Loid.F / TWFybmllUm9zZQ== identity confirmed",
    "    ↳ Booting SilentOps Suite v6.92...",
    "    ↳ ActiveCam Sweep: No intrusions",
    "    ↳ Auto-wipe protocol set to [IF INTRUSION DETECTED]",
    "",
    "[ 04:05:47 ] :: DOWNLOAD_OPS_PACKET()",
    "    ↳ Mission Tag: OP-STRIX",
    "    ↳ Handler: “NIGHT OWL”",
    "    ↳ Subject: Donovan Desmond (High-Value Target)",
    "    ↳ Attachments: [Intel_Phase3-DinnerBrief.enc], [Surv_Report_EdenQuad.jpg]",
    "",
    "[ 06:17:09 ] :: DOMESTIC SUBROUTINE ENGAGED",
    "    ↳ Cover Status: “Family Routine” Stable",
    "    ↳ Constructed Bento (Child Protocol: HRT_SHAPED_RICE=true)",
    "    ↳ Secondary Agent (“Thorn Princess”) briefed on cover event (Neighborhood Social)",
    "",
    "[ 08:03:21 ] :: EDEN ACADEMY - OBSERVATION INITIATED",
    "    ↳ Facial ID Scan: Principal Heald, 94.7% match",
    "    ↳ Audio log triggered: “All children should bloom...”",
    "    ↳ DEVICE DEPLOYED: GLB_CAM_X12 [Covert Globe Feed Online]",
    "",
    "[ 11:30:55 ] :: ALERT — ENCRYPTED SIGNAL INTERCEPT",
    "    ↳ Signature: [ECU] Eastern Counter-Intel Sweep",
    "    ↳ Threat Level: ORANGE",
    "    ↳ Action: Protocol_TWILIGHT_RED()",
    "        ⤷ reroute trace via sandbox VM “OTARU_MOLE”",
    "        ⤷ deploy false meta-signature “Agent Plumtree”",
    "        ⤷ activate ghostVPN — latency spike masked as Wi-Fi glitch",
    "",
    "[ 14:02:38 ] :: DAILY SCRUB + OPSEC LOCKDOWN",
    "    ↳ Transient memory: Sanitized",
    "    ↳ Residual log artifacts: Spoofed",
    "    ↳ User Prompt: “Fixing the internet” [cover justification]",
    "",
    "[ 18:02:14 ] :: DROP POINT CONFIRMED",
    "    ↳ Location: “Behind croissant bakery - Sector D4”",
    "    ↳ Payload: Microfilm (Blueprint_DesmondEstate, Gala Guest List)",
    "    ↳ Retrieval: Completed",
    "    ↳ Upload to HQ via ShadowNet_Topology-3A: Success",
    "    ↳ Confirmation Hash: [G.O.L.D.F.I.S.H._95c29e]",
    "",
    "[ 23:55:55 ] :: FINAL SWEEP / TERMINAL LOCKDOWN",
    "    ↳ Surveillance Re-scan: [No bugs, trackers, or residual psi-energy]",
    "    ↳ System Sleep Mode initialized",
    "    ↳ EXIT LINE: “Maintain normalcy. Maintain mission. Maintain peace.”",
    "",
    "████████████████████████████████████████████████████████████████████████",
    ":: END LOG — SYSTEM STANDING BY FOR NEXT OPERATION ::",
    "████████████████████████████████████████████████████████████████████████"
];

export default function TextLog({color}){
    const containerRef = useRef(null);
    const [typedLines, setTypedLines] = useState([]);
    const [currentLine, setCurrentLine] = useState("");
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0)

    
    useEffect(() => {
        if (lineIndex >= terminalLog.length) {
          // Done typing, wait and restart
          setTimeout(() => {
            setTypedLines([]);
            setCurrentLine("");
            setLineIndex(0);
            setCharIndex(0);
          }, 5000);
          return;
        }
        
        const currentFullLine = terminalLog[lineIndex];
        let ms = Math.random() * 35 + 25;
        if (charIndex >= currentFullLine.length) {ms = 1000};
        const timeout= setTimeout(() => {
          const nextChar = currentFullLine[charIndex] || "";
          const updatedLine = currentLine + nextChar;
          setCurrentLine(updatedLine);
          setCharIndex((i) => i + 1);
          
          if(charIndex >= currentFullLine.length) {
            setTypedLines((prev) => [...prev.slice(-40), updatedLine]);
            setCurrentLine("");
            setLineIndex((i) => i + 1);
            setCharIndex(0);
          }
    
          // Scroll down as text grows
          if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
          }
        }, ms);
    
        return () => clearTimeout(timeout);
    }, [charIndex, currentLine, lineIndex]);
    
    return(
        <div className={`${color} log window mediumlong`} ref={containerRef}>
            <div className="bar">Activity Log</div>
            <div className="main">
                {typedLines.map((line, idx) => (
                    <div key={idx}><pre>{line}</pre></div>
                ))}
                <div>
                    <pre>{currentLine}</pre>
                    <span className="cursor">█</span>
                </div>
                <style>{`
                    .cursor {
                    animation: blink 1s step-start infinite;
                    }
                    @keyframes blink {
                    50% { opacity: 0; }
                    }
                `}</style>
            </div>
        </div>
    )
}

//