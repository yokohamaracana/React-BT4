import React from 'react';
import store from './redux/store';
import {Provider} from 'react-redux';
import {Counter} from './Counter';
export default function Navigator() {
    return (
    <Provider store={store}>
        <Counter />
        </Provider>
    );
}