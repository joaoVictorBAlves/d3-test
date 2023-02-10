import BarChart from "../components/BarChart";
const gerarNumeros = (qtd = 5, min = 0, max = 10) => {
  var numeros = [];
  for (let i = 0; i < qtd; i++) {
    numeros.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return numeros
}
const Home = () => {
  return (
    <div className="container">
      <BarChart data={[1, 2, 3, 4, 9]} />
      <BarChart data={gerarNumeros(10, 0, 100)} />
      <BarChart data={gerarNumeros(5, 0, 1000)} />
      <BarChart data={gerarNumeros()} />
    </div>
  );
}

export default Home;