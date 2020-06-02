import { FETCH_PAGE } from '../types'
import axios from 'configs/axios'

export const fetchPage = (url, page) => (dispacth) => {
    return axios.get(url).then(res => {
        dispacth({
            type: FETCH_PAGE,
            payload: {
                [page]: res.data
            }
        })
    })
}