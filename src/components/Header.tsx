import logo from '../assets/logoTodo.svg';

import styles from './Header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.srOnly}>TodoList</h1>
            <img src={logo} alt="Imagem do logo todo list" />
        </header>
    )
}