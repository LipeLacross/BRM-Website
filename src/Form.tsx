import React, { useState } from 'react';

const Form: React.FC<{ onCalculate: (data: any) => void }> = ({ onCalculate }) => {
    const [gender, setGender] = useState<'male' | 'female'>('male');
    const [age, setAge] = useState<number>(25);
    const [weight, setWeight] = useState<number>(70);
    const [height, setHeight] = useState<number>(170);
    const [activity, setActivity] = useState<'sedentary' | 'light' | 'moderate' | 'heavy' | 'athlete'>('sedentary');
    const [bodyFat, setBodyFat] = useState<number | ''>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onCalculate({ gender, age, weight, height, activity, bodyFat });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Preencha seus dados</h2>
            <div>
                <label>Gênero:</label>
                <select value={gender} onChange={(e) => setGender(e.target.value as 'male' | 'female')}>
                    <option value="male">Masculino</option>
                    <option value="female">Feminino</option>
                </select>
            </div>
            <div>
                <label>Idade:</label>
                <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} />
            </div>
            <div>
                <label>Peso (kg):</label>
                <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} />
            </div>
            <div>
                <label>Altura (cm):</label>
                <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} />
            </div>
            <div>
                <label>Nível de Atividade:</label>
                <select value={activity} onChange={(e) => setActivity(e.target.value as 'sedentary' | 'light' | 'moderate' | 'heavy' | 'athlete')}>
                    <option value="sedentary">Sedentário</option>
                    <option value="light">Exercício Leve</option>
                    <option value="moderate">Exercício Moderado</option>
                    <option value="heavy">Exercício Intenso</option>
                    <option value="athlete">Atleta</option>
                </select>
            </div>
            <div>
                <label>% de Gordura Corporal (opcional):</label>
                <input type="number" value={bodyFat} onChange={(e) => setBodyFat(e.target.value ? Number(e.target.value) : '')} />
            </div>
            <button type="submit">CALCULAR</button>
        </form>
    );
};

export default Form;
