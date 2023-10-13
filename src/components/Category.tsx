import {useDispatch, useSelector} from "react-redux";
import {setActiveCategory} from "../redux/filter/slice";
import React from "react";
import {RootState} from '../redux/store';


type CategoryListType = {
    name: string
}

const Category: React.FC = () => {
    const dispatch = useDispatch()
    const activeCategory = useSelector((state: RootState) => state.filter.sort.activeCategory)

    const categories: CategoryListType[] = [{name: 'Все'}, {name: 'Фиолетовые'}, {name: 'Розовые'},
        {name: 'Красные'}, {name: 'Желтые'}, {name: 'Белые'}]

    const onchangeCategory = (index:number) => {
        dispatch(setActiveCategory(index))
    }


    return (
        <div className="categories">
            <ul>
                {categories.map((category, index) => <li key={index} onClick={() => onchangeCategory(index)}
                                                         className={activeCategory === index ? 'active' : ''}>{category.name}</li>)}
            </ul>
        </div>

    )
}

export default Category