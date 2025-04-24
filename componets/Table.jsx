import { useState, useEffect } from 'react';
import './componets.css';
import './colors.css';

export default function MissionStatus({color}){
    const [blink, setBlink] = useState([false, false, false, false, false])

    useEffect(() => {createDrama()}, [])
    useEffect(() => {
        console.log(blink)
    }, [blink])
    async function pause (ms){
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    function flash (rowID){
        let row = rowID ?? -1;
        console.log(row)
        let newState = blink.map((val, i) => {
            if(i === row) return true;
            return false;
        })
        setBlink(newState);
        
        return;
    }
    
    
    async function createDrama(){
        for(let c=0; c < blink.length; c++){
            flash(c)
            await pause (60000);
            flash();
            await pause(120000);
        }

        for(let run=0; run < 60; run++){
            await createDrama();
            await pause(120000);
        }
        
    }

    
    return(
        <div className={`${color} missions window large`}>
            <div className='bar'>Mission Reponse</div>
            <div className="main">
                <p className="flavor"><b>Agent Code: </b>TWILIGHT | <b>Alias: </b>Loid Forger <br/>
                <b>Encryption Protocol: </b>GhostCipher-7</p>
                <h4 className="flavor">Mission Reponse Monitoring Table</h4>
                <p className="flavor"><em>Compiled from Field Ops Logs | Auto-Synced from Neuro-Behavioral Implants</em></p>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Location</th>
                            <th>Incident</th>
                            <th>Assigned</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={blink[0] ? 'blink':null}>
                            <td>STRX-001</td>
                            <td>Johnson Center</td>
                            <td>Power Outage</td>
                            <td>Yor Forger</td>
                            <td>In Progress</td>
                        </tr>
                        <tr className={blink[1] ? 'blink':null}>
                            <td>STRX-002</td>
                            <td>Finwick Library</td>
                            <td>Missing Peron</td>
                            <td>Bond</td>
                            <td>Scanning</td>
                        </tr>
                        <tr className={blink[2] ? 'blink':null}>
                            <td>STRX-003</td>
                            <td>CDC</td>
                            <td>Bomb Threat</td>
                            <td>Agent Anya</td>
                            <td>In Progress</td>
                        </tr>
                        <tr className={blink[3] ? 'blink':null}>
                            <td>STRX-004</td>
                            <td>Southside</td>
                            <td>Gas Leak</td>
                            <td>Franky Smith</td>
                            <td>Monitoring</td>
                        </tr>
                        <tr className={blink[4] ? 'blink':null}>
                            <td>STRX-005</td>
                            <td>Command</td>
                            <td>Data Breach</td>
                            <td>Twilight</td>
                            <td>Monitoring</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}