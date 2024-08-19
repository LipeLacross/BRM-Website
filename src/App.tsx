import React, { useState } from 'react';
import './styles/App.scss'; // Importar o SCSS principal
import Form from './Form';
import Results from './Results';

const App: React.FC = () => {
  const [results, setResults] = useState<any>(null);

  const calculateResults = (data: any) => {
    const bmr = 10 * data.weight + 6.25 * data.height - 5 * data.age + (data.gender === 'male' ? 5 : -161);
    const activityMultiplier: any = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      heavy: 1.725,
      athlete: 1.9
    };
    const maintenance = bmr * activityMultiplier[data.activity];
    const weeklyCalories = maintenance * 7;
    const bmi = (data.weight / ((data.height / 100) ** 2)).toFixed(1);
    const idealWeight = 'A calcular'; // Adicione lógica para peso ideal
    const maxMusclePotential = 'A calcular'; // Adicione lógica para potencial muscular
    const macronutrients = {
      protein: (maintenance * 0.3 / 4).toFixed(0),
      fats: (maintenance * 0.35 / 9).toFixed(0),
      carbs: (maintenance * 0.35 / 4).toFixed(0)
    };

    setResults({ bmr, maintenance, weeklyCalories, bmi, idealWeight, maxMusclePotential, macronutrients });
  };

  return (
      <div className="App">
        <header className="App-header">
          <h1>Calculadora de Calorias e Mais</h1>
        </header>
        <main>
          <Form onCalculate={calculateResults} />
          <Results results={results} />
        </main>
      </div>
  );
};

export default App;
