import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.sass';

const Header: React.FC = () => {
    return (
        <header>
            <div className="container">
                <div className="logo-container">
                    <img src="/favicon.svg" alt="Logo SuaTmb" className="logo" />
                    <h1>SuaTmb</h1>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Início</Link></li>
                        <li><Link to="/about">Sobre</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/contact">Contato</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
