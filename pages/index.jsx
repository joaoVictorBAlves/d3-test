import BarChart from "../components/BarChart";
import Histogram from "../components/Histogram";
import data from "../data/unemployment.json"

const gerarNumeros = (qtd = 5, min = 0, max = 10) => {
  var numeros = [];
  for (let i = 0; i < qtd; i++) {
    numeros.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return numeros
}

const rateOfUnemployment = data.map(d => d.rate);

const Home = () => {
  return (
    <div className="container">
      <h2 style={{ textAlign: "center" }}>Gráficos de barra</h2>
      <div className="group">
        <BarChart data={[1, 2, 3, 4, 9]} />
        <BarChart data={gerarNumeros(5, 0, 100)} />
        <BarChart data={gerarNumeros(5, 0, 1000)} />
      </div>
      <br />
      <h2 style={{ textAlign: "center" }}>Histograma</h2>
      <div className="group">
        <Histogram data={rateOfUnemployment} />
      </div>
    </div>
  );
}

export default Home;