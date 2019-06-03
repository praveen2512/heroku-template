import {combineReducers} from 'redux';
import itemReducer from './itemReducer';
//import { compileFunction } from 'vm';

export default combineReducers({
    itemReducer: itemReducer
})
