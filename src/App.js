 import './App.css';
import { Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import About from './pages/About';
import Main from './pages/Main';
import Stock from './pages/Stock';
import Stockdata from './pages/Stockdata'; 

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks" element={<Stock />} />
        <Route path="/stocks/:symbol" element={<Stockdata />} />
        
      </Routes>
    </div>
  );
}

export default App;
