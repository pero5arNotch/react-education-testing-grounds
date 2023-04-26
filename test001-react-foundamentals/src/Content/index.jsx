import Cell from './Cell';

function Content() {
    return (
        <div className="content" style={{ color: 'white', textAlign: 'center' }}>
            <Cell title="A" color="#F3A712" />
            <Cell title="B" color="#FF0054" />
            <Cell title="C" color="#3772FF" />
            <Cell title="D" color="#BAA898" />
        </div>
    );
}

export default Content;