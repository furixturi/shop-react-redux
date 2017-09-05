import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import configureStore from '../store/configureStore';
import Home from './Home';
import Detail from './Detail';

const store = configureStore();

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Route exact path="/" component = {Home} />
                        <Route path="/detail/:id" component = {Detail} />
                    </div>
                </Router>
            </Provider>
        );
    }
}
