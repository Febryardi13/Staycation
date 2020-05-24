import { FETCH_PAGE } from '../types'

const initalState = {}

export default function (state = initalState, action) {
    switch (action.type) {
        case FETCH_PAGE:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}