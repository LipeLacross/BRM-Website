import React from 'react';
import Form from '../Form';
import Results from '../Results';

interface HomeProps {
    onCalculate: (data: any) => void;
    results: any;
}

const Home: React.FC<HomeProps> = ({ onCalculate, results }) => {
    return (
        <div>
            <h1>Bem-vindo ao SuaTmb</h1>
            <p>Aqui você pode calcular sua taxa de metabolismo basal e outras métricas importantes para o planejamento da sua dieta.</p>
            <Form onCalculate={onCalculate} />
            {results && <Results results={results} />}
        </div>
    );
}

export default Home;
