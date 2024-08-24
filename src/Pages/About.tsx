import React from 'react';
import '../styles/About.sass';

const About: React.FC = () => {
    return (
        <div className="about-page">
            <h1>Sobre</h1>
            <p>
                Bem-vindo ao SuaTmb, uma plataforma projetada para ajudar você a calcular sua taxa de metabolismo basal e planejar suas dietas de acordo com suas necessidades.
            </p>
            <p>
                O SuaTmb utiliza fórmulas precisas e atualizadas para garantir que você tenha as informações necessárias para atingir seus objetivos de saúde e fitness.
            </p>
        </div>
    );
};

export default About;
