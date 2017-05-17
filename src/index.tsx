import * as React from "react";
import * as ReactDOM from "react-dom";

import Hello from './containers/hello';
import { Provider } from 'react-redux';

import { createStore } from 'redux';
// import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';

import reducers from './store/reducers';

const store = createStore<StoreState>(
    reducers
);

ReactDOM.render(
    <Provider store={store}>
        <Hello />
    </Provider>,
    document.getElementById('content') as HTMLElement
);
