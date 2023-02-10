import { useEffect, useRef } from "react";
import * as d3 from "d3";

const BarChart = ({ data }) => {
    // ReferÊncia do svg
    const svgRef = useRef();

    useEffect(() => {
        console.log(data)
        // Select do SVG para objeto D3 e definição do tam do conteiner
        const svg = d3
            .select(svgRef.current)
            .attr("width", 300 + 30)
            .attr("height", 300 + 30)

        // Remove gráficos antigos
        svg.selectAll("rect").remove();
        svg.selectAll("g").remove();
        
        // Define da escala em X
        const xScale = d3
            .scaleBand() // .scaleBand() para fazer uma escala com valores
            .domain(data.map((_, i) => i)) // Dominio é um array com os indexes
            .range([0, 300]) // Tamanho vai de 0 a 300
            .padding(0.5); // Espaçamento interno de 0.5

        // Define a escala em y
        const yScale = d3
            .scaleLinear() // Escala linear simples
            .domain([0, d3.max(data)]) // Domínio é um array que vai de 0 ao valor máximo
            .range([300, 0]); // Tamanho vai de 0 á 300

        const xAxis = d3.axisBottom(xScale);
        const yAxis = d3.axisRight(yScale);

        // Definições das barras
        svg
            .selectAll("rect") // Como se fosse um forEach()
            .data(data)
            .join("rect") // Cada dado será tratado como rect
            .attr("x", (_, index) => xScale(index)) // Pos x
            .attr("y", value => yScale(value) + 10) // Pos y
            .attr("width", xScale.bandwidth()) // Largura
            .attr("height", value => 300 - yScale(value)) // Altura
            .attr("fill", "orange"); // Color

        // Adiciona ao svg um gráfico correspondente ao xAxis
        svg.append("g")
            .attr("transform", "translate(0, 310)")
            .call(xAxis);

        // Adiciona ao svg um gráfico correspondente ao yAxis
        svg.append("g")
            .attr("transform", "translate(300, 10)")
            .call(yAxis);

        svg.exit().remove();
    }, [data]);

    return <svg className="chart" ref={svgRef} />;
};

export default BarChart;