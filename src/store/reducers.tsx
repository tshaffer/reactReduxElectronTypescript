import {combineReducers} from 'redux';
import { StoreState } from '../types/index';

import appReducer from './app';

const rootReducer = combineReducers<StoreState>({
    app: appReducer,
});

export default rootReducer;
