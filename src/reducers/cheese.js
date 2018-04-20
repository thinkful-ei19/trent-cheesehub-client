import {
    FETCH_CHEESE_REQUEST,
    FETCH_CHEESE_ERROR,
    FETCH_CHEESE_SUCCESS
} from '../actions/cheese';

const initialState = {
    cheeses: [],
    loading: false,
    error: null
}

export const cheeseReducer = (state = initialState, action) => {
    if (action.type === FETCH_CHEESE_REQUEST ){
        return {
            ...state,
            loading: true,
            error: null
        }
    }
    else if (action.type === FETCH_CHEESE_SUCCESS ){
        console.log(action.cheeses);
        return {
            ...state,
            cheeses : action.cheeses,
            loading: false,
            error: null
        }
    }
    else if (action.type === FETCH_CHEESE_ERROR ){
        return {
            ...state,
            loading: false,
            error: action.error
        }
    }
    return state
}