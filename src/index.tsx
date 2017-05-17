import * as React from "react";
import * as ReactDOM from "react-dom";

import Hello from './containers/hello';
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';

const store = createStore<StoreState>(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
});

ReactDOM.render(
    <Provider store={store}>
        <Hello />
    </Provider>,
    document.getElementById('content') as HTMLElement
);
