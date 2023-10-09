import './App.css';
import { Routes, Route } from "react-router-dom"
import Layout from './Components/Layout';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';


function App() {
  return (
    <div className="App">
      <Layout/>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/contact" element={ <Contact /> } />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
