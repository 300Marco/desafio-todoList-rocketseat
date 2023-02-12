import logo from '../assets/logo.svg';

import './Header.module.css';

export function Header() {
    return (
        <header>
            <img src={logo} alt="Imagem do logo todo list" />
        </header>
    )
}