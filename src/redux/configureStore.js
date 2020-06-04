import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Dishes } from "./dishes";
import { Comments } from "./comments";
import { Leaders } from "./leaders";
import { Promotions } from "./promotions";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from "react-redux-form";
import { IntitialFeedback } from './forms';

export const ConfigureStore=()=>{
	const store= createStore(
		combineReducers({
			dishes:Dishes,
			comments:Comments,
			promotions: Promotions,
			leaders: Leaders,
			...createForms({
				feedback:IntitialFeedback
			})
		}),
		applyMiddleware(thunk,logger)
	);
	return store;
}