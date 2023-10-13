import {useTulips} from "../hooks/tulips.js";
import {useSelector} from "react-redux";
import React from "react";
import {Status} from "../redux/tulips/types";
import { RootState} from "../redux/store";
import {TulipItem} from "../redux/tulips/types";

import {Category, Sort, Skeleton, TulipBlock} from "../components"

const Home: React.FC = () => {
    const searchState = useSelector((state: RootState) => state.filter.sort.searchValue)
    const {status, items} = useSelector((state: RootState) => state.tulips)

    useTulips()

    return (
        <>
            <div className="content__top">
                <Category/>
                <Sort/>
            </div>
            <h2 className="content__title">Все тюльпаны</h2>
            <div className="content-wrapper">
                {status === 'error' && (
                    <div className="content__error-info">
                        <h2>Произошла ошибка 😕</h2>
                        <p>Не удалось получить цветы, пожалуйста, повторите попытку позже</p>
                    </div>
                )}
                <div className="content__items">
                    {status === Status.LOADING
                        ? [...new Array(10)].map((_, i: number) => <Skeleton key={i}/>)
                        : items?.filter(item => item.title.toLowerCase().includes(searchState.toLowerCase())).map(tulip =>
                            <TulipBlock key={tulip.id}{...tulip}/>)
                    }
                </div>
            </div>
        </>
    )
}

export default Home