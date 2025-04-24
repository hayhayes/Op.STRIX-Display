import './componets.css';
import './colors.css';

export default function Map({color}){

    return(
        <div className={`${color} map window medlarge`}>
            <div className="bar">Campus <span>X</span></div>
            <div className="main">
                <div className="dot" id="jc"></div>
                <div className="dot second" id="jc"></div>
                <div className="dot third" id="jc"></div>
                <div className="dot fourth" id="jc"></div>
                <div className="dot" id="fw"></div>
                <div className="dot second" id="fw"></div>
                <div className="dot fifth" id="fw"></div>
                <div className="dot" id="dk"></div>
                <div className="dot third" id="dk"></div>
                <div className="dot" id="eba"></div>
                <div className="dot second" id="eba"></div>
                <div className="dot fourth" id="eba"></div>
                <div className="dot fifth" id="eba"></div>
                <div className="dot sixth" id="eba"></div>
                <div className="dot" id="asm"></div>
                <div className="dot third" id="asm"></div>
                <div className="dot sixth" id="asm"></div>
                <div className="dot" id="pp"></div>
                <div className="dot" id="ht"></div>
                <div className="dot" id="pi"></div>
                <div className="dot third" id="pi"></div>
                <div className="dot fifth" id="pi"></div>
            </div>
        </div>
    )
}