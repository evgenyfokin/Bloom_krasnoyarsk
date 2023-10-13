import styles from './Search.module.scss'
import {AiOutlineSearch} from 'react-icons/ai'
import {GrFormClose} from 'react-icons/gr'
import {useDispatch, useSelector} from "react-redux";
import {setSearchValue} from "../../redux/filter/slice";
import React, {useCallback, useRef, useState} from "react";
import debounce from 'lodash.debounce'

const Search: React.FC = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const inputRef = useRef<HTMLInputElement>(null)


    const onClickClear = () => {
        setValue('')
        dispatch(setSearchValue(''))
        inputRef.current?.focus()
    }

    const updateSearchValue = useCallback(
        debounce((str: string ) => {
            dispatch(setSearchValue(str))
        }, 1000), []
    )

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement >) => {
        const value = event.target.value
        setValue(value)
        updateSearchValue(value)

    }

    return (
        <div
            className={styles.root}>
            <AiOutlineSearch
                className={`${styles.rootIcon} ${styles.magnifier}`}
            />
            <input
                onChange={onChangeInput}
                ref={inputRef}
                type="text"
                placeholder="Поиск"
                value={value}
            />
            {value && <GrFormClose
                onClick={onClickClear}
                className={`${styles.rootIcon} ${styles.clear}`}
            />}
        </div>

    );
};

export default Search