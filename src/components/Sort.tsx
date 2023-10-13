import React, {useEffect, useRef, useState} from "react";
import {GoTriangleDown, GoTriangleUp} from "react-icons/go"
import {useDispatch, useSelector} from "react-redux";
import {setOrder, setSortProperty} from "../redux/filter/slice";
import {RootState} from '../redux/store';


type SortListType = {
    name: string
}


function Sort() {
    const sortRef = useRef<HTMLDivElement>(null)

    const dispatch = useDispatch()
    const {order, sortProperty} = useSelector((state: RootState) => state.filter.sort)

    const [isVisible, setIsVisible] = useState(false)

    const list: SortListType[] = [
        {name: 'популярности'},
        {name: 'цене'},
        {name: 'алфавиту'}]
    const orderArr = [<GoTriangleDown/>, <GoTriangleUp/>]


    useEffect(() => {
        // const handleClickOutside = (event: MouseEvent) => {
        //     const _event = event as MouseEvent & {
        //         path: EventTarget[]
        //     }
        //     if (sortRef.current &&  _event.path && !_event.path.includes(sortRef.current)) {
        //         setIsVisible(false)
        //     }
        // }
        const handleClickOutside = (event: Event) => {
            if (sortRef.current && event.composedPath && !event.composedPath().includes(sortRef.current)) {
                setIsVisible(false);
            }
        }
        document.body.addEventListener('click', handleClickOutside)

        return () => document.body.removeEventListener('click', handleClickOutside)
    }, []);


    return (
        <div ref={sortRef} className="sort">
            <div className="sort__label">
                <GoTriangleDown/>
                <b>Сортировка по:</b>
                <span onClick={() => {
                    setIsVisible(!isVisible)
                }}>{list[sortProperty].name}</span>
            </div>
            {isVisible && <div className="sort__popup">
                <ul className="sort__popup-order">
                    {orderArr.map((orderElem, i) =>
                        <li onClick={() => {
                            dispatch(setOrder(i))
                        }}
                            className={order === i ? 'active' : ''}
                            key={i}
                        >{orderElem}
                        </li>)}
                </ul>
                <ul>
                    {list.map((name, i) => <li
                        key={i}
                        onClick={() => {
                            dispatch(setSortProperty(i))
                            setIsVisible(false)
                        }}
                        className={sortProperty === i ? 'active' : ''}
                    >{name.name}</li>)}
                </ul>
            </div>}
        </div>

    )
}

export default Sort