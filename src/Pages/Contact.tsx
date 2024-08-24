import React, { useState } from 'react';
import '../styles/Contact.sass';


const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Lógica de envio de e-mail ou formulário
        try {
            // Exemplo de lógica, substitua com sua integração real
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (response.ok) {
                setStatus('Mensagem enviada com sucesso!');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                throw new Error('Erro ao enviar a mensagem.');
            }
        } catch (error) {
            setStatus('Erro ao enviar a mensagem. Tente novamente mais tarde.');
        }
    };

    return (
        <div className="contact-page">
            <h1>Contato</h1>
            <p>Você pode entrar em contato comigo através dos seguintes meios:</p>
            <ul>
                <li>Email: <a href="mailto:feliperioscross.br@gmail.com">feliperioscross.br@gmail.com</a></li>
                <li>Instagram: <a href="https://instagram.com/lipelacross" target="_blank" rel="noopener noreferrer">@lipelacross</a></li>
            </ul>
            <p>Ou preencha o formulário abaixo:</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Mensagem:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Enviar</button>
                {status && <p className="status-message">{status}</p>}
            </form>
        </div>
    );
};

export default Contact;