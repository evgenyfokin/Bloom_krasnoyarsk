import {useEffect} from "react";
import {useSelector} from "react-redux";
import {fetchTulips} from "../redux/tulips/types";
import {useAppDispatch} from "../redux/store";
import qs from "qs"

export function useTulips() {
    const dispatch = useAppDispatch()

    const {activeCategory, order, sortProperty} = useSelector(state => state.filter.sort)

    const sorts = ['rating', 'price', 'title']
    const getTulips = async () => {
        dispatch(fetchTulips({
                    sorts,
                    sortProperty,
                    order,
                    activeCategory

        }))
    }


    useEffect(() => {
        getTulips()
        window.scrollTo(0, 0)
    }, [sortProperty, order, activeCategory])

    useEffect(() => {
        const queryString = qs.stringify({
            sortProperty: sorts[sortProperty],
            order: order === 0 ? 'desc' : 'asc',
            activeCategory: activeCategory > 0 ? `&category=${activeCategory}` : ''
        })

    }, [sortProperty, order, activeCategory])

}
