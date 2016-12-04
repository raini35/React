import {combineReducers } from 'redux'; 
import GifsReducer './gifs'; 

const rootReducer = combineReducers({
	gifs: GifsReducer
}); 

export default rootReducer; 