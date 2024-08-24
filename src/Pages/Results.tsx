import React from 'react';
import '../styles/Results.sass';

interface ResultsProps {
    results: any;
}

const formatNumber = (num: number) => num.toFixed(2);

const Results: React.FC<ResultsProps> = ({ results }) => {
    if (!results) return null;

    const maintenanceMacros = results.maintenanceMacros || {};
    const bulkMacros = results.bulkMacros || {};
    const cuttingMacros = results.cuttingMacros || {};

    return (
        <div className="results">
            <h2>Seus Resultados</h2>

            <section className="result-section">
                <h3>Taxa de Metabolismo Basal (BMR)</h3>
                <p><strong>Valor:</strong> {formatNumber(results.bmr)} calorias por dia</p>
                <p>Este é o número de calorias que seu corpo precisa para manter funções vitais enquanto está em repouso.</p>
            </section>

            <section className="result-section">
                <h3>Calorias de Manutenção</h3>
                <p><strong>Valor:</strong> {formatNumber(results.maintenance)} calorias por dia</p>
                <p>Quantas calorias você deve consumir diariamente para manter seu peso atual, considerando seu nível de atividade.</p>
            </section>

            <section className="result-section">
                <h3>Calorias Semanais</h3>
                <p><strong>Valor:</strong> {formatNumber(results.weeklyCalories)} calorias por semana</p>
                <p>Total de calorias que você deve consumir semanalmente para manter seu peso atual.</p>
            </section>

            <section className="result-section">
                <h3>Peso Ideal</h3>
                <p><strong>Valor:</strong> {formatNumber(results.idealWeight)} kg</p>
                <p>Estimativa do peso ideal com base na sua altura e na faixa saudável de IMC.</p>
            </section>

            <section className="result-section">
                <h3>IMC</h3>
                <p><strong>Valor:</strong> {formatNumber(results.bmi)}</p>
                <p>Índice de Massa Corporal, que indica se seu peso está dentro da faixa saudável para sua altura.</p>
            </section>

            <section className="result-section">
                <h3>Potencial Muscular Máximo</h3>
                <p><strong>Valor:</strong> {formatNumber(results.maxMusclePotential)} kg</p>
                <p>Estimativa da quantidade máxima de massa muscular que você pode ganhar com base na sua altura e histórico de treinamento.</p>
            </section>

            <section className="result-section bulk">
                <h3>Ganho de Massa (Bulk)</h3>
                <p><strong>Calorias de Bulk:</strong> {formatNumber(results.maintenance + 500)} calorias por dia</p>
                <p>Calorias recomendadas para ganho de massa muscular, adicionando um superávit calórico.</p>
                <p><strong>Proteínas:</strong> {formatNumber(bulkMacros.protein || 0)}g</p>
                <p><strong>Gorduras:</strong> {formatNumber(bulkMacros.fats || 0)}g</p>
                <p><strong>Carboidratos:</strong> {formatNumber(bulkMacros.carbs || 0)}g</p>
                <p>Macronutrientes recomendados para ganhar massa muscular.</p>
                <p><em>Se você não está ganhando massa, considere aumentar um pouco os carboidratos.</em></p>
            </section>

            <section className="result-section cutting">
                <h3>Perda de Gordura (Cutting)</h3>
                <p><strong>Calorias de Cutting:</strong> {formatNumber(results.maintenance - 500)} calorias por dia</p>
                <p>Calorias recomendadas para perda de gordura, com um déficit calórico.</p>
                <p><strong>Proteínas:</strong> {formatNumber(cuttingMacros.protein || 0)}g</p>
                <p><strong>Gorduras:</strong> {formatNumber(cuttingMacros.fats || 0)}g</p>
                <p><strong>Carboidratos:</strong> {formatNumber(cuttingMacros.carbs || 0)}g</p>
                <p>Macronutrientes recomendados para reduzir o percentual de gordura enquanto preserva a massa muscular.</p>
                <p><em>Se você não está perdendo gordura, considere diminuir um pouco os carboidratos.</em></p>
            </section>
        </div>
    );
};

export default Results;
