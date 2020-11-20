import { combineReducers } from 'redux';
import {weatherReducer} from "./home/reducer";

export default combineReducers({
    weather: weatherReducer

});
