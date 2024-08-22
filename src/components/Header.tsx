import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

const Header: React.FC = () => {
    return (
        <header>
            <h1>SuaTmb</h1>
            <nav>
                <ul>
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="/about">Sobre</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/contact">Contato</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
