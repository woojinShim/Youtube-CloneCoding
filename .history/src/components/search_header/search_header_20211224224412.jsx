import styles from './search_header.module.css';
import React from 'react';

const SearchHeader = props => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.img} src="/images/logo.png" alt="logo" />
                <h1 className={styles.title>Youtube< />
            </div>
            <input className={styles.input} type="search" placeholder="Search..." />
            <button className={styles.button} type="submit">
                <img className={styles.buttonImg} src="/images/search/png" alt="search" />
            </button>
        </header>
    );
};

export default SearchHeader;