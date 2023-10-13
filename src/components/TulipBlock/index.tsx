import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addItem} from '../../redux/cart/slice';
import {CartItem} from '../../redux/cart/types';
import {RootState} from '../../redux/store';
import styles from './TulipBlock.module.scss';

type TulipBlockProps = { id: string, imageUrl: string, title: string, price: number, sizes?: number[] }

const TulipBlock: React.FC<TulipBlockProps> = ({id, imageUrl, title, price, sizes}) => {
    const dispatch = useDispatch();
    const items = useSelector((state: RootState) => state.cart.items);
    const sameItems = items.filter(obj => obj.id === id);

    const addedCount = sameItems.reduce((sum: number, obj) => {
        return obj.count + sum;
    }, 0);

    const [sellOption, setSellOption] = useState(0);
    const [sizeOption, setSizeOption] = useState(0);
    const [finalPrice, setFinalPrice] = useState(price);
    const [isHovered, setIsHovered] = useState(false);

    const sellType = ['опт', 'розница'];
    const sizeType = [26, 30];

    const calculatePrice = () => {
        let finalPrice = price;

        if (sellType[sellOption] === 'розница') {
            finalPrice *= 1.1;
        }

        if (sizeType[sizeOption] === 30) {
            finalPrice *= 1.05;
        }

        setFinalPrice(Math.round(finalPrice));

    };

    useEffect(() => {
        calculatePrice();
    }, [sizeOption, sellOption]);


    const activeOptionClass = (index: number, parameter: number) => parameter === index ? 'active' : '';

    const onClickAddItem = () => {
        const item: CartItem = {
            id,
            imageUrl,
            title,
            price: finalPrice,
            sellType: sellType[sellOption],
            sizeType: sizeType[sizeOption],
            count: 0
        };
        dispatch(addItem(item));
    };

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };

    return (
        <div className="tulip-block">
            <div className={styles.above_part} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <div className={styles.description}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolor
                        dolore harum omnis, porro recusandae.</p>
                </div>
                <div className={styles.pic}>
                    <img
                        className="tulip-block__image"
                        src={imageUrl}
                        alt="Tulip"
                    />
                    <h4 className="tulip-block__title">{title}</h4>
                </div>
            </div>
            <div className="tulip-block__selector">
                <ul>
                    {sellType.map((type, i) =>
                        <li
                            key={type}
                            className={activeOptionClass(i, sellOption)}
                            onClick={
                                () => {
                                    setSellOption(i);
                                }
                            }
                        >{sellType[i]}</li>)}
                </ul>
                <ul>
                    {sizes.map((size, i) => <li
                        key={size}
                        className={activeOptionClass(i, sizeOption)}
                        onClick={
                            () => {
                                setSizeOption(i);
                            }
                        }
                    >{size} см.</li>)}
                </ul>
            </div>
            <div className="tulip-block__bottom">
                <div className="tulip-block__price">от {finalPrice} ₽</div>
                <button
                    onClick={onClickAddItem}
                    className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    {addedCount > 0 && <i>{addedCount}</i>}
                </button>
            </div>
        </div>
    );
};

export default TulipBlock;