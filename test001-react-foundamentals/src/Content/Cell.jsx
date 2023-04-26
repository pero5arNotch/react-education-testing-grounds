function Cell(props) {
    const { title, color } = props;

    return (
        <div style={{ backgroundColor: color, padding: '5%', height: '10em' }}>
            <h2>{title}</h2>
        </div>
    )
}

export default Cell;