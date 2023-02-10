import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const Histogram = ({ data }) => {
    const svgRef = useRef(null)
    useEffect(() => {
        // Seleciona e define o o tamanho do conteiner
        const svg = d3.select(svgRef.current)
            .attr("width", 800 + 30)
            .attr("height", 400 + 30)
        // Define escala x que corresponde do menor ao maior valor
        const xScale = d3.scaleLinear()
            .domain([d3.min(data), d3.max(data)])
            .range([0, 800]);
        // Define o histograma (que cria classes que armazenam a qtd de valores em uma determinada faixa)
        const histogram = d3.bin()
            .domain(xScale.domain())
            .thresholds(xScale.ticks(20))(data);
        const yScale = d3.scaleLinear()
            .domain([0, d3.max(histogram, d => d.length)])
            .range([400, 0]);
        // Crio gráficos de eixos x e y
        const xAxis = d3.axisBottom(xScale);
        const yAxis = d3.axisLeft(yScale);
        // Adicionar as barras
        svg.selectAll("rect")
            .data(histogram)
            .join("rect")
            .attr("x", d => xScale(d.x0) + 31)
            .attr("y", d => yScale(d.length))
            .attr("width", d => xScale(d.x1) - xScale(d.x0) - 1)
            .attr("height", d => yScale(0) - yScale(d.length))
            .attr("fill", "orange");
        // Adiciona ao svg os eixos como gráficos (g)
        svg.append("g")
            .attr("transform", "translate(30, 400)")
            .call(xAxis);

        svg.append("g")
            .attr("transform", "translate(30, 0)")
            .call(yAxis);
    }, [data])

    return <svg className='chart' ref={svgRef} />
};

export default Histogram;