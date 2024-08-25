import React, { useState } from 'react';
import '../styles/Form.sass';

type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'heavy' | 'extreme';

interface FormProps {
    onCalculate: (data: {
        gender: 'male' | 'female';
        age: number;
        weight: number;
        height: number;
        activity: ActivityLevel;
    }) => void;
}

const Form: React.FC<FormProps> = ({ onCalculate }) => {
    const [gender, setGender] = useState<'male' | 'female'>('male');
    const [age, setAge] = useState<number | ''>('');
    const [weight, setWeight] = useState<number | ''>('');
    const [height, setHeight] = useState<number | ''>('');
    const [activity, setActivity] = useState<ActivityLevel>('sedentary');
    const [error, setError] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (
            age === '' ||
            weight === '' ||
            height === '' ||
            !Number.isFinite(age) || age <= 0 ||
            !Number.isFinite(weight) || weight <= 0 ||
            !Number.isFinite(height) || height <= 0
        ) {
            setError("Por favor, preencha todos os campos obrigatórios corretamente com valores maiores que 0.");
            return;
        }
        setError('');
        onCalculate({
            gender,
            age: Number(age),
            weight: Number(weight),
            height: Number(height),
            activity
        });
    };

    const isFormValid = age !== '' && weight !== '' && height !== '' && Number(age) > 0 && Number(weight) > 0 && Number(height) > 0;

    return (
        <div className="form-container">
            <h1>Cálculo de TMB</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Gênero:
                    <select value={gender} onChange={(e) => setGender(e.target.value as 'male' | 'female')}>
                        <option value="male">Masculino</option>
                        <option value="female">Feminino</option>
                    </select>
                </label>
                <label>
                    Idade:
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value === '' ? '' : Number(e.target.value))}
                        step="0.1"
                        required
                    />
                </label>
                <label>
                    Peso (kg):
                    <input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value === '' ? '' : Number(e.target.value))}
                        step="0.1"
                        required
                    />
                </label>
                <label>
                    Altura (cm):
                    <input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(e.target.value === '' ? '' : Number(e.target.value))}
                        step="0.1"
                        required
                    />
                </label>
                <label>
                    Nível de Atividade:
                    <select value={activity} onChange={(e) => setActivity(e.target.value as ActivityLevel)}>
                        <option value="sedentary">Sedentário - Pouco ou nenhum exercício</option>
                        <option value="light">Pouco Ativo - Exercício leve 1-3 dias/semana</option>
                        <option value="moderate">Moderadamente Ativo - Exercício moderado 3-5 dias/semana</option>
                        <option value="heavy">Muito Ativo - Exercício pesado 6-7 dias/semana</option>
                        <option value="extreme">Extremamente Ativo - Exercício muito pesado e treino de 2x ao dia</option>
                    </select>
                </label>
                {error && <div className="error-message">{error}</div>}
                <button type="submit" disabled={!isFormValid}>Calcular</button>
            </form>
        </div>
    );
};

export default Form;
