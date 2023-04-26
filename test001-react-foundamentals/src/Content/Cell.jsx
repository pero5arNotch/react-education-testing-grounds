import { useState } from 'react';

function Cell(props) {
    const { title, color } = props;

    const [counter, setCounter] = useState(0);

    return (
        <div
            style={{ backgroundColor: color, padding: '5%', height: '10em' }}
            onClick={() => setCounter((oldValue) => oldValue + 1)}
            onDoubleClick={() => setCounter((oldValue) => oldValue + 10)}
        >
            <h2>{title}</h2>
            <span>Čelija je kliknuta {counter} puta.</span>
        </div>
    )
}

export default Cell;