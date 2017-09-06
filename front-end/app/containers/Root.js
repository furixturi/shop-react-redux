import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router';

import configureStore from '../store/configureStore';
import Home from './Home';
import Detail from './Detail';

const store = configureStore();

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route exact path="/" component = {Home} />
                        <Route path="/detail/:id" component = {Detail} />
                        <Redirect to="/" />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}
