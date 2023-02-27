import './App.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from './Container/Navbar/Navbar';
import Focus from './Container/Landing/Focus/Focus';
import Landing from './Container/Landing/Landing';
import ApexCharts from 'apexcharts'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
    </div>
  );
}

export default App;
