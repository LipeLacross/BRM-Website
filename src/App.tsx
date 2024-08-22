import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import FAQ from './Pages/FAQ';
import Contact from './Pages/Contact';
import './styles/App.scss';

const App: React.FC = () => {
    const [results, setResults] = useState<any>(null);

    const calculateTMB = (data: any) => {
        // lógica de cálculo
    };

    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home onCalculate={calculateTMB} results={results} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
