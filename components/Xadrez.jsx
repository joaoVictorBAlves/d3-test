import * as d3 from "d3";
import { useEffect, useRef } from "react";

const Xadrez = () => {
    const svgRef = useRef(null);
    const mod = 5
    const width = mod * 100;
    const height = mod * 100;

    useEffect(() => {
        const svg = d3.select(svgRef.current);

        svg.selectAll("rect").remove();

        for (let i = 0; i < mod; i++) {
            for (let j = 0; j < mod; j++) {
                svg.append("rect")
                    .attr("x", 0 + i * width / mod)
                    .attr("y", 0 + j * height / mod)
                    .attr("width", width / mod)
                    .attr("height", height / mod)
                    .attr("fill", (j % 2 === 0) ? ((i % 2 === 0) ? "black" : "white") : ((i % 2 === 0) ? "white" : "black"))
            }
        }

    }, []);

    return <svg ref={svgRef} width={width} height={height} style={{ border: "1px solid black", marginBottom: "20px" }} />
}

export default Xadrez;