import {combineReducers} from 'redux';

import {cheeseReducer} from './cheese';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    cheese: cheeseReducer,
    form: formReducer
})

export default rootReducer;