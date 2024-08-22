import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.scss';

const Footer: React.FC = () => {
    return (
        <footer>
            <p>&copy; 2024 Felipe Moreira Rios. Todos os direitos reservados.</p>
            <nav>
                <ul>
                    <li><Link to="/terms">Termos</Link></li>
                    <li><Link to="/privacy">Privacidade</Link></li>
                    <li><Link to="/contact">Contato</Link></li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
