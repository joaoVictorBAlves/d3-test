const SVG = () => {
    const width = 500, height = 350;
    // Variáveis de formação do arco
    const x1 = 101;
    const y1 = 100;
    const x2 = 150;
    const y2 = 148;
    const rx = 50;
    const ry = 50;
    const xAxisRotation = 0;
    const largeArcFlag = 0;
    const sweepFlag = 1;

    return (
        <svg width={width} height={height} style={{ display: "block", margin: "20px auto", marginTop: "80px", border: "1px solid black" }}>
            <circle cx={width / 10} cy={height / 7} r="40" stroke="yellow" stroke-width="4" fill="#f5f6bb" />
            <ellipse cx="200" cy="50" rx="100" ry="50" style={{ fill: "yellow", stroke: "purple", strokeWidth: 2 }} />
            <line x1="300" y1="0" x2="500" y2="100" style={{ stroke: "rgb(255, 0, 0)", strokeWidth: 2 }} />
            <polygon points={[[50, 100], [10, 200], [100, 200]]} style={{ fill: "lime", stroke: "purple", strokeWidth: 1 }} transform="rotate(180, 50, 150)" />
            <polyline points={[[120, 120], [140, 125], [160, 140], [180, 220], [220, 140], [200, 180]]} style={{ fill: "none", stroke: "black", strokeWidth: 3 }} transform={"translate(50, 100)"} />
            <text x="300" y="180" fontSize={20} fill="red">I love SVG!</text>
            {/* Arcos */}
            <g id="arcos" transform="translate(50, 0)">
                <path d={`M ${x1} ${y1} A ${rx} ${ry} ${xAxisRotation} ${largeArcFlag} ${sweepFlag} ${x2} ${y2}"`} fill="none" stroke="black" />
                <path d={`M ${150} ${150} A ${50} ${50} ${0} ${0} ${1} ${101} ${200}`} fill="none" stroke="black" />
                <path d={`M ${99} ${200} A ${50} ${50} ${0} ${0} ${1} ${51} ${151}"`} fill="none" stroke="black" />
                <path d={`M ${51} ${149} A ${50} ${50} ${0} ${0} ${1} ${99} ${100}"`} fill="none" stroke="black" />
            </g>
        </svg>
    );
}

export default SVG;