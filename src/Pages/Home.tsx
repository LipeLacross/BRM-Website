import React from 'react';
import Form from '../Pages/Form';
import Results from '../Pages/Results';

interface HomeProps {
    onCalculate: (data: any) => void;
    results: any;
}

const Home: React.FC<HomeProps> = ({ onCalculate, results }) => {
    return (
        <div className="home container">
            <h1>Bem-vindo ao SuaTmb</h1>
            <p>Aqui você pode calcular sua Taxa de Metabolismo Basal (TMB) e outras métricas importantes para o planejamento da sua dieta.</p>
            <p>O cálculo da TMB é feito utilizando a Fórmula de Harris-Benedict, que leva em consideração seu gênero, idade, peso, altura e nível de atividade para estimar a quantidade de calorias que seu corpo precisa em repouso.</p>
            <p>Além disso, o potencial máximo muscular é calculado com base na fórmula de Martin Berkhan, oferecendo uma estimativa de seu potencial máximo de ganho muscular.</p>
            <Form onCalculate={onCalculate} />
            {results && <Results results={results} />}
        </div>
    );
}

export default Home;
