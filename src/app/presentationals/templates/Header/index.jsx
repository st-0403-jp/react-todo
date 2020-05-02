import React from 'react';
import { Link } from "react-router-dom";
import css from './style.css';

class Header extends React.Component {
    render () {
        return (
            <header className={css.header}>
                <h1><Link to="/">Todo App</Link></h1>
                <nav className={css.nav}>
                    <div className={css.hamburger}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className={css.links}>
                        <li><a>リンク</a></li>
                        <li><a>リンク</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
