import React from "react";

const CartEmpty: React.FC = () => {
    return (
        <div>
            <div className="container container--cart">
                <div className="cart cart--empty">
                    <h2>Корзина пустая <span>🙂</span></h2>
                    <p>
                        Перейдите на главную страницу, чтобы наполнить ее
                    </p>
                    <img src="/img/empty-cart.png" alt="Empty cart"/>
                        <a href="/" className="button button--black">
                            <span>Вернуться назад</span>
                        </a>
                </div>
            </div>
        </div>
    );
}

export default CartEmpty