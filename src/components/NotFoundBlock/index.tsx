import styles from './NotFoundBlock.module.scss'
import React from "react";
export const NotFoundBlock: React.FC = () => {
    return (
        <div className={styles.root}>
            <h1>
                <span>😕</span>
                <br/>
                <p>Ничего не найдено</p>
            </h1>
            <p className={styles.description}>Нам не удалось найти запрашиваемую страницу</p>

        </div>
    );
}

export default NotFoundBlock