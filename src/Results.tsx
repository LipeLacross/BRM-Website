import React from 'react';

const Results: React.FC<{ results: any }> = ({ results }) => {
    if (!results) return null;

    return (
        <div className="results">
            <h2>Seus Resultados</h2>
            <p><strong>Taxa de Metabolismo Basal (BMR):</strong> {results.bmr} calorias por dia</p>
            <p><strong>Calorias de Manutenção:</strong> {results.maintenance} calorias por dia</p>
            <p><strong>Calorias Semanais:</strong> {results.weeklyCalories} calorias por semana</p>
            <p><strong>Peso Ideal:</strong> {results.idealWeight}</p>
            <p><strong>IMC:</strong> {results.bmi}</p>
            <p><strong>Potencial Muscular Máximo:</strong> {results.maxMusclePotential}</p>
            <p><strong>Macronutrientes:</strong></p>
            <ul>
                <li><strong>Proteínas:</strong> {results.macronutrients.protein}g</li>
                <li><strong>Gorduras:</strong> {results.macronutrients.fats}g</li>
                <li><strong>Carboidratos:</strong> {results.macronutrients.carbs}g</li>
            </ul>
        </div>
    );
};

export default Results;
