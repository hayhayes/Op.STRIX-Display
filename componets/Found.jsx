import './componets.css';

export default function Found({found}){
    const images = {
        flashlight: './flashlight.png',
        radio: './radio.png',
        whistle: './whistle.png',
        firstaidkit: './firstaidkit.png',
        water: './water.png'
    }

    return(
        <div className="found-items-container">
            {found.map((item, i) => (
                <img src={images[item]} key={i} />
            ))}
        </div>
    )
}