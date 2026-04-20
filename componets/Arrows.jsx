import './componets.css';

export default function ArrowButton({ direction, onClick }) {
    const icon = direction == 'left' ? '←' : '→';
    return (
        <button onClick={()=> onClick(direction)} aria-label="Go left" className="arrows" id={direction}>
            {icon}
        </button>
  );
}