import React from 'react';
import styles from './Footer.module.scss'

export const Index: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className=" container">
                <div className={styles.footer__content}>
                    <div className={styles.footer__content_text}>
                        <p>Есть вопросы? Звоните: +7(950)000294</p>
                        <p>© 2018 - 2023 Все права защищены.</p>
                    </div>
                    <div className={styles.footer__content_logo}>
                        <img width="25" src="/img/tulip-logo.svg" alt="Tulip logo"/>
                        <p>Bloom Krasnoyarsk</p>
                    </div>


                </div>
            </div>
        </footer>
    )
};