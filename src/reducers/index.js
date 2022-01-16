import {applyMiddleware, combineReducers, createStore} from 'redux';

import summariesReducer from "./summariesReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    summaries: summariesReducer,
});


export const store = createStore(rootReducer, applyMiddleware(thunk));