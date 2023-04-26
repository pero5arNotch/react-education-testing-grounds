function Cell(props) {
    const { title, color } = props;

    const counter = 0;

    return (
        <div style={{ backgroundColor: color, padding: '5%', height: '10em' }}>
            <h2>{title}</h2>
            <span>Čelija je kliknuta {counter} puta.</span>
        </div>
    )
}

export default Cell;