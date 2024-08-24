import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import FAQ from './Pages/FAQ';
import Contact from './Pages/Contact';
import Terms from './Pages/Terms';
import Privacy from './Pages/Privacy';
import './styles/App.sass';

const App: React.FC = () => {
    const [results, setResults] = useState<any>(null);

    const calculateTMB = (data: any) => {
        // Cálculo atualizado para a fórmula de Harris-Benedict
        const bmr = data.gender === 'male'
            ? 66 + (13.7 * data.weight) + (5 * data.height) - (6.8 * data.age)
            : 655 + (9.6 * data.weight) + (1.8 * data.height) - (4.7 * data.age);

        const maintenance = bmr * (data.activity === 'sedentary' ? 1.2 : data.activity === 'light' ? 1.375 : data.activity === 'moderate' ? 1.55 : data.activity === 'heavy' ? 1.725 : 1.9);
        const weeklyCalories = maintenance * 7;
        const idealWeight = data.height - 100;
        const bmi = data.weight / ((data.height / 100) ** 2);

        const maxMusclePotential = data.gender === 'male'
            ? (data.height - 100) * 0.9
            : (data.height - 100) * 0.8;

        const bulkMacros = {
            protein: data.weight * 2,
            fats: data.weight * 1,
            carbs: data.weight * 4,
        };

        const cuttingMacros = {
            protein: data.weight * 2,
            fats: data.weight * 0.8,
            carbs: data.weight * 2.5,
        };

        setResults({
            bmr,
            maintenance,
            weeklyCalories,
            idealWeight,
            bmi,
            maxMusclePotential,
            bulkMacros,
            cuttingMacros,
        });
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
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/privacy" element={<Privacy />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
