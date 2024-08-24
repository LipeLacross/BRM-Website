import React from 'react';
import '../styles/FAQ.sass';

const FAQ: React.FC = () => {
    return (
        <div className="faq-page">
            <h1>Perguntas Frequentes</h1>
            <div className="faq-item">
                <h2>Como o cálculo da TMB é feito?</h2>
                <p>
                    A Taxa de Metabolismo Basal (TMB) é calculada utilizando a fórmula de Harris-Benedict, que considera fatores como idade, peso, altura e sexo para estimar a quantidade de calorias que seu corpo precisa em repouso.
                </p>
            </div>
            <div className="faq-item">
                <h2>Como posso usar a plataforma para planejar minha dieta?</h2>
                <p>
                    Após calcular sua TMB, você pode usar as seções de Manutenção, Bulk e Cutting para ajustar sua ingestão de macronutrientes e calorias de acordo com seus objetivos.
                </p>
            </div>
        </div>
    );
};

export default FAQ;
