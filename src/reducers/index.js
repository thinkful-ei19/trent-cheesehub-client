import {combineReducers} from 'redux';

import {cheeseReducer} from './cheese';

const rootReducer = combineReducers({
    cheese: cheeseReducer
})

export default rootReducer;