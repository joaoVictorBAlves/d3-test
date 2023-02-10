import { useEffect, useRef } from "react";
import * as d3 from "d3";

const BarChart = ({ data }) => {
    const svgRef = useRef();

    useEffect(() => {
        // Seleciona e define o o tamanho do conteiner
        const svg = d3.select(svgRef.current)
            .attr("width", 300 + 30)
            .attr("height", 300 + 30)

        // Atualiza o container removendo elementos nele contidos
        svg.selectAll("rect").remove();
        svg.selectAll("g").remove();

        // Define da escala em X que é uma escala categórica
        const xScale = d3
            .scaleBand()
            .domain(data.map((_, i) => i))
            .range([0, 300])
            .padding(0.5);

        // Define a escala em y que é uma escala de valores contínuos
        const yScale = d3
            .scaleLinear()
            .domain([0, d3.max(data)])
            .range([300, 0]);

        // Crio gráficos de eixos x e y
        const xAxis = d3.axisBottom(xScale);
        const yAxis = d3.axisRight(yScale);

        // Criação e formatação das barras
        svg.selectAll("rect")
            .data(data)
            .join("rect")
            .attr("x", (_, index) => xScale(index)) // Pos x
            .attr("y", value => yScale(value) + 10) // Pos y
            .attr("width", xScale.bandwidth()) // Largura
            .attr("height", value => 300 - yScale(value)) // Altura
            .attr("fill", "orange"); // Cor

        // Adiciona ao svg os eixos como gráficos (g)
        svg.append("g")
            .attr("transform", "translate(0, 310)")
            .call(xAxis);

        svg.append("g")
            .attr("transform", "translate(300, 10)")
            .call(yAxis);
    }, [data]);

    return <svg className="chart" ref={svgRef} />;
};

export default BarChart;