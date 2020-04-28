import React from 'react';
import css from './style.css';

class Footer extends React.Component {
    render () {
        return (
            <footer className={css.footer}>
                <small>&copy; 2020 ysinc</small>
            </footer>
        );
    }
}

export default Footer;
