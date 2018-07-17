import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './DevTools';
import { getCountries } from '../src/actions/actions-countries';
import Navigation from './presentational/navigation.component';

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={Navigation}>
                <div>
                    <Navigation />
                    <h1>Inicjalizacja projektu</h1>
                    <DevTools />
                </div>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')    
);

store.dispatch(getCountries());