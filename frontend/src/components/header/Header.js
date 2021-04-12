import React from 'react';
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <h1 className={styles.header_title}>Chat<span className={styles.header_span}>ik</span>
            </h1>
        </div>
    );
};

export default Header;