import * as d3 from "d3";
import { useEffect, useRef } from "react";

const Shape = () => {
    const svgRef = useRef(null);
    const mod = 5
    const width = mod * 100;
    const height = mod * 100;
    // Variáveis de formação do arco
    const rx = 50;
    const ry = 50;
    const x1 = width / 2 + 1;
    const y1 = height / 2 - ry;
    const x2 = width / 2 + (rx - 1);
    const y2 = height / 2 + 1;
    const xAxisRotation = 0;
    const largeArcFlag = 0;
    const sweepFlag = 1;

    useEffect(() => {
        const svg = d3.select(svgRef.current);

        svg.selectAll("path").remove()

        svg.append("path")
            .attr("d", `M ${x1} ${y1} A ${rx} ${ry} ${xAxisRotation} ${largeArcFlag} ${sweepFlag} ${x2} ${y2}`)
            .attr("fill", "none")
            .attr("stroke", "black")
    }, [])

    return <svg ref={svgRef} width={width} height={height} style={{ border: "1px solid black", marginBottom: "20px" }} />
}

export default Shape;