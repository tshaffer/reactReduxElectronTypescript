import {combineReducers} from 'redux';
import {Action} from 'redux';

import { StoreState } from '../types/index';

// ------------------------------------
// Constants
// ------------------------------------
export const INCREMENT_ENTHUSIASM = 'INCREMENT_ENTHUSIASM';
export const DECREMENT_ENTHUSIASM = 'DECREMENT_ENTHUSIASM';

// ------------------------------------
// Actions
// ------------------------------------
export function incrementEnthusiasm(): Action {
    return {
        type: INCREMENT_ENTHUSIASM
    }
}

export function decrementEnthusiasm(): Action {
    return {
        type: DECREMENT_ENTHUSIASM
    }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    enthusiasmLevel : 1,
    languageName: 'Typescript'
};

export default function(state : StoreState = initialState, action : Action) {

    switch (action.type) {

        case INCREMENT_ENTHUSIASM: {
            return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
        }
        case DECREMENT_ENTHUSIASM: {
            return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
        }
    }

    return state;
}
